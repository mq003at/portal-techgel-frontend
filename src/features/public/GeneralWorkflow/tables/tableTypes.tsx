import { ColumnDef } from "@tanstack/react-table";
import { generalInfoColumns } from "./columns/generalInfoColumns";
import { GeneralWorkflowTabKey } from "../config/GeneralWorkflowTabs";

export const generalWorkflowColumnMap: Record<GeneralWorkflowTabKey, ColumnDef<any, any>[]> = {
    generalInfo: generalInfoColumns,
}