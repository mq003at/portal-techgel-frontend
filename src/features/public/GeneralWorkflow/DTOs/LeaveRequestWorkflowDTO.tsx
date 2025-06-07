import { BaseDTO } from "../../../../types/DTOs/BaseDTO";
import { DocumentDTO } from "../../DocumentsManagement/DTOs/DocumentDTO";
import { GeneralWorkflowStatusType } from "../config/GeneralWorkflowTypes";
import { LeaveAprrovalCategoryType } from "../config/LeaveRequestWorkflowTypes";
import { LeaveRequestNodeDTO } from "./LeaveRequestNodeDTO";

export interface BaseWorkflowDTO extends BaseDTO {
    name: string,
    description?: string,
    status: GeneralWorkflowStatusType,
    receiverIds: number[],
    receiverNames: string[],
    draftedByIds: number[],
    draftedByNames: string[],
    hasBeenApprovedByIds: number[],
    hasBeenApprovedByNames: string[],
    approvedDates: string[],
    senderId: number,
    senderName: string
}

export interface CreateBaseWorkflowDTO extends BaseDTO {
    name: string,
    description?: string,
    status: GeneralWorkflowStatusType,
    receiverIds: number[],
    draftedByIds: number[],
    senderId: number
}

export interface UpdateBaseWorkflowDTO extends BaseDTO {
    name?: string,
    description?: string,
    status?: GeneralWorkflowStatusType,
    receiverIds?: number[],
    draftedByIds?: number[],
    hasBeenApprovedByIds?: number[],
    approvedDates: string[]
}

export interface LeaveRequestWorkflowDTO extends BaseWorkflowDTO {
    employeeId: number,
    employeeName: string,
    employeeMainId: string,
    startDateDayNightType: string,
    endDateDayNightType: string,
    reason: string,
    startDate: string,
    endDate: string,
    totalDays: number,
    employeeAnnualLeaveTotalDays: number,
    leaveAprrovalCategory: LeaveAprrovalCategoryType,
    workAssignedToId: number,
    workAssignedToName?: string,
    workAssignedToPosition?: string,
    workAssignedToPhone?: string,
    workAssignedToEmail?: string,
    workAssignedToHomeAdress?: string,

    leaveRequestNodes: LeaveRequestNodeDTO[],
}

export interface CreateLeaveRequestWorkflowDTO extends CreateBaseWorkflowDTO {
    employeeId: number,
    reason: string,
    startDate: string,
    endDate: string,
    leaveRequestNodes: LeaveRequestNodeDTO[],
}

export interface UpdateLeaveRequestWorkflowDTO extends UpdateBaseWorkflowDTO {
    employeeId?: number,
    reason?: string,
    startDate: string,
    endDate: string,
    leaveRequestNodes: LeaveRequestNodeDTO[],
}

export interface WorkflowNodeDTO extends BaseDTO {
    name: string,
    description?: string,
    status: GeneralWorkflowStatusType,
    senderId: number,
    senderName: string,
    approvedByIds: number[],
    approvedByNames: string[],
    hasBeenApprovedByIds: number[],
    hasBeenApprovedByNames: string[],
    approvedDates: string[],
    documentIds: number[],
    documentNames: string[],
    documentUrls: string[],
}

export interface CreateWorkflowNodeDTO extends BaseDTO {
    name: string,
    description?: string,
    status: GeneralWorkflowStatusType,
    senderId: number,
    approvedByIds: number[],
    hasBeenApprovedByIds: number[],
    approvedDates: string[],
    documentIds: number[],
}

export interface UpdateWorkflowNodeDTO extends BaseDTO {
    name?: string,
    description?: string,
    status?: GeneralWorkflowStatusType,
    senderId?: number,
    approvedByIds?: number[],
    hasBeenApprovedByIds: number[],
    approvedDates: string[],
    documentIds: number[],
}

export interface WorkflowNodeWithDocumentsDTO extends WorkflowNodeDTO {
    documents: DocumentDTO[]
}
