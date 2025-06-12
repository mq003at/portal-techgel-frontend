// import IconWrapper from '../../../../components/Wrapper/IconWrapper';
// import { ServiceGroup } from '../../../../types/models/Service/ServiceModal';
// import { documentCategoryOptions } from '../constants/DocumentTypeOptions';
// import { DocumentDTO } from '../DTOs/DocumentDTO';

import { DocumentDTO } from "../DTOs/DocumentDTO";

// export const documentMockData: DocumentDTO[] = [
//   {
//     id: '1',
//     mainId: 'QĐ.01-K.PTKD',
//     createdAt: '2023-01-01T08:00:00.000Z',
//     updatedAt: '2023-01-01T08:00:00.000Z',

//     generalDocumentInfo: {
//       name: 'Quyết định số 01/QĐ-KH',
//       type: 'DICISION',
//       status: 'DRAFT',
//       subType: 'DECISION',
//       category: 'LEGAL',

//       ownerId: '1',
//       ownerName: 'Test',
//       organizationEntityResponsibleId: '1',
//       organizationEntityResponsibleName: 'Test',

//       tag: ['TESTING'],
//       description: 'Quyết định số 01/QĐ-KH',
//       url: 'https://drive.google.com/file/d/1xuPv1m1NiPDbdWNSCkDVr8JxYqHy6RzK/view?usp=sharing',
//       version: '1',
//     },

//     legalDocumentInfo: {
//       draftDate: '2021-01-01',
//       publishDate: '2021-01-01',
//       effectiveDate: '2021-01-01',
//       expiredDate: '2021-01-01',
//       draftByIds: ['3'],
//       publishByIds: ['3'],
//       approvalByIds: ['3', '2', '1'],
//       isLegalDocument: true,
//     },
//     securityInfo: {
//       confidentialityReadLevel: 'PUBLIC',
//       confidentialityWriteLevel: 'SELF',
//       confidentialityVisibilityLevel: 'PUBLIC',
//       confidentialityStatusChangeLevel: 'SELF',

//       confidentialityReadIds: [],
//       confidentialityWriteIds: [],
//       confidentialityVisibilityIds: ['3'],
//       confidentialityStatusChangeIds: [],
//     },
//     additionalInfo: {
//       downloadCount: 100,
//       viewCount: 100,
//       editCount: 100,
//       relatedDocuments: [],
//     },
//     editInfo: [
//       {
//         editDate: '2021-01-01',
//         editById: '1',
//         editComment: 'Sửa font chữ',
//         recordURL: '',
//       },
//       {
//         editDate: '2021-01-01',
//         editById: '1',
//         editComment: 'Sửa font chữ',
//       },
//     ],
//   },
//   {
//     id: '2',
//     mainId: 'Đ.NP-TG99997-09/04/2025',
//     createdAt: '2023-01-01T08:00:00.000Z',
//     updatedAt: '2023-01-01T08:00:00.000Z',

//     generalDocumentInfo: {
//       name: 'Đơn xin nghỉ phép ngày 10/04/2025',
//       type: 'NOTIFICATION',
//       status: 'APPROVED',
//       subType: 'SUBMISSION',
//       category: 'EMPLOYMENT',
      
//       ownerId: '1',
//       ownerName: 'Test',
//       organizationEntityResponsibleId: '1',
//       organizationEntityResponsibleName: 'Test',

//       tag: ['Tờ trình', 'Xin phép', 'Nhân sự'],
//       description: 'Đơn xin nghỉ phép ngày 10/04/2025',
//       url: 'https://docs.google.com/document/d/1M8e-SDIACaq9Nxgvm2uAgpGAWVGO5zwd/edit?usp=sharing&ouid=113821033833286237669&rtpof=true&sd=true',
//       version: '1',
//     },

//     legalDocumentInfo: {
//       draftDate: '2025-04-09',
//       publishDate: '2025-04-09',
//       effectiveDate: '2025-04-09',
//       draftByIds: ['3'],
//       publishByIds: ['2'],
//       approvalByIds: ['31', '32'],
//       isLegalDocument: true,
//     },
//     securityInfo: {
//       confidentialityReadLevel: 'PUBLIC',
//       confidentialityWriteLevel: 'SELF',
//       confidentialityVisibilityLevel: 'PUBLIC',
//       confidentialityStatusChangeLevel: 'SELF',

