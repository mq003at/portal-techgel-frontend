export type DocumentType = 'DICISION' | 'NOTIFICATION' | 'TEMPLATE' | 'CONTRACT' | 'OTHER';
export type DocumentStatus =
  | 'DRAFT'
  | 'PUBLISHED'
  | 'ARCHIVED'
  | 'PENDING_APPROVAL'
  | 'REJECTED'
  | 'CANCELLED'
  | 'EXPIRED';
export type DocumentSubType =
  | 'RESOLUTION'
  | 'DECISION'
  | 'DIRECTIVE'
  | 'RULES'
  | 'NOTICE'
  | 'GUIDELINE'
  | 'PLAN'
  | 'PROJECT_PROPOSAL'
  | 'SCHEME'
  | 'REPORT'
  | 'MINUTES'
  | 'SUBMISSION'
  | 'CONTRACT'
  | 'CORRESPONDANCE'
  | 'MEMORANDUM'
  | 'AGREEMENT'
  | 'AUTHORIZATION_DOCUMENT'
  | 'INVITATION_DOCUMENT'
  | 'INTRODUCTION_DOCUMENT'
  | 'DISPATCH_SLIP'
  | 'TRANSFER_SLIP'
  | 'NOTICE_SLIP'
  | 'OFFICIAL_LETTER'
  | 'PROGRAM'
  | 'PROJECT'
  | 'POLICY'
  | 'REGULATION'
  | 'OTHER';
export type DocumentCategory =
  | 'LEGAL'
  | 'EMPLOYMENT'
  | 'ACCOUNTING'
  | 'INTERNAL'
  | 'PROJECT'
  | 'DESIGN'
  | 'EQUIPMENT'
  | 'GUIDELINE'
  | 'CLIENT'
  | 'PR'
  | 'COPYRIGHT'
  | 'ARCHIVE';
export type ConfidentialityLevel = 'PUBLIC' | 'INTERNAL' | 'CONFIDENTIAL' | 'SECRET' | 'TOP_SECRET';

export const documentMockData = [
  {
    id: '1',
    mainId: 'QĐ.01-K.PTKD',

    generalDocumentInfo: {
      name: 'Quyết định số 01/QĐ-KH',
      type: 'DICISION',
      status: 'DRAFT',
      subType: 'DECISION',
      category: 'LEGAL',
      uploadBy: 'TG99999',
      tag: 'TESTING',
      description: 'Quyết định số 01/QĐ-KH',
      url: 'https://www.google.com',
      version: '1',
    },

    legalDocumentInfo: {
      draftDate: '2021-01-01',
      publishDate: '2021-01-01',
      effectiveDate: '2021-01-01',
      expiredDate: '2021-01-01',
      status: 'DRAFT',
      draftBy: ['TG99999'],
      publishBy: ['TG99999'],
      approvalBy: ['TG99999', 'TG99998', 'TG99997'],
      isLegalDocument: true,
    },
    aprrovalInfo: [
      {
        approvalDate: '2021-01-01',
        approvalBy: 'TG99999',
        approvalStatus: 'APPROVED',
        approvalComment: 'Phòng CNTT phê duyệt quyết định này',
      },

      {
        approvalDate: '2021-01-01',
        approvalBy: 'TG99998',
        approvalStatus: 'APPROVED',
        approvalComment: 'Phòng Hành chính phê duyệt quyết định này',
      },
      {
        approvalDate: '2021-01-01',
        approvalBy: 'TG99997',
        approvalStatus: 'REJECTED',
        approvalComment: 'Phòng CNTT không phê duyệt quyết định này',
      },
    ],
    securityInfo: {
      confidentialityLevel: 'PUBLIC',
    },
    additionalInfo: {
      downloadCount: 100,
      viewCount: 100,
      editCount: 100,
      relatedDocuments: [],
    },
    editInfo: [
      {
        editDate: '2021-01-01',
        editBy: 'TG99999',
        editComment: 'Sửa font chữ',
        recordURL: '',
      },
      {
        editDate: '2021-01-01',
        editBy: 'TG99999',
        editComment: 'Sửa font chữ',
      },
    ],
  },
];
