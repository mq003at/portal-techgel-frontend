import { Fragment } from "react/jsx-runtime";
import { TableColumnDef } from "../../../../restricted/EmployeeList/tables/types/tableTypes";
import { DateCell } from "../../../Table/components/DateCell";
import { StatusCell } from "../../../Table/components/StatusCell";
import { documentIsLegalOptions } from "../../constants/DocumentTypeOptions";
import { LegalDocumentInfo } from "../../DTOs/DocumentDTO";
import { v4 as uuidv4 } from 'uuid';

export const legalDocumentInfoColumns: TableColumnDef<LegalDocumentInfo>[] = [
    {
        id: 'draftDate',
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
        id: 'publishDate',
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
        id: 'effectiveDate',
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
        id: 'expiredDate',
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
        accessorKey: 'finalAprovalDate',
        header: 'Ngày phê duyệt cuối cùng',
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
        accessorKey: 'inspectionDate',
        header: 'Ngày nghiệm thu',
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
        id: 'draftByIds',
        accessorKey: 'draftByIds',
        header: 'Mã người soạn thảo',
        enableSorting: true,
        cell: ({ getValue }) => {
            const values = getValue<string[]>() || [];

            return (
                <>
                    {values.map((value, _) => (
                        <Fragment key={uuidv4()}>
                            <StatusCell getValue={() => value}/> 
                            &nbsp;
                        </Fragment>
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
        accessorKey: 'draftByNames',
        header: 'Tên người soạn thảo',
        enableSorting: true,
        cell: ({ getValue }) => {
            const values = getValue<string[]>() || [];

            return (
                <>
                    {values.map((value, _) => (
                        <Fragment key={uuidv4()}>
                            <StatusCell getValue={() => value}/> 
                            &nbsp;
                        </Fragment>
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
        id: 'publishByIds',
        accessorKey: 'publishByIds',
        header: 'Mã người xuất bản',
        enableSorting: true,
        cell: ({ getValue }) => {
            const values = getValue<string[]>() || [];

            return (
                <>
                    {values.map((value, _) => (
                        <Fragment key={uuidv4()}>
                            <StatusCell getValue={() => value}/> 
                            &nbsp;
                        </Fragment>
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
        id: 'publishByNames',
        accessorKey: 'publishByNames',
        header: 'Tên người xuất bản',
        enableSorting: true,
        cell: ({ getValue }) => {
            const values = getValue<string[]>() || [];

            return (
                <>
                    {values.map((value, _) => (
                        <Fragment key={uuidv4()}>
                            <StatusCell getValue={() => value}/> 
                            &nbsp;
                        </Fragment>
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
        id: 'approvalByIds',
        accessorKey: 'approvalByIds',
        header: 'Mã người phê duyệt',
        enableSorting: true,
        cell: ({ getValue }) => {
            const values = getValue<string[]>() || [];

            return (
                <>
                    {values.map((value, _) => (
                        <Fragment key={uuidv4()}>
                            <StatusCell getValue={() => value}/> 
                            &nbsp;
                        </Fragment>
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
        accessorKey: 'approvalByNames',
        header: 'Tên người phê duyệt',
        enableSorting: true,
        cell: ({ getValue }) => {
            const values = getValue<string[]>() || [];

            return (
                <>
                    {values.map((value, _) => (
                        <Fragment key={uuidv4()}>
                            <StatusCell getValue={() => value}/> 
                            &nbsp;
                        </Fragment>
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
        accessorKey: 'inspectionByIds',
        header: 'Mã người nghiệm thu',
        enableSorting: true,
        cell: ({ getValue }) => {
            const values = getValue<string[]>() || [];

            return (
                <>
                    {values.map((value, _) => (
                        <Fragment key={uuidv4()}>
                            <StatusCell getValue={() => value}/> 
                            &nbsp;
                        </Fragment>
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
        accessorKey: 'inspectionByNames',
        header: 'Tên người nghiệm thu',
        enableSorting: true,
        cell: ({ getValue }) => {
            const values = getValue<string[]>() || [];

            return (
                <>
                    {values.map((value, _) => (
                        <Fragment key={uuidv4()}>
                            <StatusCell getValue={() => value}/> 
                            &nbsp;
                        </Fragment>
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
        id: 'isLegalDocument',
        accessorKey: 'isLegalDocument',
        header: 'Tính pháp lý',
        enableSorting: true,
        cell: (props) => (
            <StatusCell getValue={props.getValue} options={documentIsLegalOptions} />
        ),
        filterFn: (row, columnId, filterValue) => {
            return row.getValue(columnId) === (filterValue.toLowerCase() == 'true')
        },
        meta: {
            filterVariant: 'select',
            selectOptions: documentIsLegalOptions,
        },
    }
]