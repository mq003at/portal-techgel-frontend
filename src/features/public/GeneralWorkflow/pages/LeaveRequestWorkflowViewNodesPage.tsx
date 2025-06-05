import { useNavigate, useParams } from 'react-router';
import { FaMinus } from 'react-icons/fa';
import { useEffect, useState } from 'react';
import {
  GeneralWorkflowStatusLabels,
  GeneralWorkflowStatusType,
} from '../config/GeneralWorkflowTypes';
import { toast, ToastContainer } from 'react-toastify';
import {
  useApproveLeaveRequestNodeMutation,
  useGetLeaveRequestByIdQuery,
  useUpdateLeaveRequestWorkflowMutation,
} from '../api/LeaveRequestWorkflowApi';
import { LeaveRequestNodeDTO } from '../DTOs/LeaveRequestNodeDTO';
import { useAppSelector } from '../../../../hooks/reduxHooks';
import LeaveRequestWorkflowDescriptionPage, {
  LeaveRequestWorkflowDescriptionPageProps,
} from './LeaveRequestWorkflowDescriptionPage';

export default function LeaveRequestWorkflowViewStepsPage() {
  const { id = '' } = useParams<{ id: string }>();
  const [currentNode, setCurrentNode] = useState(0);
  const [updateApprovalWorkflowNode] = useUpdateLeaveRequestWorkflowMutation();
  const [approveLeaveRequestNode] = useApproveLeaveRequestNodeMutation();
  const [isSigning, setIsSigning] = useState(false);
  const [workflowDescription, setWorkflowDescription] =
    useState<LeaveRequestWorkflowDescriptionPageProps | null>(null);
  const { employees } = useAppSelector((state) => state.phoneBook);
  const { user } = useAppSelector((state) => state.auth);
  const { data: leaveRequestWorkflow, isLoading, isFetching } = useGetLeaveRequestByIdQuery(id);
  const [nodes, setNodes] = useState<LeaveRequestNodeDTO[]>();

  useEffect(() => {
    if (leaveRequestWorkflow?.leaveRequestNodes) {
      // Create a shallow copy before sorting
      const sortedNodes = [...leaveRequestWorkflow.leaveRequestNodes].sort(
        (a, b) => (a.id ?? 0) - (b.id ?? 0)
      );

      if (sortedNodes.length > 2) {
        console.log(sortedNodes);
        setNodes(sortedNodes);
        setWorkflowDescription(
          leaveRequestWorkflow as unknown as LeaveRequestWorkflowDescriptionPageProps
        );
      }
    }
  }, [leaveRequestWorkflow]);

  const navigate = useNavigate();

  if (isLoading || isFetching) {
    return (
      <div className="flex items-center justify-center h-64">
        <div className="animate-spin rounded-full h-12 w-12 border-t-4 border-blue-500 border-solid"></div>
      </div>
    );
  }

  const updateNodeField = (field: keyof LeaveRequestNodeDTO, value: any) => {
    if (!nodes) return;
    const updatedNodes = [...nodes];

    updatedNodes[currentNode] = { ...updatedNodes[currentNode], [field]: value };
    setNodes(updatedNodes);
  };

  const handleViewNode = (index: number) => {
    setCurrentNode(index);
  };

  const handleSignApproval = async (nodeId: number, approvedId: number) => {
    try {
      setIsSigning(true);
      //await updateApprovalWorkflowNode({ nodeId, status: 'APPROVED' }).unwrap();
      await approveLeaveRequestNode({ id: nodeId, approvedId }).unwrap();
      toast.success('Đã ký duyệt thành công!');
    } catch (err) {
      toast.error('Lỗi khi ký duyệt');
    } finally {
      setIsSigning(false);
    }
  };

  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-extrabold text-gray-800">Đơn xin nghỉ phép</h2>
        <button
          className="btn btn-info flex items-center gap-2 hover:bg-blue-600 transition-colors"
          onClick={() => navigate('/main/leave-request/')}
        >
          <FaMinus /> Quay lại
        </button>
      </div>

      <div>
        {!workflowDescription ? (
          <div>Loading...</div>
        ) : (
          <LeaveRequestWorkflowDescriptionPage {...workflowDescription} />
        )}
      </div>

      {nodes && nodes.length > 0 ? (
        <div className="flex flex-col md:flex-row gap-12">
          <div className="md:w-1/3 h-[500px] overflow-y-auto relative border-l-4 border-primary pl-8 space-y-12 scrollbar-thin scrollbar-thumb-primary scrollbar-track-gray-200 scrollbar-thumb-rounded">
            <ul>
              {nodes.map((node, index) => {
                const isCurrent = index === currentNode;
                const isApproved = node.status.toLowerCase() === 'approved';

                return (
                  <li key={node.id} className="relative group mb-6">
                    <span
                      className={`absolute -left-6 top-1/2 transform -translate-y-1/2 rounded-full border-4 ${
                        isApproved ? 'border-success bg-success' : 'border-gray-300 bg-white'
                      } w-8 h-8 flex items-center justify-center text-white font-bold`}
                    >
                      {index + 1}
                    </span>

                    <div
                      onClick={() => handleViewNode(index)}
                      className={`p-4 rounded-lg shadow-md cursor-pointer ${
                        isCurrent
                          ? 'border-4 border-success bg-primary text-white shadow-lg'
                          : 'bg-white text-gray-700'
                      } group-hover:bg-primary group-hover:text-white transition-colors`}
                    >
                      <h3 className="text-lg font-semibold">{node.name}</h3>
                      <p className="text-sm mt-1">{GeneralWorkflowStatusLabels[node.status]}</p>
                    </div>

                    {isCurrent &&
                      user &&
                      'id' in user &&
                      node.status.toLowerCase() === 'pending' &&
                      node.approvedByIds.includes(user?.id) && (
                        <div className="mt-3">
                          <button
                            onClick={() => handleSignApproval(node?.id || -1, user.id)}
                            disabled={isSigning}
                            className="flex items-center justify-center gap-2 bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-full shadow-md transition-transform hover:scale-105"
                          >
                            {isSigning ? (
                              <span className="loading loading-spinner loading-sm"></span>
                            ) : (
                              <>
                                <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  className="h-5 w-5"
                                  viewBox="0 0 20 20"
                                  fill="currentColor"
                                >
                                  <path d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.54-10.46a.75.75 0 10-1.06-1.06L9 9.94 7.53 8.47a.75.75 0 10-1.06 1.06l2 2a.75.75 0 001.06 0l4-4z" />
                                </svg>
                                Ký duyệt
                              </>
                            )}
                          </button>
                        </div>
                      )}
                  </li>
                );
              })}
            </ul>
          </div>

          <div className="md:w-2/3 bg-white rounded-lg shadow-lg p-6">
            <h3 className="text-2xl font-bold mb-4 text-primary">
              Chi tiết bước {currentNode + 1}
            </h3>

            <table className="table w-full border border-gray-200 rounded-lg overflow-hidden">
              <tbody>
                <tr className="border-b">
                  <td className="font-semibold py-2">Mã</td>
                  <td className="py-2">{nodes[currentNode].mainId}</td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="font-semibold py-2">Người gửi</td>
                  <td className="py-2">
                    <div className="badge badge-primary">
                      {(() => {
                        const sender = employees?.find((e) => e.id === nodes[currentNode].senderId);
                        return sender
                          ? `${sender.mainId} - ${sender.firstName} ${sender.middleName} ${sender.lastName}`
                          : nodes[currentNode].senderId;
                      })()}
                    </div>
                  </td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="font-semibold py-2">Người duyệt</td>
                  <td className="py-2">
                    <div className="flex flex-wrap gap-2">
                      {(() => {
                        const approvedEmployees = employees?.filter((e) =>
                          nodes[currentNode].approvedByIds.includes(e.id)
                        );
                        return approvedEmployees && approvedEmployees.length > 0
                          ? approvedEmployees.map((e) => (
                              <div key={e.id} className="badge badge-primary">
                                {`${e.mainId} - ${e.firstName} ${e.middleName} ${e.lastName}`}
                              </div>
                            ))
                          : '';
                      })()}
                    </div>
                  </td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="font-semibold py-2">Đã được duyệt bởi</td>
                  <td className="py-2">
                    <div className="flex flex-wrap gap-2">
                      {(() => {
                        const hasBeenApprovedEmployees = employees?.filter((e) =>
                          nodes[currentNode].hasBeenApprovedByIds.includes(e.id)
                        );
                        return hasBeenApprovedEmployees && hasBeenApprovedEmployees.length > 0
                          ? hasBeenApprovedEmployees.map((e) => (
                              <div key={e.id} className="badge badge-primary">
                                {`${e.mainId} - ${e.firstName} ${e.middleName} ${e.lastName}`}
                              </div>
                            ))
                          : '';
                      })()}
                    </div>
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2">Trạng thái</td>
                  <td className="py-2">
                    {
                      GeneralWorkflowStatusLabels[
                        nodes[currentNode].status.toUpperCase() as GeneralWorkflowStatusType
                      ]
                    }
                  </td>
                </tr>
                <tr className="border-b bg-gray-50">
                  <td className="font-semibold py-2">Ngày duyệt</td>
                  <td className="py-2">{nodes[currentNode].approvedDates}</td>
                </tr>
                <tr className="border-b">
                  <td className="font-semibold py-2">Mô tả</td>
                  <td className="py-2">
                    <textarea
                      className="textarea textarea-bordered w-full"
                      value={nodes[currentNode].description || ''}
                      onChange={(e) => updateNodeField('description', e.target.value)}
                    />
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      ) : (
        <div className="text-center text-gray-500 italic text-lg">Chưa tạo các bước quy trình</div>
      )}
      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