//       confidentialityReadIds: ['3', '2', '1'],
//       confidentialityWriteIds: [],
//       confidentialityVisibilityIds: ['3', '2', '1'],
//       confidentialityStatusChangeIds: ['3', '2', '1'],
//     },
//     additionalInfo: {
//       downloadCount: 100,
//       viewCount: 100,
//       editCount: 100,
//       relatedDocuments: [],
//     },
//     editInfo: [],
//   },

//   {
//     id: '3',
//     mainId: 'TT-DNTT/P-CDDS/05-2025/04',
//     createdAt: '2023-01-01T08:00:00.000Z',
//     updatedAt: '2023-01-01T08:00:00.000Z',

//     generalDocumentInfo: {
//       name: 'TT-DNTT_P-CDS_05-2025_04-GIAYDENGHITHANHTOAN',
//       type: 'OTHER',
//       status: 'PENDING_APPROVAL',
//       subType: 'REPORT',
//       category: 'EQUIPMENT',
      
//       ownerId: '1',
//       ownerName: 'Test',
//       organizationEntityResponsibleId: '1',
//       organizationEntityResponsibleName: 'Test',

//       tag: ['TEST-1', 'TEST-2', 'TEST-3'],
//       description: 'Giấy đề nghị thanh toán 2/05/2025',
//       url: 'https://docs.google.com/document/d/1M8e-SDIACaq9Nxgvm2uAgpGAWVGO5zwd/edit?usp=sharing&ouid=113821033833286237669&rtpof=true&sd=true',
//       version: '1',
//     },

//     legalDocumentInfo: {
//       draftDate: '2025-04-09',
//       publishDate: '2025-04-09',
//       effectiveDate: '2025-04-09',
//       draftByIds: ['1'],
//       publishByIds: ['3'],
//       approvalByIds: ['55', '12', '31'],
//       isLegalDocument: false,
//     },
//     securityInfo: {
//       confidentialityReadLevel: 'PUBLIC',
//       confidentialityWriteLevel: 'SELF',
//       confidentialityVisibilityLevel: 'PUBLIC',
//       confidentialityStatusChangeLevel: 'SELF',

//       confidentialityReadIds: ['3', '2', '1'],
//       confidentialityWriteIds: [],
//       confidentialityVisibilityIds: ['3', '2', '1'],
//       confidentialityStatusChangeIds: ['3', '2', '1'],
//     },
//     additionalInfo: {
//       downloadCount: 100,
//       viewCount: 100,
//       editCount: 100,
//       relatedDocuments: [],
//     },
//     editInfo: [],
//   },

//   {
//     id: '4',
//     mainId: 'TT-DNTT/P-CDDS/06-2025/01',
//     createdAt: '2025-06-01T09:00:00.000Z',
//     updatedAt: '2025-06-01T09:00:00.000Z',

//     generalDocumentInfo: {
//       name: 'TT-DNTT_P-CDS_06-2025_01-GIAYDENGHITHANHTOAN',
//       type: 'CONTRACT',
//       status: 'PUBLISHED',
//       subType: 'CONTRACT',
//       category: 'LEGAL',
      
//       ownerId: '3',
//       ownerName: 'Nguyen Thanh',
//       organizationEntityResponsibleId: '4',
//       organizationEntityResponsibleName: 'Ngân hàng Vietcombank',

//       tag: ['VBC-3', 'VBC-4', 'LegalDoc'],
//       description: 'Hợp đồng vay vốn giữa công ty ABC và Ngân hàng Vietcombank.',
//       url: 'https://docs.google.com/document/d/1Lz8z-SRIAGldF4d2XJ8DJSKnYVE8b3G5/edit?usp=sharing&ouid=113821033833286237669&rtpof=true&sd=true',
//       version: '1',
//     },

//     legalDocumentInfo: {
//       draftDate: '2025-05-15',
//       publishDate: '2025-06-01',
//       effectiveDate: '2025-06-10',
//       draftByIds: ['3'],
//       publishByIds: ['5'],
//       approvalByIds: ['45', '23', '67'],
//       isLegalDocument: true,
//     },
//     securityInfo: {
//       confidentialityReadLevel: 'SECRET',
//       confidentialityWriteLevel: 'SELF',
//       confidentialityVisibilityLevel: 'PUBLIC',
//       confidentialityStatusChangeLevel: 'PUBLIC',

