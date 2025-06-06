import { BaseCreateDTO, BaseDTO } from '../../../../types/DTOs/BaseDTO';
import {
  DocumentCategory,
  DocumentConfidentialityLevel,
  DocumentStatus,
  DocumentSubType,
  DocumentTypes,
} from '../types/DocumentEnum';

export interface SignDocumentUploadDTO {
  file: string;
}

export interface DocumentDTO extends BaseDTO{
  file: string,
  generalDocumentInfo: GeneralDocumentInfo;
  legalDocumentInfo: LegalDocumentInfo;
  securityInfo: SecurityInfo;
  additionalInfo: AdditionalInfo;
  editInfo: EditInfo[];
}

export interface GeneralDocumentInfo {
  file?: File;
  name: string;
  type: DocumentTypes; 
  status: DocumentStatus; 
  subType: DocumentSubType;
  category: DocumentCategory;
  
  ownerId: string;
  ownerName: string;

  organizationEntityResponsibleId: number;
  organizationEntityResponsibleName: string;

  tag: string[];
  description: string;
  url: string;
  version: string;

  generalWorkflowIds: number[];
  generalWorkflowNames: string[];
}

export interface LegalDocumentInfo {
  draftDate?: string; // ISO string date
  publishDate?: string;
  effectiveDate?: string | null;
  expiredDate?: string;
  finalAprovalDate?: string;
  inspectionDate?: string;

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

export interface CreateDocumentDTO extends BaseCreateDTO {
  generalDocumentInfo: GeneralDocumentInfo;
  legalDocumentInfo: LegalDocumentInfo;
  securityInfo: SecurityInfo;
  additionalInfo: AdditionalInfo;
  editInfo: EditInfo[];
}

export interface UpdateDocumentDTO {
  generalDocumentInfo: GeneralDocumentInfo;
  legalDocumentInfo: LegalDocumentInfo;
  securityInfo: SecurityInfo;
  additionalInfo: AdditionalInfo;
  editInfo: EditInfo[];
}