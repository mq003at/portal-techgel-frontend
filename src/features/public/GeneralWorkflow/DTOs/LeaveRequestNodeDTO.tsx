import { LeaveApprovalStepType } from "../config/LeaveRequestWorkflowTypes";
import { CreateWorkflowNodeDTO, UpdateWorkflowNodeDTO, WorkflowNodeDTO } from "./LeaveRequestWorkflowDTO";

export interface LeaveRequestNodeDTO extends WorkflowNodeDTO{
    leaveRequestWorkflowId: number,
    leaveRequestName: string,
    stepType: LeaveApprovalStepType,
}

export interface CreateLeaveRequestNodeDTO extends CreateWorkflowNodeDTO {
    leaveRequestWorkflowId: number,
    stepType: LeaveApprovalStepType,
}

export interface UpdateLeaveRequestNodeDTO extends UpdateWorkflowNodeDTO {
    leaveRequestWorkflowId?: number,
    stepType: LeaveApprovalStepType,
}