import { ColumnDef } from "@tanstack/react-table";
import { DocumentTabKey } from "../configs/documentTabs";
import { generalDocumentInfoColumns } from "./columns/generalDocumentInfoColumns";
import { legalDocumentInfoColumns } from "./columns/legalDocumentInfoColumns";
import { securityInfoColumns } from "./columns/securityInfoColumns";
import { additionalInfoColumns } from "./columns/additionalInfoColumns";

export const documentColumnMap: Record<DocumentTabKey, ColumnDef<any, any>[]> = {
    generalDocumentInfo: generalDocumentInfoColumns,
    legalDocumentInfo: legalDocumentInfoColumns,
    securityInfo: securityInfoColumns,
    additionalInfo: additionalInfoColumns,
};