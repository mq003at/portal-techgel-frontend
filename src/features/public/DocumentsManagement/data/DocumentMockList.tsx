import { DocumentDTO } from '../DTOs/DocumentDTO';

export const documentMockData: DocumentDTO[] = [
  {
    id: '1',
    mainId: 'QĐ.01-K.PTKD',

    generalDocumentInfo: {
      name: 'Quyết định số 01/QĐ-KH',
      type: 'DICISION',
      status: 'DRAFT',
      subType: 'DECISION',
      category: 'LEGAL',
      uploadBy: '3',
      tag: ['TESTING'],
      description: 'Quyết định số 01/QĐ-KH',
      url: 'https://drive.google.com/file/d/1xuPv1m1NiPDbdWNSCkDVr8JxYqHy6RzK/view?usp=sharing',
      version: '1',
    },

    legalDocumentInfo: {
      draftDate: '2021-01-01',
      publishDate: '2021-01-01',
      effectiveDate: '2021-01-01',
      expiredDate: '2021-01-01',
      draftByIds: ['3'],
      publishByIds: ['3'],
      approvalByIds: ['3', '2', '1'],
      isLegalDocument: true,
    },
    aprrovalInfo: [],
    securityInfo: {
      confidentialityReadLevel: 'PUBLIC',
      confidentialityWriteLevel: 'SELF',
      confidentialityVisibilityLevel: 'PUBLIC',
      confidentialityStatusChangeLevel: 'SELF',

      confidentialityReadIds: [],
      confidentialityWriteIds: [],
      confidentialityVisibilityIds: ['3'],
      confidentialityStatusChangeIds: [],
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
        editById: '1',
        editComment: 'Sửa font chữ',
        recordURL: '',
      },
      {
        editDate: '2021-01-01',
        editById: '1',
        editComment: 'Sửa font chữ',
      },
    ],
  },
  {
    id: '2',
    mainId: 'Đ.NP-TG99997-09/04/2025',

    generalDocumentInfo: {
      name: 'Đơn xin nghỉ phép ngày 10/04/2025',
      type: 'NOTIFICATION',
      status: 'APPROVED',
      subType: 'SUBMISSION',
      category: 'EMPLOYMENT',
      uploadBy: '3',
      tag: ['TESTING'],
      description: 'Đơn xin nghỉ phép ngày 10/04/2025',
      url: 'https://docs.google.com/document/d/1M8e-SDIACaq9Nxgvm2uAgpGAWVGO5zwd/edit?usp=sharing&ouid=113821033833286237669&rtpof=true&sd=true',
      version: '1',
    },

    legalDocumentInfo: {
      draftDate: '2025-04-09',
      publishDate: '2025-04-09',
      effectiveDate: '2025-04-09',
      draftByIds: ['3'],
      publishByIds: ['3'],
      approvalByIds: ['3', '2', '1'],
      isLegalDocument: true,
    },
    aprrovalInfo: ['1'],
    securityInfo: {
      confidentialityReadLevel: 'PUBLIC',
      confidentialityWriteLevel: 'SELF',
      confidentialityVisibilityLevel: 'PUBLIC',
      confidentialityStatusChangeLevel: 'SELF',

      confidentialityReadIds: ['3', '2', '1'],
      confidentialityWriteIds: [],
      confidentialityVisibilityIds: ['3', '2', '1'],
      confidentialityStatusChangeIds: ['3', '2', '1'],
    },
    additionalInfo: {
      downloadCount: 100,
      viewCount: 100,
      editCount: 100,
      relatedDocuments: [],
    },
    editInfo: [],
  },
];
