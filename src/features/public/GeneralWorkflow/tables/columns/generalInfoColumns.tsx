import { TableColumnDef } from "../../../../restricted/EmployeeList/tables/types/tableTypes";
import { GeneralInfo } from "../../DTOs/GeneralWorkflowDTO";

export const generalInfoColumns: TableColumnDef<GeneralInfo>[] = [
    {
        accessorKey: 'name',
        header: 'Tên',
        enableSorting: true,
    },

    {
        accessorKey: 'description',
        header: 'Mô tả',
        enableSorting: true,
    },

    {
        accessorKey: 'status',
        header: 'Trạng thái',
        enableSorting: true,
    },

    {
        accessorKey: 'workflowLogic',
        header: 'Logic',
        enableSorting: true,
    },

    {
        accessorKey: 'approvedByIds',
        header: 'Được phê duyệt bởi ID',
        enableSorting: true,
    },

    {
        accessorKey: 'approvedByNames',
        header: 'Được phê duyệt bởi tên',
        enableSorting: true,
    },

    {
        accessorKey: 'approvedBySignatures',
        header: 'Được phê duyệt bởi chữ ký',
        enableSorting: true,
    },

    {
        accessorKey: 'draftedByIds',
        header: 'Được soạn thảo bởi ID',
        enableSorting: true,
    },

    {
        accessorKey: 'draftedByNames',
        header: 'Được soạn thảo bởi tên',
        enableSorting: true,
    },

    {
        accessorKey: 'draftedBySignatures',
        header: 'Được soạn thảo bởi chữ ký',
        enableSorting: true,
    },

    {
        accessorKey: 'quota',
        header: 'Hạn ngạch',
        enableSorting: true,
    }
]