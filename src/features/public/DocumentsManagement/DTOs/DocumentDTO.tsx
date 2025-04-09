import {
  DocumentCategory,
  DocumentConfidentialityLevel,
  DocumentStatus,
  DocumentSubType,
  DocumentTypes,
} from '../types/DocumentEnum';

export interface DocumentDTO {
  id: string;
  mainId: string;
  generalDocumentInfo: GeneralDocumentInfo;
  legalDocumentInfo: LegalDocumentInfo;
  aprrovalInfo: string[];
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
  uploadBy: string;
  tag: string[];
  description?: string;
  url?: string;
  version?: string;
}

export interface LegalDocumentInfo {
  draftDate?: string; // ISO string date
  publishDate?: string;
  effectiveDate?: string;
  expiredDate?: string;

  //id of user
  draftByIds?: string[];
  publishByIds?: string[];
  approvalByIds?: string[];

  draftByNames?: string[];
  publishByNames?: string[];
  approvalByNames?: string[];

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
