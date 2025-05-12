import { DocumentDTO } from '../DTOs/DocumentDTO';

export const documentMockData: DocumentDTO[] = [
  {
    id: '1',
    mainId: 'QĐ.01-K.PTKD',
    createdAt: '2023-01-01T08:00:00.000Z',
    updatedAt: '2023-01-01T08:00:00.000Z',

    generalDocumentInfo: {
      name: 'Quyết định số 01/QĐ-KH',
      type: 'DICISION',
      status: 'DRAFT',
      subType: 'DECISION',
      category: 'LEGAL',

      ownerId: '1',
      ownerName: 'Test',
      organizationEntityResponsibleId: '1',
      organizationEntityResponsibleName: 'Test',

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
    createdAt: '2023-01-01T08:00:00.000Z',
    updatedAt: '2023-01-01T08:00:00.000Z',

    generalDocumentInfo: {
      name: 'Đơn xin nghỉ phép ngày 10/04/2025',
      type: 'NOTIFICATION',
      status: 'APPROVED',
      subType: 'SUBMISSION',
      category: 'EMPLOYMENT',
      
      ownerId: '1',
      ownerName: 'Test',
      organizationEntityResponsibleId: '1',
      organizationEntityResponsibleName: 'Test',

      tag: ['Tờ trình', 'Xin phép', 'Nhân sự'],
      description: 'Đơn xin nghỉ phép ngày 10/04/2025',
      url: 'https://docs.google.com/document/d/1M8e-SDIACaq9Nxgvm2uAgpGAWVGO5zwd/edit?usp=sharing&ouid=113821033833286237669&rtpof=true&sd=true',
      version: '1',
    },

    legalDocumentInfo: {
      draftDate: '2025-04-09',
      publishDate: '2025-04-09',
      effectiveDate: '2025-04-09',
      draftByIds: ['3'],
      publishByIds: ['2'],
      approvalByIds: ['31', '32'],
      isLegalDocument: true,
    },
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

  {
    id: '3',
    mainId: 'TT-DNTT/P-CDDS/05-2025/04',
    createdAt: '2023-01-01T08:00:00.000Z',
    updatedAt: '2023-01-01T08:00:00.000Z',

    generalDocumentInfo: {
      name: 'TT-DNTT_P-CDS_05-2025_04-GIAYDENGHITHANHTOAN',
      type: 'OTHER',
      status: 'PENDING_APPROVAL',
      subType: 'REPORT',
      category: 'EQUIPMENT',
      
      ownerId: '1',
      ownerName: 'Test',
      organizationEntityResponsibleId: '1',
      organizationEntityResponsibleName: 'Test',

      tag: ['TEST-1', 'TEST-2', 'TEST-3'],
      description: 'Giấy đề nghị thanh toán 2/05/2025',
      url: 'https://docs.google.com/document/d/1M8e-SDIACaq9Nxgvm2uAgpGAWVGO5zwd/edit?usp=sharing&ouid=113821033833286237669&rtpof=true&sd=true',
      version: '1',
    },

    legalDocumentInfo: {
      draftDate: '2025-04-09',
      publishDate: '2025-04-09',
      effectiveDate: '2025-04-09',
      draftByIds: ['1'],
      publishByIds: ['3'],
      approvalByIds: ['55', '12', '31'],
      isLegalDocument: false,
    },
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
