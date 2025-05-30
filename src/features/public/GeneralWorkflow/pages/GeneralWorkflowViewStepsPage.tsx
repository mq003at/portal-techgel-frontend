import { useNavigate, useParams } from "react-router";
import { useGetGeneralWorkflowByIdQuery, useUpdateApprovalWorkflowNodeMutation } from "../api/GeneralWorkflowApi";
import { FaMinus } from "react-icons/fa";
import { ApprovalWorkflowNode, UpdateApprovalWorkflowNode } from "../DTOs/GeneralWorkflowDTO";
import { useEffect, useState } from "react";
import { GeneralWorkflowStatusLabels } from "../config/GeneralWorkflowTypes";
import { toast, ToastContainer } from "react-toastify";

export default function GeneralWorkflowViewStepsPage() {
  const { id = '' } = useParams<{ id: string }>();
  const [currentNode, setCurrentNode] = useState(0);
  const [updateApprovalWorkflowNode, { isLoading: isUpdating, isError: isUpdateError, error: updateError, isSuccess: isUpdateSuccess }] = useUpdateApprovalWorkflowNodeMutation();
  const [selectedFiles, setSelectedFiles] = useState<File[]>([]);

  const { data: generalWorkflow, isLoading, isFetching } = useGetGeneralWorkflowByIdQuery(id);
  const [nodes, setNodes] = useState<ApprovalWorkflowNode[]>();

  useEffect(() => {
    if (generalWorkflow?.approvalNodes) {
      setNodes(generalWorkflow.approvalNodes);
    }
  }, [generalWorkflow]);

  const navigate = useNavigate();

  if (isLoading || isFetching) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  // Hàm cập nhật nhanh các field của node hiện tại
  const updateNodeField = (field: keyof ApprovalWorkflowNode, value: any) => {
    if (!nodes) return;
    const updatedNodes = [...nodes];
    updatedNodes[currentNode] = { ...updatedNodes[currentNode], [field]: value };
    setNodes(updatedNodes);
  };

  const handleViewNode = (index: number) => {
    setCurrentNode(index);
  }

  const handleUpdate = async (formData: UpdateApprovalWorkflowNode, newFiles?: File[]) => {
  try {
    let uploadedFileUrls: string[] = [];

    if (selectedFiles && selectedFiles.length > 0) {
      // Tạo mảng các promise upload file
      const uploadPromises = selectedFiles.map(file => {
        const fileFormData = new FormData();
        fileFormData.append('file', file);

        return fetch('http://localhost:3000/upload-file', {
          method: 'POST',
          body: fileFormData,
        }).then(async res => {
          if (!res.ok) throw new Error('Upload file thất bại');
          const data = await res.json();
          console.log('data', data);
          return data.url;
        });
      });

      // Chờ tất cả upload xong
      uploadedFileUrls = await toast.promise(
        Promise.all(uploadPromises),
        {
          pending: 'Đang tải file lên...',
          success: 'Upload file thành công!',
          error: 'Upload file thất bại!',
        }
      );
    }

    formData.files = [...(formData.files || []), ...uploadedFileUrls];

    await toast.promise(
      updateApprovalWorkflowNode({ id, nodeId: formData.id, data: formData }).unwrap(),
      {
        pending: 'Đang cập nhật dữ liệu bước...',
        success: 'Cập nhật bước thành công!',
        error: 'Cập nhật bước thất bại!',
      }
    );

  } catch (error) {
    console.error('Lỗi trong quá trình cập nhật:', error);
    toast.error('Lỗi khi cập nhật hoặc upload file.');
  }
};



  const handleDeleteFile = async (fileUrl: string) => {
    try {
      await toast.promise(
        fetch(`http://localhost:3000/files?url=${encodeURIComponent(fileUrl)}`, {
          method: 'DELETE',
        }).then((res) => {
          if (!res.ok) throw new Error('Failed to delete file');
          return res.json();
        }),
        {
          pending: "Đang xoá file...",
          success: "Đã xoá file thành công!",
          error: "Xoá file thất bại!",
        }
      );

      if (!nodes) {
        console.error("nodes is undefined");
        return;
      }

      const updatedNodes = [...nodes];
      const updatedNode = { ...updatedNodes[currentNode] };
      updatedNode.files = updatedNode.files?.filter(f => f !== fileUrl);
      updatedNodes[currentNode] = updatedNode;

      setNodes(updatedNodes);
    } catch (err) {
      console.error("Lỗi khi xoá file:", err);
      toast.error("Lỗi khi xoá file.");
    }
  };


  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800">Quy trình {generalWorkflow?.mainId}</h2>
        <button
          className="btn btn-info flex items-center gap-2 hover:bg-blue-600 transition-colors"
          onClick={() => navigate('/main/general-workflow/')}
        >
          <FaMinus /> Quay lại
        </button>
      </div>

      {nodes && nodes.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-12">
          {/* TIMELINE */}
          <div className="md:w-1/3 h-[500px] overflow-y-auto relative border-l-4 border-primary pl-8 space-y-12
                scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200 scrollbar-thumb-rounded">
            <ul>
                {nodes.map((node, index) => {
                const isCurrent = index === currentNode;
                const isApproved = node.approvalStatus === 'APPROVED';

                return (
                    <li
                        key={node.id}
                        className={`relative cursor-pointer group mb-5 ${isCurrent ? 'z-10' : ''}`}
                        onClick={() => handleViewNode(index)}
                    >
                    <span
                        className={`absolute -left-6 top-1/2 transform -translate-y-1/2 rounded-full border-4 
                        ${isApproved ? 'border-success bg-success' : 'border-gray-300 bg-white'} 
                        w-8 h-8 flex items-center justify-center text-white font-bold`}

                    >
                        {index + 1}
                    </span>

                    <div
                        className={`p-4 rounded-lg shadow-md 
                        ${isCurrent ? 'border-4 border-success bg-primary text-white shadow-lg' : 'bg-white text-gray-700'}
                        group-hover:bg-primary group-hover:text-white transition-colors`}
                    >
                        <h3 className="text-lg font-semibold">{node.name}</h3>
                        <p className="text-sm mt-1">{GeneralWorkflowStatusLabels[node.approvalStatus]}</p>
                    </div>
                    </li>
                );
                })}
            </ul>
        </div>

          {/* DETAILS */}
          <div className="md:w-2/3 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-primary">Chi tiết bước {currentNode + 1}</h3>
            
            <form onSubmit={(e) => {
                e.preventDefault(); 
                const currentNodeData = nodes[currentNode];
                const formData: UpdateApprovalWorkflowNode = {
                  id: currentNodeData.id,
                  mainId: currentNodeData.mainId,
                  createdAt: currentNodeData.createdAt,
                  updatedAt: currentNodeData.updatedAt,
                  name: currentNodeData.name,
                  senderId: currentNodeData.senderId,
                  senderName: currentNodeData.senderName,
                  senderMessage: currentNodeData.senderMessage,
                  receiverId: currentNodeData.receiverId,
                  receiverName: currentNodeData.receiverName,
                  approvalComment: currentNodeData.approvalComment,
                  approvalStatus: currentNodeData.approvalStatus,
                  approvalDate: currentNodeData.approvalDate,
                  order: currentNodeData.order,
                  files: currentNodeData.files,
                };

                handleUpdate(formData);
              }}>
              <table className="table w-full border border-gray-200 rounded-lg overflow-hidden">
                <tbody>
                  <tr className="border-b">
                    <td className="font-semibold py-2">Mã</td>
                    <td className="py-2">{nodes[currentNode].mainId}</td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="font-semibold py-2">Người gửi</td>
                    <td className="py-2">
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        value={nodes[currentNode].senderId || ''}
                        onChange={(e) => updateNodeField('senderId', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold py-2">Tên người gửi</td>
                    <td className="py-2">
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        value={nodes[currentNode].senderName || ''}
                        onChange={(e) => updateNodeField('senderName', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="font-semibold py-2">Nội dung người gửi</td>
                    <td className="py-2">
                      <textarea
                        className="textarea textarea-bordered w-full"
                        value={nodes[currentNode].senderMessage || ''}
                        onChange={(e) => updateNodeField('senderMessage', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold py-2">Người nhận</td>
                    <td className="py-2">
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        value={nodes[currentNode].receiverId || ''}
                        onChange={(e) => updateNodeField('receiverId', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="font-semibold py-2">Tên người nhận</td>
                    <td className="py-2">
                      <input
                        type="text"
                        className="input input-bordered w-full"
                        value={nodes[currentNode].receiverName || ''}
                        onChange={(e) => updateNodeField('receiverName', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold py-2">Trạng thái</td>
                    <td className="py-2">
                      {/* <select
                        className="select select-bordered w-full"
                        value={nodes[currentNode].approvalStatus}
                        onChange={(e) => updateNodeField('approvalStatus', e.target.value)}
                      >
                        {Object.entries(GeneralWorkflowStatusLabels).map(([key, label]) => (
                          <option key={key} value={key}>
                            {label}
                          </option>
                        ))}
                      </select> */}
                      <td className="py-2">{GeneralWorkflowStatusLabels[nodes[currentNode].approvalStatus]}</td>
                    </td>
                  </tr>
                  <tr className="border-b bg-gray-50">
                    <td className="font-semibold py-2">Ngày duyệt</td>
                    <td className="py-2">{nodes[currentNode].approvalDate}</td>
                  </tr>
                  <tr className="border-b">
                    <td className="font-semibold py-2">Bình luận</td>
                    <td className="py-2">
                      <textarea
                        className="textarea textarea-bordered w-full"
                        value={nodes[currentNode].approvalComment || ''}
                        onChange={(e) => updateNodeField('approvalComment', e.target.value)}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-2">Thứ tự</td>
                    <td className="py-2">
                      <input
                        type="number"
                        className="input input-bordered w-full"
                        value={nodes[currentNode].order || ''}
                        onChange={(e) => updateNodeField('order', Number(e.target.value))}
                      />
                    </td>
                  </tr>
                  <tr>
                    <td className="font-semibold py-2 align-top">Files đã upload</td>
                    <td className="py-2 space-y-2">
                      {nodes[currentNode].files && nodes[currentNode].files.length > 0 ? (
                        nodes[currentNode].files.map((file, index) => (
                          <div key={index} className="flex items-center justify-between bg-gray-100 rounded px-3 py-2">
                            <a href={file} target="_blank" rel="noopener noreferrer" className="text-blue-600 underline">
                              {file}
                            </a>
                            <div className="flex gap-2">
                              <button
                                className="btn btn-sm btn-outline btn-error"
                                onClick={() => handleDeleteFile(file)}
                              >
                                Xóa
                              </button>
                            </div>
                          </div>
                        ))
                      ) : (
                        <span className="italic text-gray-500">Không có file</span>
                      )}
                    </td>
                  </tr>
                  <tr>
  <td className="font-semibold py-2 align-top">Thêm file mới</td>
  <td className="py-2">
    <input
  type="file"
  multiple
  onChange={(e) => {
    if (e.target.files) {
      setSelectedFiles(Array.from(e.target.files));
    }
  }}
/>
    {selectedFiles.length > 0 && (
      <ul className="mt-2 list-disc list-inside text-sm text-gray-700">
        {selectedFiles.map((file, idx) => (
          <li key={idx}>{file.name}</li>
        ))}
      </ul>
    )}
  </td>
</tr>

                </tbody>
              </table>
              <div className="mt-6 text-right">
                <button
                  className="btn btn-success"
                  type="submit"
                >
                  Cập nhật
                </button>
              </div>
            </form>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 italic text-lg">Chưa tạo các bước quy trình</div>
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
