import { ApprovalWorkflowNode, GeneralInfo } from "../DTOs/GeneralWorkflowDTO";

export type GeneralWorkflowTabKey = 
    | 'generalInfo'

export interface GeneralWorkflowTab<T extends GeneralWorkflowTabKey = GeneralWorkflowTabKey> {
    name: T;
    label: string;
}

export interface TabToDTOMap {
    generalInfo: GeneralInfo,
}

export const generalWorkflowTabs: GeneralWorkflowTab[] = [
    { name: 'generalInfo', label: 'Tất cả quy trình'},
]