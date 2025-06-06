import { GeneralWorkflowLogicEnum, GeneralWorkflowStatusEnum } from "../config/GeneralWorkflowTypes";

export const GeneralWorkflowStatusOptions = [
  { value: GeneralWorkflowStatusEnum.PENDING, label: 'Chờ phê duyệt', color: 'neutral'},
  { value: GeneralWorkflowStatusEnum.DRAFT, label: 'Bản nháp', color: 'info'},
  { value: GeneralWorkflowStatusEnum.REJECTED, label: 'Đã từ chối', color: 'error'},
  { value: GeneralWorkflowStatusEnum.CANCELLED, label: 'Đã hủy', color: 'warning'},
  { value: GeneralWorkflowStatusEnum.EXPIRED, label: 'Đã hết hạn', color: 'warning'}, 
  { value: GeneralWorkflowStatusEnum.APPROVED, label: 'Đã phê duyệt', color: 'success'},
];

export const generalWorkflowLogicOptions = [
  { value: GeneralWorkflowLogicEnum.SEQUENTIAL, label: 'Nối tiếp'},
  { value: GeneralWorkflowLogicEnum.PARALLEL, label: 'Song song'},
  { value: GeneralWorkflowLogicEnum.MAJORITY, label: 'Phần đông' },
  { value: GeneralWorkflowLogicEnum.QUORUM, label: 'Tối thiểu'},
  { value: GeneralWorkflowLogicEnum.ABSOLUTE_MAJORITY, label: 'Đa số tuyệt đối'},
];