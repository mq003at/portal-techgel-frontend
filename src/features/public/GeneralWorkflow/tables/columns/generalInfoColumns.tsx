import { Fragment } from "react/jsx-runtime";
import { TableColumnDef } from "../../../../restricted/EmployeeList/tables/types/tableTypes";
import { StatusCell } from "../../../Table/components/StatusCell";
import { generalWorkflowLogicOptions, GeneralWorkflowStatusOptions } from "../../constants/GeneralWorkflowTypeOptions";
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
        cell: (props) => (
            <StatusCell getValue={props.getValue} options={GeneralWorkflowStatusOptions} />
        ),
        filterFn: (row, columnId, filterValue) => {
            return row.getValue(columnId) === filterValue;
        },
        meta: {
            filterVariant: 'select',
            selectOptions: GeneralWorkflowStatusOptions,
        },
    },

    {
        accessorKey: 'workflowLogic',
        header: 'Logic',
        enableSorting: true,
        cell: (props) => (
            <StatusCell getValue={props.getValue} options={generalWorkflowLogicOptions} />
        ),
        filterFn: (row, columnId, filterValue) => {
            return row.getValue(columnId) === filterValue;
        },
        meta: {
            filterVariant: 'select',
            selectOptions: generalWorkflowLogicOptions,
        },
    },

    {
        accessorKey: 'approvedByIds',
        header: 'Được phê duyệt bởi ID',
        enableSorting: true,
        cell: ({ getValue: getTags }) => {
            const tags = getTags<string[]>() || [];
    
            return (
            <>
                {tags.map((tag, index) => (
                <Fragment key={`${tag}-${index}`}>
                    <StatusCell getValue={() => tag} />
                    &nbsp;
                </Fragment>
                ))}
            </>
            );
        },
        filterFn: (row, columnId, filterValue) => {
            const tags = row.getValue<string[]>(columnId);
            return tags?.some(tag => tag.toLowerCase().includes(filterValue.toLowerCase()));
        },
    },

    {
        accessorKey: 'approvedByNames',
        header: 'Được phê duyệt bởi tên',
        enableSorting: true,
        cell: ({ getValue: getTags }) => {
            const tags = getTags<string[]>() || [];

            return (
                <>
                {tags.map((tag, index) => (
                    <Fragment key={`${tag}-${index}`}>
                    <StatusCell getValue={() => tag} />
                    &nbsp;
                    </Fragment>
                ))}
                </>
            );
            },
            filterFn: (row, columnId, filterValue) => {
                const tags = row.getValue<string[]>(columnId);
                return tags?.some(tag => tag.toLowerCase().includes(filterValue.toLowerCase()));
        },
    },

    {
        accessorKey: 'approvedBySignatures',
        header: 'Được phê duyệt bởi chữ ký',
        enableSorting: true,
        cell: ({ getValue: getTags }) => {
            const tags = getTags<string[]>() || [];

            return (
                <>
                {tags.map((tag, index) => (
                    <Fragment key={`${tag}-${index}`}>
                    <StatusCell getValue={() => tag} />
                    &nbsp;
                    </Fragment>
                ))}
                </>
            );
            },
            filterFn: (row, columnId, filterValue) => {
                const tags = row.getValue<string[]>(columnId);
                return tags?.some(tag => tag.toLowerCase().includes(filterValue.toLowerCase()));
        },
    },

    {
        accessorKey: 'draftedByIds',
        header: 'Được soạn thảo bởi ID',
        enableSorting: true,
        cell: ({ getValue: getTags }) => {
            const tags = getTags<string[]>() || [];

            return (
                <>
                {tags.map((tag, index) => (
                    <Fragment key={`${tag}-${index}`}>
                    <StatusCell getValue={() => tag} />
                    &nbsp;
                    </Fragment>
                ))}
                </>
            );
            },
            filterFn: (row, columnId, filterValue) => {
                const tags = row.getValue<string[]>(columnId);
                return tags?.some(tag => tag.toLowerCase().includes(filterValue.toLowerCase()));
        },
    },

    {
        accessorKey: 'draftedByNames',
        header: 'Được soạn thảo bởi tên',
        enableSorting: true,
        cell: ({ getValue: getTags }) => {
            const tags = getTags<string[]>() || [];

            return (
                <>
                {tags.map((tag, index) => (
                    <Fragment key={`${tag}-${index}`}>
                    <StatusCell getValue={() => tag} />
                    &nbsp;
                    </Fragment>
                ))}
                </>
            );
            },
            filterFn: (row, columnId, filterValue) => {
                const tags = row.getValue<string[]>(columnId);
                return tags?.some(tag => tag.toLowerCase().includes(filterValue.toLowerCase()));
        },
    },

    {
        accessorKey: 'draftedBySignatures',
        header: 'Được soạn thảo bởi chữ ký',
        enableSorting: true,
        cell: ({ getValue: getTags }) => {
            const tags = getTags<string[]>() || [];

            return (
                <>
                {tags.map((tag, index) => (
                    <Fragment key={`${tag}-${index}`}>
                    <StatusCell getValue={() => tag} />
                    &nbsp;
                    </Fragment>
                ))}
                </>
            );
            },
            filterFn: (row, columnId, filterValue) => {
                const tags = row.getValue<string[]>(columnId);
                return tags?.some(tag => tag.toLowerCase().includes(filterValue.toLowerCase()));
        },
    },

    {
        accessorKey: 'quota',
        header: 'Hạn ngạch',
        enableSorting: true,
    }
]