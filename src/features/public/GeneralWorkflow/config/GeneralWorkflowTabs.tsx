
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

export const leaveRequestWorkflowTabs: LeaveRequestWorkflowTab[] = [
    { name: '', label: 'Tất cả quy trình'},
]