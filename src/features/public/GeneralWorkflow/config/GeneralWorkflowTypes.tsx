export enum GeneralWorkflowStatusEnum {
  PENDING = 'PENDING',
  APPROVED = 'APPROVED',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
  DRAFT = 'DRAFT',
}

// Happens in order, when everyone has approved, when majority has approved, when minimum number of people has approved, when >50% people has approved.
export enum GeneralWorkflowLogicEnum {
  SEQUENTIAL = 'SEQUENTIAL',
  PARALLEL = 'PARALLEL',
  MAJORITY = 'MAJORITY',
  QUORUM = 'QUORUM',
  ABSOLUTE_MAJORITY = 'ABSOLUTE_MAJORITY',
}

export const GeneralWorkflowStatusLabels: Record<GeneralWorkflowStatusEnum, string> = {
  [GeneralWorkflowStatusEnum.PENDING]: 'Chờ duyệt',
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

import { BaseDTO } from '../../../../types/DTOs/BaseDTO';
import { CommentDTO } from '../../Comment/DTOs/CommentDTO';

export interface GeneralWorkflow extends BaseDTO {
  /// <summary>
  /// Name of this workflow (to be implemented in another workflow in the future).
  /// </summary>
  name: string;

  /// <summary>
  /// Specific descriptions of this workflow.
  /// </summary>
  description?: string;
  status: GeneralWorkflowStatusType;

  // List of people who have approved in this workflow
  approvedByIds: string[];
  approvedByNames: string[];

  // Who start this workflow
  authorId: string;
  authorName: string;

  // Each nodes represent a step in the workflow.
  ApprovalWorkflowNodes: GeneralWorkflowNode[];
}

export interface GeneralWorkflowNode extends BaseDTO {
  name: string;
  type: GeneralWorkflowNodeCategory; // Ky hay tu xu ly

  // Represent the order inside a workflow of a general workflow.
  mainId: string;

  description: string;
  type: GeneralWorkflowLogicEnum;

  approvalRule: ApprovalRule;
  approvalRecords: ApprovalRecord[];

  // Involved documents
  documentIds: string[];
  documentNames: string[];

  // Incase of rejecttion
  fallbackNodeId?: string;

  comments: CommentDTO[];

  status: GeneralWorkflowStatusType;
}

export interface ApprovalRule {
  logic: GeneralWorkflowLogicEnum;
  requiredCount?: number;
  specificApproverIds?: string[];
  specificApproverNames?: string[];
  fallbackNodeId?: string;
}

export interface ApprovalRecord {
  approverId: string;
  approverName: string;
  approvedAt: string;
  isApproved: boolean;
}

export type GeneralWorkflowNodeCategory = 'SIGN' | 'EXCEL';
