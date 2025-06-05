import { BaseDTO } from '../../../../types/DTOs/BaseDTO';
import { ApprovalWorkflowStatusType, ApprovalWorkflowLogicType } from './ApprovalWorkFlowEnums';

export interface ApprovalWorkflow extends BaseDTO {
  name: string;
  description?: string;
  status: ApprovalWorkflowStatusType;
  workflowLogic: ApprovalWorkflowLogicType;

  approvedByIds: string[];
  approvedByNames?: string[]; //DbGenerated
  approvedBySignatures?: string[];
  draftedByIds: string[];
  draftedByNames?: string[]; //DbGenerated
  draftedBySignatures?: string[];

  ApprovalWorkflowNodes: ApprovalWorkflowNode[];
  quota?: number;
}

export interface ApprovalWorkflowNode extends BaseDTO {
  name: string;

  senderId: string;
  senderName?: string; //DbGenerated
  senderMessage?: string;

  receiverId: string;
  receiverName?: string; //DbGenerated
  receiverMessage?: string;

  approvalStatus: ApprovalWorkflowStatusType;
  approvalDate?: string;
  approvalComment?: string;

  order?: number;
}
