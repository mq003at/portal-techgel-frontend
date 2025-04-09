export enum DocumentTypeEnum {
  DICISION = 'DICISION',
  NOTIFICATION = 'NOTIFICATION',
  TEMPLATE = 'TEMPLATE',
  CONTRACT = 'CONTRACT',
  OTHER = 'OTHER',
}

export type DocumentTypes = keyof typeof DocumentTypeEnum;

export enum DocumentStatusEnum {
  DRAFT = 'DRAFT',
  PUBLISHED = 'PUBLISHED',
  ARCHIVED = 'ARCHIVED',
  PENDING_APPROVAL = 'PENDING_APPROVAL',
  REJECTED = 'REJECTED',
  CANCELLED = 'CANCELLED',
  EXPIRED = 'EXPIRED',
  APPROVED = 'APPROVED',
}

export type DocumentStatus = keyof typeof DocumentStatusEnum;

export enum DocumentSubTypeEnum {
  RESOLUTION = 'RESOLUTION',
  DECISION = 'DECISION',
  DIRECTIVE = 'DIRECTIVE',
  RULES = 'RULES',
  NOTICE = 'NOTICE',
  GUIDELINE = 'GUIDELINE',
  PLAN = 'PLAN',
  PROJECT_PROPOSAL = 'PROJECT_PROPOSAL',
  SCHEME = 'SCHEME',
  REPORT = 'REPORT',
  MINUTES = 'MINUTES',
  SUBMISSION = 'SUBMISSION',
  CONTRACT = 'CONTRACT',
  CORRESPONDANCE = 'CORRESPONDANCE',
  MEMORANDUM = 'MEMORANDUM',
  AGREEMENT = 'AGREEMENT',
  AUTHORIZATION_DOCUMENT = 'AUTHORIZATION_DOCUMENT',
  INVITATION_DOCUMENT = 'INVITATION_DOCUMENT',
  INTRODUCTION_DOCUMENT = 'INTRODUCTION_DOCUMENT',
  DISPATCH_SLIP = 'DISPATCH_SLIP',
  TRANSFER_SLIP = 'TRANSFER_SLIP',
  NOTICE_SLIP = 'NOTICE_SLIP',
  OFFICIAL_LETTER = 'OFFICIAL_LETTER',
  PROGRAM = 'PROGRAM',
  PROJECT = 'PROJECT',
  POLICY = 'POLICY',
  REGULATION = 'REGULATION',
  OTHER = 'OTHER',
  NOTIFICATION = 'NOTIFICATION',
}

export type DocumentSubType = keyof typeof DocumentSubTypeEnum;

export enum DocumentCategoryEnum {
  LEGAL = 'LEGAL',
  EMPLOYMENT = 'EMPLOYMENT',
  ACCOUNTING = 'ACCOUNTING',
  INTERNAL = 'INTERNAL',
  PROJECT = 'PROJECT',
  DESIGN = 'DESIGN',
  EQUIPMENT = 'EQUIPMENT',
  GUIDELINE = 'GUIDELINE',
  CLIENT = 'CLIENT',
  PR = 'PR',
  COPYRIGHT = 'COPYRIGHT',
  ARCHIVE = 'ARCHIVE',
}

export type DocumentCategory = keyof typeof DocumentCategoryEnum;

export enum ConfidentialityLevelEnum {
  PUBLIC = 'PUBLIC',
  INTERNAL = 'INTERNAL',
  CONFIDENTIAL = 'CONFIDENTIAL',
  SECRET = 'SECRET',
  TOP_SECRET = 'TOP_SECRET',
}

export type ConfidentialityLevel = keyof typeof ConfidentialityLevelEnum;

export enum DocumentConfidentialityLevelEnum {
  PUBLIC = 'PUBLIC',
  INTERNAL = 'INTERNAL',
  SECRET = 'SECRET',
  SELF = 'SELF',
}

export type DocumentConfidentialityLevel = keyof typeof DocumentConfidentialityLevelEnum;
