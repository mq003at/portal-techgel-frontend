import { ColumnDef } from "@tanstack/react-table";
import { DocumentTabKey } from "../configs/documentTabs";

export const documentColumnMap: Record<DocumentTabKey, ColumnDef<any, any>[]> = {
    generalDocumentInfo: GeneralDocumentInfo,
    legalDocumentInfo: LegalDocumentInfo,
    securityInfo: SecurityInfo,
    additionalInfo: AdditionalInfo,
};