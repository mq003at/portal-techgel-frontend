export enum ApprovalWorkflowStatusEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
  DRAFT = 'DRAFT',
}

export enum ApprovalWorkflowLogicEnum {
  SEQUENTIAL = 'SEQUENTIAL',
  PARALLEL = 'PARALLEL',
  MAJORITY = 'MAJORITY',
  QUORUM = 'QUORUM',
  ABSOLUTE_MAJORITY = 'ABSOLUTE_MAJORITY',
}

export type ApprovalWorkflowStatusType = keyof typeof ApprovalWorkflowStatusEnum;
export type ApprovalWorkflowLogicType = keyof typeof ApprovalWorkflowLogicEnum;
