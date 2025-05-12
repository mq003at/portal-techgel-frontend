export enum GeneralWorkflowStatusEnum {
  PENDING = 'PENDING',
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

export type GeneralWorkflowStatusType = keyof typeof GeneralWorkflowStatusEnum;
export type GeneralWorkflowLogicType = keyof typeof GeneralWorkflowLogicEnum;

import { BaseDTO } from '../../../../types/DTOs/BaseDTO';

export interface GeneralWorkflow extends Omit<BaseDTO, 'mainId'> {
  mainId?: never;
  name: string;
  description?: string;
  status: GeneralWorkflowStatusType;
  workflowLogic: GeneralWorkflowLogicType;

  approvedByIds: string[];
  approvedByNames: string[];
  approvedBySignatures: string[];

  draftedByIds: string[];
  draftedByNames: string[];
  draftedBySignatures?: string[];

  GeneralNodes: GeneralWorkflowNode[];
  quota?: number;

  documentIds: string[]
  documentNames: string[]
}

export interface GeneralWorkflowNode extends Omit<BaseDTO, 'mainId'> {
  mainId?: never;
  name: string;
  type: GeneralWorkflowNodeCategory; // Ky hay tu xu ly

  senderId?: string;
  senderName?: string;
  senderMessage?: string;

  receiverId?: string;
  receiverName?: string;
  receiverMessage?: string;

  status: GeneralWorkflowStatusType;
  processedAt: string;
  comment: string;
  order: number;
}

export type GeneralWorkflowNodeCategory = 'SIGN' | 'EXCEL'