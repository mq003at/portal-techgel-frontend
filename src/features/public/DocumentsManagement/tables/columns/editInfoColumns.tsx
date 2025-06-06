import { TableColumnDef } from "../../../../restricted/EmployeeList/tables/types/tableTypes";
import { DateCell } from "../../../Table/components/DateCell";
import { EditInfo } from "../../DTOs/DocumentDTO";


export const editInfoColumns: TableColumnDef<EditInfo>[] = [
    {
        accessorKey: 'editDate',
        header: 'Ngày chỉnh sửa',
        enableSorting: true,
        cell: DateCell,
        sortingFn: (rowA, rowB, columnId) => {
            const dateA = new Date(rowA.getValue(columnId));
            const dateB = new Date(rowB.getValue(columnId));
            return dateA.getTime() - dateB.getTime();
        },
        meta: {
            filterVariant: 'range',
            isDateRange: true
        },
        filterFn: (row, columnId, filterValue: [string?, string?]) => {
            if( !row.getValue(columnId)) return true;

            const toDate = (val: string | number | Date): number =>
            typeof val === 'string' || typeof val === 'number'
                ? new Date(val).getTime()
                : val.getTime();

            const rowDate = toDate(row.getValue(columnId));
            const [min, max] = filterValue;

            const minDate = min ? toDate(min) : -Infinity;
            const maxDate = max ? toDate(max) : Infinity;

            return rowDate >= minDate && rowDate <= maxDate;
        },
    },
    {
        accessorKey: 'editById',
        header: 'Mã người chỉnh sửa',
        enableSorting: true,
    },
    {
        accessorKey: 'editByName',
        header: 'Tên người chỉnh sửa',
        enableSorting: true,
    },
    {
        accessorKey: 'editComment',
        header: 'Ghi chú',
        enableSorting: true,
    },
    {
        accessorKey: 'recordURL',
        header: 'Liên kết bản ghi',
        enableSorting: true
    }
]