//       confidentialityReadIds: ['5', '2', '7'],
//       confidentialityWriteIds: ['5'],
//       confidentialityVisibilityIds: ['1', '2', '5'],
//       confidentialityStatusChangeIds: ['5', '6'],
//     },
//     additionalInfo: {
//       downloadCount: 45,
//       viewCount: 120,
//       editCount: 25,
//       relatedDocuments: [],
//     },
//     editInfo: [],
//   },

//   {
//     id: '6',
//     mainId: 'TT-DNTT/P-CDDS/07-2025/02',
//     createdAt: '2025-07-10T11:00:00.000Z',
//     updatedAt: '2025-07-10T11:00:00.000Z',

//     generalDocumentInfo: {
//       name: 'TT-DNTT_P-CDS_07-2025_02-BRIEFCONG',
//       type: 'NOTIFICATION',
//       status: 'PENDING_APPROVAL',
//       subType: 'NOTIFICATION',
//       category: 'PR',
      
//       ownerId: '6',
//       ownerName: 'Tran Minh',
//       organizationEntityResponsibleId: '7',
//       organizationEntityResponsibleName: 'Phòng PR',

//       tag: ['PR-2', 'Urgent'],
//       description: 'Thông báo về các sự kiện PR sắp tới.',
//       url: 'https://docs.google.com/document/d/1Dg8u-DQz8Rt5g9J4s7z8vR6Cm8G89B5D/edit?usp=sharing',
//       version: '1.1',
//     },

//     legalDocumentInfo: {
//       draftDate: '2025-07-05',
//       publishDate: '2025-07-10',
//       effectiveDate: '2025-07-12',
//       draftByIds: ['6'],
//       publishByIds: ['8'],
//       approvalByIds: ['45', '17'],
//       isLegalDocument: false,
//     },

//     securityInfo: {
//       confidentialityReadLevel: 'INTERNAL',
//       confidentialityWriteLevel: 'SELF',
//       confidentialityVisibilityLevel: 'PUBLIC',
//       confidentialityStatusChangeLevel: 'INTERNAL',

//       confidentialityReadIds: ['6', '9', '12'],
//       confidentialityWriteIds: ['6'],
//       confidentialityVisibilityIds: ['6', '8'],
//       confidentialityStatusChangeIds: ['8', '9'],
//     },

//     additionalInfo: {
//       downloadCount: 56,
//       viewCount: 200,
//       editCount: 35,
//       relatedDocuments: [],
//     },

//     editInfo: [],
//   },

//   {
//     id: '7',
//     mainId: 'NTC-QD01/2025/03',
//     createdAt: '2023-02-01T08:00:00.000Z',
//     updatedAt: '2023-02-01T08:00:00.000Z',
//     generalDocumentInfo: {
//       name: 'Thông báo tuyển dụng nhân viên',
//       type: 'NOTIFICATION',
//       status: 'PENDING_APPROVAL',
//       subType: 'NOTICE',
//       category: 'EMPLOYMENT',
//       ownerId: '1',
//       ownerName: 'Nguyễn Anh Dũng',
//       organizationEntityResponsibleId: '1',
//       organizationEntityResponsibleName: 'Công ty ABC',
//       tag: ['Tuyển dụng', 'Nhân sự'],
//       description: 'Thông báo tuyển dụng nhân viên mới cho công ty',
//       url: 'https://docs.google.com/document/d/1M8e-SDIACaq9Nxgvm2uAgpGAWVGO5zwd/edit?usp=sharing',
//       version: '1',
//     },
//     legalDocumentInfo: {
//       draftDate: '2023-02-01',
//       publishDate: '2023-02-01',
//       effectiveDate: '2023-02-01',
//       draftByIds: ['1'],
//       publishByIds: ['3'],
//       approvalByIds: ['55', '12', '31'],
//       isLegalDocument: false,
//     },
//     securityInfo: {
//       confidentialityReadLevel: 'PUBLIC',
//       confidentialityWriteLevel: 'SELF',
//       confidentialityVisibilityLevel: 'PUBLIC',
//       confidentialityStatusChangeLevel: 'SELF',
//       confidentialityReadIds: ['3', '2', '1'],
//       confidentialityWriteIds: [],
//       confidentialityVisibilityIds: ['3', '2', '1'],
//       confidentialityStatusChangeIds: ['3', '2', '1'],
//     },
//     additionalInfo: {
//       downloadCount: 200,
//       viewCount: 150,
//       editCount: 80,
//       relatedDocuments: [],
//     },
//     editInfo: [],
//   },

