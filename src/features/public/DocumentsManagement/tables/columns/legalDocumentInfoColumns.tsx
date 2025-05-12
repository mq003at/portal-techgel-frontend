import { TableColumnDef } from "../../../../restricted/EmployeeList/tables/types/tableTypes";
import { DateCell } from "../../../Table/components/DateCell";
import { StatusCell } from "../../../Table/components/StatusCell";
import { documentIsLegalOptions } from "../../constants/DocumentTypeOptions";
import { LegalDocumentInfo } from "../../DTOs/DocumentDTO";

export const legalDocumentInfoColumns: TableColumnDef<LegalDocumentInfo>[] = [
    {
        accessorKey: 'draftDate',
        header: 'Ngày soạn thảo',
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
        accessorKey: 'publishDate',
        header: 'Ngày xuất bản',
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
        accessorKey: 'effectiveDate',
        header: 'Ngày có hiệu lực',
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
        accessorKey: 'expiredDate',
        header: 'Ngày hết hạn',
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
        accessorKey: 'draftByIds',
        header: 'Mã người soạn thảo',
        enableSorting: true,
        cell: ({ getValue }) => {
            const values = getValue<string[]>() || [];

            return (
                <>
                    {values.map((value, index) => (
                        <>
                            <StatusCell key={index} getValue={() => value}/> 
                            &nbsp;
                        </>
                    ))}
                </>
            );
        },
        filterFn: (row, columnId, filterValue) => {
            const values = row.getValue<string[]>(columnId);
            return values?.some(value => value.toLowerCase().includes(filterValue.toLowerCase()));
        },
    },
    {
        accessorKey: 'publishByIds',
        header: 'Mã người xuất bản',
        enableSorting: true,
        cell: ({ getValue }) => {
            const values = getValue<string[]>() || [];

            return (
                <>
                    {values.map((value, index) => (
                        <>
                            <StatusCell key={index} getValue={() => value}/> 
                            &nbsp;
                        </>
                    ))}
                </>
            );
        },
        filterFn: (row, columnId, filterValue) => {
            const values = row.getValue<string[]>(columnId);
            return values?.some(value => value.toLowerCase().includes(filterValue.toLowerCase()));
        },
    },
    {
        accessorKey: 'approvalByIds',
        header: 'Mã người phê duyệt',
        enableSorting: true,
        cell: ({ getValue }) => {
            const values = getValue<string[]>() || [];

            return (
                <>
                    {values.map((value, index) => (
                        <>
                            <StatusCell key={index} getValue={() => value}/> 
                            &nbsp;
                        </>
                    ))}
                </>
            );
        },
        filterFn: (row, columnId, filterValue) => {
            const values = row.getValue<string[]>(columnId);
            return values?.some(value => value.toLowerCase().includes(filterValue.toLowerCase()));
        },
    },
    {
        accessorKey: 'isLegalDocument',
        header: 'Tính pháp lý',
        enableSorting: true,
        cell: (props) => (
            <StatusCell getValue={props.getValue} options={documentIsLegalOptions} />
        ),
        filterFn: (row, columnId, filterValue) => {
            console.log("**********" + typeof(row.getValue(columnId)) + " " + typeof(filterValue));
            return row.getValue(columnId) === (filterValue.toLowerCase() == 'true')
        },
        meta: {
            filterVariant: 'select',
            selectOptions: documentIsLegalOptions,
        },
    }
]