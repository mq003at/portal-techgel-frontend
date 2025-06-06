export enum GeneralWorkflowStatusEnum {
  PENDING = 'PENDING',
  ONWAITING = 'ONWAITING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
  DRAFT = 'DRAFT',
}

export enum GeneralWorkflowLogicEnum {
  SEQUENTIAL = 'SEQUENTIAL',
  PARALLEL = 'PARALLEL',
  MAJORITY = 'MAJORITY',
  QUORUM = 'QUORUM',
  ABSOLUTE_MAJORITY = 'ABSOLUTE_MAJORITY',
}

export const GeneralWorkflowStatusLabels: Record<GeneralWorkflowStatusEnum, string> = {
  [GeneralWorkflowStatusEnum.PENDING]: 'Chờ duyệt',
  [GeneralWorkflowStatusEnum.ONWAITING]: 'Chờ bước trên duyệt',
  [GeneralWorkflowStatusEnum.APPROVED]: 'Đã duyệt',
  [GeneralWorkflowStatusEnum.REJECTED]: 'Từ chối',
  [GeneralWorkflowStatusEnum.CANCELLED]: 'Đã hủy',
  [GeneralWorkflowStatusEnum.EXPIRED]: 'Hết hạn',
  [GeneralWorkflowStatusEnum.DRAFT]: 'Bản nháp',
};

export const GeneralWorkflowLogicLabels: Record<GeneralWorkflowLogicEnum, string> = {
  [GeneralWorkflowLogicEnum.SEQUENTIAL]: 'Tuần tự',
  [GeneralWorkflowLogicEnum.PARALLEL]: 'Song song',
  [GeneralWorkflowLogicEnum.MAJORITY]: 'Đa số',
  [GeneralWorkflowLogicEnum.QUORUM]: 'Tối thiểu',
  [GeneralWorkflowLogicEnum.ABSOLUTE_MAJORITY]: 'Đa số tuyệt đối',
};


export type GeneralWorkflowStatusType = keyof typeof GeneralWorkflowStatusEnum;
export type GeneralWorkflowLogicType = keyof typeof GeneralWorkflowLogicEnum;