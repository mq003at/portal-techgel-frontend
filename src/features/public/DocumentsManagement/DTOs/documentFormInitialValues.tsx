import { DocumentDTO } from "./DocumentDTO";

export const documentFormInitialValues: DocumentDTO = {
  id: '',
  mainId: '',
  createdAt: '',
  updatedAt: '',

  generalDocumentInfo: {
    name: '',
    type: 'DICISION', 
    status: 'DRAFT',
    subType: 'RESOLUTION',
    category: 'GUIDELINE',
    ownerId: '',
    ownerName: '',
    organizationEntityResponsibleId: '',
    organizationEntityResponsibleName: '',
    tag: [],
    description: '',
    url: '',
    version: '',
    workflowIds: [],
    workflowNames: [],
  },

  legalDocumentInfo: {
    draftDate: '',
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
