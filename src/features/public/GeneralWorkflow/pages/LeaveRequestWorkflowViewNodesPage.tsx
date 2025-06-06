import { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router';
import { FaCheckCircle, FaMinus, FaTimesCircle } from 'react-icons/fa';
import {
  useApproveLeaveRequestNodeMutation,
  useGetLeaveRequestByIdQuery,
  useRejectLeaveRequestNodeMutation,
} from '../api/LeaveRequestWorkflowApi';
import { LeaveRequestNodeDTO } from '../DTOs/LeaveRequestNodeDTO';
import { useAppSelector } from '../../../../hooks/reduxHooks';
import LeaveRequestWorkflowDescriptionPage, {
  LeaveRequestWorkflowDescriptionPageProps,
} from './LeaveRequestWorkflowDescriptionPage';
import {
  GeneralWorkflowStatusLabels,
  GeneralWorkflowStatusType,
} from '../config/GeneralWorkflowTypes';
import { toast, ToastContainer } from 'react-toastify';

export default function LeaveRequestWorkflowViewStepsPage() {
  const { id = '' } = useParams<{ id: string }>();
  const [currentNode, setCurrentNode] = useState(0);
  const [isSigning, setIsSigning] = useState(false);
  const [workflowDescription, setWorkflowDescription] = useState<LeaveRequestWorkflowDescriptionPageProps | null>(null);

  const { employees } = useAppSelector((state) => state.phoneBook);
  const { user } = useAppSelector((state) => state.auth);

  const { data: leaveRequestWorkflow, isLoading, isFetching } = useGetLeaveRequestByIdQuery(id);

  const [nodes, setNodes] = useState<LeaveRequestNodeDTO[]>();
  const [approveLeaveRequestNode] = useApproveLeaveRequestNodeMutation();
  const [rejectLeaveRequestNode] = useRejectLeaveRequestNodeMutation();
  const navigate = useNavigate();

  useEffect(() => {
    if (leaveRequestWorkflow?.leaveRequestNodes) {
      const sortedNodes = [...leaveRequestWorkflow.leaveRequestNodes].sort(
        (a, b) => (a.id ?? 0) - (b.id ?? 0)
      );
      setNodes(sortedNodes);
      setWorkflowDescription(
        leaveRequestWorkflow as unknown as LeaveRequestWorkflowDescriptionPageProps
      );
    }
  }, [leaveRequestWorkflow]);

  const handleViewNode = (index: number) => setCurrentNode(index);

  const updateNodeField = (field: keyof LeaveRequestNodeDTO, value: any) => {
    if (!nodes) return;
    const updated = [...nodes];
    updated[currentNode] = { ...updated[currentNode], [field]: value };
    setNodes(updated);
  };

  const handleSignApproval = async (
    nodeId: number,
    approverId: number,
    isApprove = true
  ) => {
    try {
      setIsSigning(true);
      if(isApprove){
        await approveLeaveRequestNode({ id: nodeId, approverId }).unwrap();
        toast.success('Đã ký duyệt thành công!')
      }else{
        await rejectLeaveRequestNode({ id: nodeId, approverId }).unwrap();
        toast.error('Đã từ chối!');
      }
    } catch {
      toast.error('Lỗi khi thực hiện hành động');
    } finally {
      setIsSigning(false);
    }
  };

  const getEmployeeName = (id: number) => {
    const emp = employees?.find((e) => e.id === id);
    return emp ? `${emp.mainId} - ${emp.firstName} ${emp.middleName} ${emp.lastName}` : id;
  };

  const getEmployeeList = (ids: number[]) =>
    ids.map((id) => getEmployeeName(id)).join(', ');

  const renderActionButtons = (node: LeaveRequestNodeDTO) => {
    if (
      node.status.toLowerCase() === 'pending' &&
      user &&
      'id' in user &&
      node.approvedByIds.includes(user.id)
    ) {
      return (
        <div className="flex gap-4 mt-4">
          <button
            onClick={() => handleSignApproval(node.id || -1, user.id, true)}
            disabled={isSigning}
            className="btn btn-success btn-md shadow-md flex items-center gap-2"
          >
            <FaCheckCircle /> Ký duyệt
          </button>
          <button
            onClick={() => handleSignApproval(node.id || -1, user.id, false)}
            disabled={isSigning}
            className="btn btn-error btn-md shadow-md flex items-center gap-2"
          >
            <FaTimesCircle /> Từ chối
          </button>
        </div>
      );
    }
    return null;
  };

  const DetailItem = ({ label, value }: { label: string; value: any }) => (
    <div>
      <div className="text-sm opacity-60">{label}</div>
      <div className="font-medium text-base-content/90">{value || '—'}</div>
    </div>
  );

  const TimelineStepCard = ({
  node,
  isActive,
  onClick,
}: {
  node: LeaveRequestNodeDTO;
  isActive: boolean;
  onClick: () => void;
}) => {
  const status = node.status.toLowerCase();
  const isApproved = status === 'approved';

  const baseClasses = `transition-all duration-200 p-4 rounded-xl shadow-md cursor-pointer border-l-4 space-y-1`;
  const activeClasses = `bg-primary text-white border-primary scale-[1.02]`;
  const approvedClasses = `bg-green-100 border-green-500 text-green-800`;
  const defaultClasses = `bg-base-100 hover:bg-base-200 border-gray-300`;

  return (
    <div
      onClick={onClick}
      className={`${baseClasses} ${
        isActive
          ? activeClasses
          : isApproved
          ? approvedClasses
          : defaultClasses
      }`}
    >
      <div className="font-semibold text-lg">{node.name}</div>
      <div className="text-sm opacity-80">
        {GeneralWorkflowStatusLabels[node.status.toUpperCase() as GeneralWorkflowStatusType] ||
          node.status}
      </div>
    </div>
  );
};


  if (isLoading || isFetching || !nodes) {
    return (
      <div className="flex justify-center items-center h-64">
        <span className="loading loading-spinner text-primary"></span>
      </div>
    );
  }

  return (
    <div className="max-w-screen-xl mx-auto p-6 space-y-6">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-3xl font-bold">📋 Đơn xin nghỉ phép</h2>
        <button
          className="btn btn-outline btn-info"
          onClick={() => navigate('/main/leave-request/')}
        >
          <FaMinus /> Quay lại
        </button>
      </div>

      {workflowDescription && (
        <LeaveRequestWorkflowDescriptionPage {...workflowDescription} />
      )}

      <div className="flex flex-col md:flex-row gap-6">
        {/* Timeline bên trái */}
        <aside className="w-full md:w-1/3 space-y-4">
          <h3 className="text-xl font-bold">🕒 Quy trình duyệt</h3>
          {nodes.map((node, idx) => (
            <TimelineStepCard
              key={node.id}
              node={node}
              isActive={idx === currentNode}
              onClick={() => handleViewNode(idx)}
            />
          ))}
        </aside>

        {/* Chi tiết bước bên phải */}
        <main className="flex-1 bg-white rounded-xl shadow-xl p-6 space-y-6 border border-base-200">
          <h3 className="text-2xl font-bold text-primary mb-2">
            ✏️ Chi tiết bước {currentNode + 1}
          </h3>

          <div className="grid sm:grid-cols-2 gap-4">
            <DetailItem label="Mã bước" value={nodes[currentNode].mainId} />
            <DetailItem label="Người gửi" value={getEmployeeName(nodes[currentNode].senderId)} />
            <DetailItem label="Người duyệt" value={getEmployeeList(nodes[currentNode].approvedByIds)} />
            <DetailItem label="Đã duyệt bởi" value={getEmployeeList(nodes[currentNode].hasBeenApprovedByIds)} />
            <DetailItem label="Trạng thái" value={GeneralWorkflowStatusLabels[nodes[currentNode].status.toUpperCase() as GeneralWorkflowStatusType]} />
            <DetailItem label="Ngày duyệt" value={nodes[currentNode].approvedDates} />
          </div>

          <div>
            <label className="label font-semibold">Mô tả</label>
            <textarea
              className="textarea textarea-bordered w-full"
              value={nodes[currentNode].description || ''}
              onChange={(e) => updateNodeField('description', e.target.value)}
            />
          </div>

          {renderActionButtons(nodes[currentNode])}
        </main>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}
