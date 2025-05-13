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

export type GeneralWorkflowStatusType = keyof typeof GeneralWorkflowStatusEnum;
export type GeneralWorkflowLogicType = keyof typeof GeneralWorkflowLogicEnum;

import { BaseDTO } from '../../../../types/DTOs/BaseDTO';

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
  authorId: string[];
  authorNames: string[];

  approvalNodes: GeneralWorkflowNode[];
}

export interface GeneralWorkflowNode extends BaseDTO {
  name: string;
  type: GeneralWorkflowNodeCategory; // Ky hay tu xu ly


  // Represent the order inside a workflow of a general workflow.
  mainId: string;

  description: string;
  type: GeneralWorkflowLogicEnum;

  // Specific check to see if the requirement is met to proceeed to next node.
  requireNumberOfApprovals?: number;
  requireSpecificApproverIds?: string[];
  requireSpecificApproverNames?: string[];

  approvalIds: string[];
  approvalNames: string[];

  // Involved documents
  documentIds: string[];
  documentNames: string[];

  // Incase of rejecttion
  fallbackNodeId?: string;

  comments: CommentDTO[];

  status: GeneralWorkflowStatusType;

  createdAt: string;
  updatedAt: string;
}

export type GeneralWorkflowNodeCategory = 'SIGN' | 'EXCEL'