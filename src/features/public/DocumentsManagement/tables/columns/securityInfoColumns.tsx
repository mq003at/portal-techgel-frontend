import { TableColumnDef } from "../../../../restricted/EmployeeList/tables/types/tableTypes";
import { StatusCell } from "../../../Table/components/StatusCell";
import { documentConfidentialityLevelOptions } from "../../constants/DocumentTypeOptions";
import { SecurityInfo } from "../../DTOs/DocumentDTO";

export const securityInfoColumns: TableColumnDef<SecurityInfo>[] = [
    {
        accessorKey: 'confidentialityReadLevel',
        header: 'Mức độ đọc',
        enableSorting: true,
        cell: (props) => (
            <StatusCell getValue={props.getValue} options={documentConfidentialityLevelOptions} />
        ),
        filterFn: (row, columnId, filterValue) => {
            return row.getValue(columnId) === filterValue;
        },
        meta: {
            filterVariant: 'select',
            selectOptions: documentConfidentialityLevelOptions,
        },
    },
    {
        accessorKey: 'confidentialityWriteLevel',
        header: 'Mức độ ghi',
        enableSorting: true,
        cell: (props) => (
            <StatusCell getValue={props.getValue} options={documentConfidentialityLevelOptions} />
        ),
        filterFn: (row, columnId, filterValue) => {
            return row.getValue(columnId) === filterValue;
        },
        meta: {
            filterVariant: 'select',
            selectOptions: documentConfidentialityLevelOptions,
        },
    },
    {
        accessorKey: 'confidentialityVisibilityLevel',
        header: 'Mức độ hiển thị',
        enableSorting: true,
        cell: (props) => (
            <StatusCell getValue={props.getValue} options={documentConfidentialityLevelOptions} />
        ),
        filterFn: (row, columnId, filterValue) => {
            return row.getValue(columnId) === filterValue;
        },
        meta: {
            filterVariant: 'select',
            selectOptions: documentConfidentialityLevelOptions,
        },
    },
    {
        accessorKey: 'confidentialityStatusChangeLevel',
        header: 'Mức độ thay đổi trạng thái',
        enableSorting: true,
        cell: (props) => (
            <StatusCell getValue={props.getValue} options={documentConfidentialityLevelOptions} />
        ),
        filterFn: (row, columnId, filterValue) => {
            return row.getValue(columnId) === filterValue;
        },
        meta: {
            filterVariant: 'select',
            selectOptions: documentConfidentialityLevelOptions,
        },
    },
    {
        accessorKey: 'confidentialityReadIds',
        header: 'Mã người được xem',
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
        accessorKey: 'confidentialityWriteIds',
        header: 'Mã người được ghi',
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
        accessorKey: 'confidentialityVisibilityIds',
        header: 'Mã người được hiển thị',
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
        accessorKey: 'confidentialityStatusChangeIds',
        header: 'Mã người được thay đổi trạng thái',
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
    }
]