//   {
//     id: '8',
//     mainId: 'QD-TT01/2025/04',
//     createdAt: '2023-03-01T08:00:00.000Z',
//     updatedAt: '2023-03-01T08:00:00.000Z',
//     generalDocumentInfo: {
//       name: 'Quyết định bổ nhiệm nhân sự',
//       type: 'DICISION',
//       status: 'PENDING_APPROVAL',
//       subType: 'DECISION',
//       category: 'EMPLOYMENT',
//       ownerId: '2',
//       ownerName: 'Trần Minh Quang',
//       organizationEntityResponsibleId: '2',
//       organizationEntityResponsibleName: 'Công ty XYZ',
//       tag: ['Bổ nhiệm', 'Nhân sự'],
//       description: 'Quyết định bổ nhiệm vị trí trưởng phòng hành chính',
//       url: 'https://docs.google.com/document/d/2M8e-SDIACaq9Nxgvm2uAgpGAWVGO5zwd/edit?usp=sharing',
//       version: '1',
//     },
//     legalDocumentInfo: {
//       draftDate: '2023-03-01',
//       publishDate: '2023-03-01',
//       effectiveDate: '2023-03-01',
//       draftByIds: ['2'],
//       publishByIds: ['4'],
//       approvalByIds: ['12', '22', '33'],
//       isLegalDocument: true,
//     },
//     securityInfo: {
//       confidentialityReadLevel: 'PUBLIC',
//       confidentialityWriteLevel: 'SELF',
//       confidentialityVisibilityLevel: 'PUBLIC',
//       confidentialityStatusChangeLevel: 'SELF',
//       confidentialityReadIds: ['1', '2', '4'],
//       confidentialityWriteIds: [],
//       confidentialityVisibilityIds: ['1', '2', '4'],
//       confidentialityStatusChangeIds: ['1', '2', '4'],
//     },
//     additionalInfo: {
//       downloadCount: 50,
//       viewCount: 120,
//       editCount: 30,
//       relatedDocuments: [],
//     },
//     editInfo: [],
//   },

//   {
//     id: '9',
//     mainId: 'BC-TT01/2025/05',
//     createdAt: '2023-04-01T08:00:00.000Z',
//     updatedAt: '2023-04-01T08:00:00.000Z',
//     generalDocumentInfo: {
//       name: 'Báo cáo kết quả dự án',
//       type: 'DICISION',
//       status: 'PUBLISHED',
//       subType: 'REPORT',
//       category: 'PROJECT',
//       ownerId: '3',
//       ownerName: 'Lê Hoàng Nam',
//       organizationEntityResponsibleId: '3',
//       organizationEntityResponsibleName: 'Công ty 123',
//       tag: ['Dự án', 'Kết quả'],
//       description: 'Báo cáo chi tiết về kết quả của dự án phát triển phần mềm',
//       url: 'https://docs.google.com/document/d/3M8e-SDIACaq9Nxgvm2uAgpGAWVGO5zwd/edit?usp=sharing',
//       version: '1',
//     },
//     legalDocumentInfo: {
//       draftDate: '2023-04-01',
//       publishDate: '2023-04-01',
//       effectiveDate: '2023-04-01',
//       draftByIds: ['3'],
//       publishByIds: ['5'],
//       approvalByIds: ['15', '25', '35'],
//       isLegalDocument: false,
//     },
//     securityInfo: {
//       confidentialityReadLevel: 'PUBLIC',
//       confidentialityWriteLevel: 'SELF',
//       confidentialityVisibilityLevel: 'PUBLIC',
//       confidentialityStatusChangeLevel: 'SELF',
//       confidentialityReadIds: ['1', '2', '3'],
//       confidentialityWriteIds: [],
//       confidentialityVisibilityIds: ['1', '2', '3'],
//       confidentialityStatusChangeIds: ['1', '2', '3'],
//     },
//     additionalInfo: {
//       downloadCount: 300,
//       viewCount: 250,
//       editCount: 150,
//       relatedDocuments: [],
//     },
//     editInfo: [],
//   },

