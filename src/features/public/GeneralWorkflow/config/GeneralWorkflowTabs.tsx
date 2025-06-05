import { ApprovalWorkflowNode, GeneralInfo } from "../DTOs/GeneralWorkflowDTO";
import { LeaveGeneralInfo } from "../DTOs/LeaveRequestWorkflowDTO";

// export type GeneralWorkflowTabKey = 
//     | 'generalInfo'

// export interface GeneralWorkflowTab<T extends GeneralWorkflowTabKey = GeneralWorkflowTabKey> {
//     name: T;
//     label: string;
// }

// export interface TabToDTOMap {
//     generalInfo: GeneralInfo,
// }

// export const generalWorkflowTabs: GeneralWorkflowTab[] = [
//     { name: 'generalInfo', label: 'Tất cả quy trình'},
// ]




export type LeaveRequestWorkflowTabKey = 
    | ''

export interface LeaveRequestWorkflowTab<T extends LeaveRequestWorkflowTabKey = LeaveRequestWorkflowTabKey> {
    name: T;
    label: string;
}

export interface TabToDTOMap {
    generalInfo: LeaveGeneralInfo,
}

export const leaveRequestWorkflowTabs: LeaveRequestWorkflowTab[] = [
    { name: '', label: 'Tất cả quy trình'},
]