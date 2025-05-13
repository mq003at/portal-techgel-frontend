import { BaseDTO } from '../../../../types/DTOs/BaseDTO';
import {
  DocumentCategory,
  DocumentConfidentialityLevel,
  DocumentStatus,
  DocumentSubType,
  DocumentTypes,
} from '../types/DocumentEnum';

export interface DocumentDTO extends BaseDTO{
  id: string;
  generalDocumentInfo: GeneralDocumentInfo;
  legalDocumentInfo: LegalDocumentInfo;
  securityInfo: SecurityInfo;
  additionalInfo: AdditionalInfo;
  editInfo: EditInfo[];
}

export interface GeneralDocumentInfo {
  name: string;
  type: DocumentTypes; // Consider using an enum like 'DocumentType'
  status: DocumentStatus; // e.g., 'DRAFT', 'APPROVED'...
  subType: DocumentSubType;
  category: DocumentCategory;
  
  ownerId: string;
  ownerName: string;

  organizationEntityResponsibleId?: string;
  organizationEntityResponsibleName?: string;

  tag: string[];
  description?: string;
  url?: string;
  version?: string;

  workflowIds?: string[];
  workflowNames?: string[];
}

export interface LegalDocumentInfo {
  draftDate?: string; // ISO string date
  publishDate?: string;
  effectiveDate?: string;
  expiredDate?: string;
  finalAprovalDate?: string;
  inspectionDate?: string[];

  //id of user
  draftByIds?: string[];
  publishByIds?: string[];
  approvalByIds?: string[];
  inspectionByIds?: string[];

  draftByNames?: string[];
  publishByNames?: string[];
  approvalByNames?: string[];
  inspectionByNames?: string[];

  isLegalDocument: boolean;
}

export interface SecurityInfo {
  // setting up security for docs
  confidentialityReadLevel: DocumentConfidentialityLevel;
  confidentialityWriteLevel: DocumentConfidentialityLevel;
  confidentialityVisibilityLevel: DocumentConfidentialityLevel;
  confidentialityStatusChangeLevel: DocumentConfidentialityLevel;

  confidentialityReadIds: string[];
  confidentialityWriteIds: string[];
  confidentialityVisibilityIds: string[];
  confidentialityStatusChangeIds: string[];

  //db generated
  confidentialityWriteNames?: string[];
  confidentialityVisibilityNames?: string[];
  confidentialityReadNames?: string[];
  confidentialityStatusChangeNames?: string[];
}

export interface AdditionalInfo {
  downloadCount: number;
  viewCount: number;
  editCount: number;
  relatedDocuments: string[]; // Or DocumentDTO[] if deeply nested
}

export interface EditInfo {
  editDate: string;
  editById: string;
  editByName?: string; //DbGenerated
  editComment?: string;
  recordURL?: string;
}

export interface CreateDocumentDTO extends BaseDTO {
  id: string;
  generalDocumentInfo: GeneralDocumentInfo;
  legalDocumentInfo: LegalDocumentInfo;
  securityInfo: SecurityInfo;
  additionalInfo: AdditionalInfo;
  editInfo: EditInfo[];
}

export interface UpdateDocumentDTO extends BaseDTO {
  id: string;
  generalDocumentInfo: GeneralDocumentInfo;
  legalDocumentInfo: LegalDocumentInfo;
  securityInfo: SecurityInfo;
  additionalInfo: AdditionalInfo;
  editInfo: EditInfo[];
}