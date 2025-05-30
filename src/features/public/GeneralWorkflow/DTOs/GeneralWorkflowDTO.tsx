import { BaseDTO } from "../../../../types/DTOs/BaseDTO";
import { GeneralWorkflowLogicType, GeneralWorkflowStatusType } from "../config/GeneralWorkflowTypes";

export interface GeneralWorkflowDTO extends BaseDTO {
    generalInfo: GeneralInfo,
    approvalNodes: ApprovalWorkflowNode[];
}

export interface GeneralInfo {
    name: string;
    description?: string;
    status: GeneralWorkflowStatusType;
    workflowLogic: GeneralWorkflowLogicType;

    approvedByIds: string[];
    approvedByNames?: string[];
    approvedBySignatures?: string[];
    draftedByIds: string[];
    draftedByNames?: string[];
    draftedBySignatures?: string[];
    quota?: number;
} 

export interface ApprovalWorkflowNode extends BaseDTO {
    name: string;

    senderId: string;
    senderName?: string;
    senderMessage?: string;

    receiverId: string;
    receiverName?: string;
    receiverMessage?: string;

    approvalStatus: GeneralWorkflowStatusType;
    approvalDate?: string;
    approvalComment?: string;

    order?: number;
    files?: string[];
    rawFiles?: File[]; 
}

export interface CreateGeneralWorkflowDTO extends BaseDTO {
    generalInfo: GeneralInfo,
    approvalNodes: ApprovalWorkflowNode[];
}

export interface UpdateGeneralWorkflowDTO extends BaseDTO {
    generalInfo: GeneralInfo,
    approvalNodes: ApprovalWorkflowNode[];
}

export interface UpdateApprovalWorkflowNode extends BaseDTO {
    name: string;

    senderId: string;
    senderName?: string;
    senderMessage?: string;

    receiverId: string;
    receiverName?: string;
    receiverMessage?: string;

    approvalStatus: GeneralWorkflowStatusType;
    approvalDate?: string;
    approvalComment?: string;

    order?: number;
    files?: string[];
    rawFiles?: File[]; 
}