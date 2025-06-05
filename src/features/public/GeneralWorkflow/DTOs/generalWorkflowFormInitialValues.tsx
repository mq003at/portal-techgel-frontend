import { GeneralWorkflowDTO } from './GeneralWorkflowDTO';

export const generalWorkflowFormInitialValues: GeneralWorkflowDTO = {
  id: '',
  mainId: '',
  updatedAt: '',
  createdAt: '',
  generalInfo: {
    name: '',
    status: 'PENDING',
    workflowLogic: 'SEQUENTIAL',
    approvedByIds: [],
    approvedByNames: [],
    approvedBySignatures: [],
    draftedByIds: [],
    draftedByNames: [],
    draftedBySignatures: [],
    quota: 0,
  },
  ApprovalWorkflowNodes: [],
};
