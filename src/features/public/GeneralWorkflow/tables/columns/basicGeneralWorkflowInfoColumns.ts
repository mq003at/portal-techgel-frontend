import { ColumnDef } from "@tanstack/react-table";

export interface BasicGeneralWorkflowInfo {
    id: string;
    mainId: string;
}


export const generalWorkflowBasicColumns: ColumnDef<BasicGeneralWorkflowInfo, any>[] = [
    {
        id: 'mainId',
        accessorKey: 'mainId',
        header: 'Mã quy trình',
        enableSorting: true,
        enablePinning: true,
    },
];