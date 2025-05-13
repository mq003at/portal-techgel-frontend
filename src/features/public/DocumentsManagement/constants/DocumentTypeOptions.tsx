import {
  ConfidentialityLevelEnum,
  DocumentCategoryEnum,
  DocumentConfidentialityLevelEnum,
  DocumentStatusEnum,
  DocumentSubTypeEnum,
  DocumentTypeEnum,
} from '../types/DocumentEnum';

export const documentTypeOptions = [
  { value: DocumentTypeEnum.DICISION, label: 'Quyết định' },
  { value: DocumentTypeEnum.NOTIFICATION, label: 'Thông báo' },
  { value: DocumentTypeEnum.TEMPLATE, label: 'Mẫu' },
  { value: DocumentTypeEnum.CONTRACT, label: 'Hợp đồng' },
  { value: DocumentTypeEnum.OTHER, label: 'Khác' },
];

export const documentStatusOptions = [
  { value: DocumentStatusEnum.DRAFT, label: 'Bản nháp', color: 'warning' },
  { value: DocumentStatusEnum.PUBLISHED, label: 'Đã phát hành', color: 'success' },
  { value: DocumentStatusEnum.ARCHIVED, label: 'Đã lưu trữ', color: 'neutral' },
  { value: DocumentStatusEnum.PENDING_APPROVAL, label: 'Chờ phê duyệt', color: 'info' },
  { value: DocumentStatusEnum.REJECTED, label: 'Đã từ chối', color: 'error' },
  { value: DocumentStatusEnum.CANCELLED, label: 'Đã hủy', color: 'secondary' },
  { value: DocumentStatusEnum.EXPIRED, label: 'Đã hết hạn', color: 'neutral' },
  { value: DocumentStatusEnum.APPROVED, label: 'Đã phê duyệt', color: 'success' },
];

export const documentSubTypeOptions = [
  { value: DocumentSubTypeEnum.RESOLUTION, label: 'Nghị quyết', idCode: 'NQ' },
  { value: DocumentSubTypeEnum.DECISION, label: 'Quyết định', idCode: 'QĐ' },
  { value: DocumentSubTypeEnum.DIRECTIVE, label: 'Chỉ thị', idCode: 'CT' },
  { value: DocumentSubTypeEnum.RULES, label: 'Quy chế', idCode: 'QC' },
  { value: DocumentSubTypeEnum.NOTICE, label: 'Thông cáo', idCode: 'TC' },
  { value: DocumentSubTypeEnum.NOTIFICATION, label: 'Thông báo', idCode: 'TB' },
  { value: DocumentSubTypeEnum.GUIDELINE, label: 'Hướng dẫn', idCode: 'HD' },
  { value: DocumentSubTypeEnum.PLAN, label: 'Kế hoạch', idCode: 'KH' },
  { value: DocumentSubTypeEnum.PROJECT_PROPOSAL, label: 'Đề xuất dự án', idCode: 'DXDA' },
  { value: DocumentSubTypeEnum.SCHEME, label: 'Phương án', idCode: 'PA' },
  { value: DocumentSubTypeEnum.REPORT, label: 'Báo cáo', idCode: 'BC' },
  { value: DocumentSubTypeEnum.MINUTES, label: 'Biên bản', idCode: 'BB' },
  { value: DocumentSubTypeEnum.SUBMISSION, label: 'Tờ trình', idCode: 'TTr' },
  { value: DocumentSubTypeEnum.CONTRACT, label: 'Hợp đồng', idCode: 'HĐ' },
  { value: DocumentSubTypeEnum.CORRESPONDANCE, label: 'Thư công', idCode: 'TCg' },
  { value: DocumentSubTypeEnum.MEMORANDUM, label: 'Bản ghi nhớ', idCode: 'BGN' },
  { value: DocumentSubTypeEnum.AGREEMENT, label: 'Bản thỏa thuận', idCode: 'BTT' },
  { value: DocumentSubTypeEnum.AUTHORIZATION_DOCUMENT, label: 'Giấy ủy quyền', idCode: 'GUQ' },
  { value: DocumentSubTypeEnum.INVITATION_DOCUMENT, label: 'Giấy mời', idCode: 'GM' },
  { value: DocumentSubTypeEnum.INTRODUCTION_DOCUMENT, label: 'Giấy giới thiệu', idCode: 'GGT' },
  { value: DocumentSubTypeEnum.DISPATCH_SLIP, label: 'Phiếu chuyển', idCode: 'PC' },
  { value: DocumentSubTypeEnum.TRANSFER_SLIP, label: 'Phiếu gửi', idCode: 'PG' },
  { value: DocumentSubTypeEnum.NOTICE_SLIP, label: 'Phiếu báo', idCode: 'PB' },
  { value: DocumentSubTypeEnum.OFFICIAL_LETTER, label: 'Công văn', idCode: 'CV' },
  { value: DocumentSubTypeEnum.PROGRAM, label: 'Chương trình', idCode: 'CTr' },
  { value: DocumentSubTypeEnum.PROJECT, label: 'Dự án', idCode: 'DA' },
  { value: DocumentSubTypeEnum.POLICY, label: 'Chính sách', idCode: 'CS' },
  { value: DocumentSubTypeEnum.REGULATION, label: 'Quy định', idCode: 'QYĐ' },
  { value: DocumentSubTypeEnum.OTHER, label: 'Khác', idCode: 'K' },
];

export const documentCategoryOptions = [
  { value: DocumentCategoryEnum.LEGAL, label: 'Pháp lý' },
  { value: DocumentCategoryEnum.EMPLOYMENT, label: 'Nhân sự' },
  { value: DocumentCategoryEnum.ACCOUNTING, label: 'Kế toán' },
  { value: DocumentCategoryEnum.INTERNAL, label: 'Nội bộ' },
  { value: DocumentCategoryEnum.PROJECT, label: 'Dự án' },
  { value: DocumentCategoryEnum.DESIGN, label: 'Thiết kế' },
  { value: DocumentCategoryEnum.EQUIPMENT, label: 'Thiết bị' },
  { value: DocumentCategoryEnum.GUIDELINE, label: 'Hướng dẫn' },
  { value: DocumentCategoryEnum.CLIENT, label: 'Khách hàng' },
  { value: DocumentCategoryEnum.PR, label: 'Quan hệ công chúng' },
  { value: DocumentCategoryEnum.COPYRIGHT, label: 'Bản quyền' },
  { value: DocumentCategoryEnum.ARCHIVE, label: 'Lưu trữ' },
];

export const documentIsLegalOptions = [
  { value: true, label: 'Có' },
  { value: false, label: 'Không' },
];

export const confidentialityLevelOptions = [
  { value: ConfidentialityLevelEnum.PUBLIC, label: 'Công khai' },
  { value: ConfidentialityLevelEnum.INTERNAL, label: 'Nội bộ' },
  { value: ConfidentialityLevelEnum.CONFIDENTIAL, label: 'Bảo mật' },
  { value: ConfidentialityLevelEnum.SECRET, label: 'Mật' },
  { value: ConfidentialityLevelEnum.TOP_SECRET, label: 'Tuyệt mật' },
];

export const documentConfidentialityLevelOptions = [
  { value: DocumentConfidentialityLevelEnum.PUBLIC, label: 'Công khai' },
  { value: DocumentConfidentialityLevelEnum.INTERNAL, label: 'Nội bộ' },
  { value: DocumentConfidentialityLevelEnum.SECRET, label: 'Mật' },
  { value: DocumentConfidentialityLevelEnum.SELF, label: 'Cá Nhân' },
];
