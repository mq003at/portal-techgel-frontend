import { useNavigate, useParams } from "react-router";
import { useGetGeneralWorkflowByIdQuery } from "../api/GeneralWorkflowApi";
import { FaMinus } from "react-icons/fa";
import { ApprovalWorkflowNode } from "../DTOs/GeneralWorkflowDTO";
import { useState } from "react";
import { GeneralWorkflowStatusLabels } from "../config/GeneralWorkflowTypes";

export default function GeneralWorkflowViewStepsPage() {
  const { id = '' } = useParams<{ id: string }>();
  const [currentNode, setCurrentNode] = useState(0);

  const { data: generalWorkflow, isLoading, isFetching } = useGetGeneralWorkflowByIdQuery(id);
  const nodes: ApprovalWorkflowNode[] | undefined = generalWorkflow?.approvalNodes;

  const navigate = useNavigate();

  if (isLoading || isFetching) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  const handleViewNode = (index: number) => {
    setCurrentNode(index);
  }

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800">Quy trình {generalWorkflow.mainId}</h2>
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
                const isEven = index % 2 === 0;
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

            <table className="table w-full border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-b">
                  <td className="font-semibold py-2">Mã</td>
                  <td className="py-2">{nodes[currentNode].mainId}</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="font-semibold py-2">Người gửi</td>
                  <td className="py-2">{nodes[currentNode].senderId}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2">Tên người gửi</td>
                  <td className="py-2">{nodes[currentNode].senderName}</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="font-semibold py-2">Nội dung người gửi</td>
                  <td className="py-2">{nodes[currentNode].senderMessage}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2">Người nhận</td>
                  <td className="py-2">{nodes[currentNode].receiverId}</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="font-semibold py-2">Tên người nhận</td>
                  <td className="py-2">{nodes[currentNode].receiverName}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2">Trạng thái</td>
                  <td className="py-2">
                    <span
                      className={`px-3 py-1 rounded-full text-sm font-semibold 
                        ${nodes[currentNode].approvalStatus === 'APPROVED' ? 'bg-green-100 text-green-700' : 'bg-yellow-100 text-yellow-700'}`}
                    >
                      {GeneralWorkflowStatusLabels[nodes[currentNode].approvalStatus]}
                    </span>
                  </td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="font-semibold py-2">Ngày duyệt</td>
                  <td className="py-2">{nodes[currentNode].approvalDate || 'Chưa duyệt'}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2">Bình luận</td>
                  <td className="py-2">{nodes[currentNode].approvalComment || '-'}</td>
                </tr>
                <tr>
                  <td className="font-semibold py-2">Thứ tự</td>
                  <td className="py-2">{nodes[currentNode].order}</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 italic text-lg">Chưa tạo các bước quy trình</div>
      )}
    </div>
  );
}
