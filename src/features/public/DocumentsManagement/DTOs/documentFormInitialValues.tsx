import { CreateDocumentDTO } from "./DocumentDTO";

export const documentFormInitialValues: CreateDocumentDTO = {
  mainId: '',

  generalDocumentInfo: {
    name: '',
    type: 'DICISION', 
    status: 'DRAFT',
    subType: 'RESOLUTION',
    category: 'GUIDELINE',
    ownerId: '',
    ownerName: '',
    organizationEntityResponsibleId: 0,
    organizationEntityResponsibleName: '',
    tag: [],
    description: '',
    url: '',
    version: '',
    generalWorkflowIds: [],
    generalWorkflowNames: [],
  },

  legalDocumentInfo: {
    draftDate: new Date().toISOString().split('T')[0],
    publishDate: '',
    effectiveDate: '',
    expiredDate: '',
    finalAprovalDate: '',
    inspectionDate: '',
    draftByIds: [],
    publishByIds: [],
    approvalByIds: [],
    inspectionByIds: [],
    draftByNames: [],
    publishByNames: [],
    approvalByNames: [],
    inspectionByNames: [],
    isLegalDocument: true,
  },

  securityInfo: {
    confidentialityReadLevel: 'PUBLIC',
    confidentialityWriteLevel: 'PUBLIC',
    confidentialityVisibilityLevel: 'PUBLIC',
    confidentialityStatusChangeLevel: 'PUBLIC',
    confidentialityReadIds: [],
    confidentialityWriteIds: [],
    confidentialityVisibilityIds: [],
    confidentialityStatusChangeIds: [],
    confidentialityWriteNames: [],
    confidentialityVisibilityNames: [],
    confidentialityReadNames: [],
    confidentialityStatusChangeNames: [],
  },

  additionalInfo: {
    downloadCount: 0,
    viewCount: 0,
    editCount: 0,
    relatedDocuments: [],
  },

  editInfo: [],
};
