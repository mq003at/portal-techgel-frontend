import { AdditionalInfo, GeneralDocumentInfo, LegalDocumentInfo, SecurityInfo } from "../DTOs/DocumentDTO";

export type DocumentTabKey =
    | 'generalDocumentInfo'
    | 'legalDocumentInfo'
    | 'securityInfo'
    | 'additionalInfo'

export interface DocumentTab<T extends DocumentTabKey = DocumentTabKey> {
    name: T;
    label: string;
}

export interface TabToDTOMap {
    generalDocumentInfo: GeneralDocumentInfo;
    legalDocumentInfo: LegalDocumentInfo;
    securityInfo: SecurityInfo;
    additionalInfo: AdditionalInfo;
}

export const documentTabs: DocumentTab[] = [
    { name: 'generalDocumentInfo', label: 'Thông tin chung'},
    { name: 'legalDocumentInfo', label: 'Tài liệu pháp lý'},
    { name: 'securityInfo', label: 'Bảo mật'},
    { name: 'additionalInfo', label: 'Bổ xung'},
]