//   {
//     id: '10',
//     mainId: 'QĐ-HC01/2025/06',
//     createdAt: '2023-05-01T08:00:00.000Z',
//     updatedAt: '2023-05-01T08:00:00.000Z',
//     generalDocumentInfo: {
//       name: 'Quyết định thay đổi giờ làm việc',
//       type: 'DICISION',
//       status: 'PENDING_APPROVAL',
//       subType: 'RULES',
//       category: 'INTERNAL',
//       ownerId: '4',
//       ownerName: 'Phạm Thị Lan',
//       organizationEntityResponsibleId: '4',
//       organizationEntityResponsibleName: 'Công ty DEF',
//       tag: ['Giờ làm việc', 'Quy định'],
//       description: 'Quyết định về việc thay đổi giờ làm việc cho nhân viên',
//       url: 'https://docs.google.com/document/d/4M8e-SDIACaq9Nxgvm2uAgpGAWVGO5zwd/edit?usp=sharing',
//       version: '1',
//     },
//     legalDocumentInfo: {
//       draftDate: '2023-05-01',
//       publishDate: '2023-05-01',
//       effectiveDate: '2023-05-01',
//       draftByIds: ['4'],
//       publishByIds: ['6'],
//       approvalByIds: ['14', '24', '34'],
//       isLegalDocument: true,
//     },
//     securityInfo: {
//       confidentialityReadLevel: 'PUBLIC',
//       confidentialityWriteLevel: 'SELF',
//       confidentialityVisibilityLevel: 'PUBLIC',
//       confidentialityStatusChangeLevel: 'SELF',
//       confidentialityReadIds: ['4', '5', '6'],
//       confidentialityWriteIds: [],
//       confidentialityVisibilityIds: ['4', '5', '6'],
//       confidentialityStatusChangeIds: ['4', '5', '6'],
//     },
//     additionalInfo: {
//       downloadCount: 100,
//       viewCount: 50,
//       editCount: 40,
//       relatedDocuments: [],
//     },
//     editInfo: [],
//   },

//   {
//     id: '11',
//     mainId: 'TB-VT01/2025/07',
//     createdAt: '2023-06-01T08:00:00.000Z',
//     updatedAt: '2023-06-01T08:00:00.000Z',
//     generalDocumentInfo: {
//       name: 'Thông báo nghỉ lễ quốc gia',
//       type: 'NOTIFICATION',
//       status: 'PUBLISHED',
//       subType: 'NOTICE',
//       category: 'LEGAL',
//       ownerId: '5',
//       ownerName: 'Vũ Thanh Mai',
//       organizationEntityResponsibleId: '5',
//       organizationEntityResponsibleName: 'Công ty GHI',
//       tag: ['Nghỉ lễ', 'Pháp lý'],
//       description: 'Thông báo về lịch nghỉ lễ quốc gia cho nhân viên',
//       url: 'https://docs.google.com/document/d/5M8e-SDIACaq9Nxgvm2uAgpGAWVGO5zwd/edit?usp=sharing',
//       version: '1',
//     },
//     legalDocumentInfo: {
//       draftDate: '2023-06-01',
//       publishDate: '2023-06-01',
//       effectiveDate: '2023-06-01',
//       draftByIds: ['5'],
//       publishByIds: ['7'],
//       approvalByIds: ['15', '25', '35'],
//       isLegalDocument: true,
//     },
//     securityInfo: {
//       confidentialityReadLevel: 'PUBLIC',
//       confidentialityWriteLevel: 'SELF',
//       confidentialityVisibilityLevel: 'PUBLIC',
//       confidentialityStatusChangeLevel: 'SELF',
//       confidentialityReadIds: ['1', '2', '3'],
//       confidentialityWriteIds: [],
//       confidentialityVisibilityIds: ['1', '2', '3'],
//       confidentialityStatusChangeIds: ['1', '2', '3'],
//     },
//     additionalInfo: {
//       downloadCount: 150,
//       viewCount: 100,
//       editCount: 70,
//       relatedDocuments: [],
//     },
//     editInfo: [],
//   },
// ];

// export const documentServiceGroup: ServiceGroup[] = [
//   {
//     group: 'Hệ Thống Quản Lý Tài Liệu',
//         items: [
//           {
//             title: 'Tất cả Tài Liệu',
//             icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
//             navigateTo: '/main/documents',
//         },
//           ...documentCategoryOptions.map((doc, index) => (
//             {
//               title: `${doc.label}`,
//               icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
//               navigateTo: `/main/documents?cate=${doc.value}`,
//             }
//           ))
//       ]
//   }
// ]

export const documentMockData: DocumentDTO[] = []