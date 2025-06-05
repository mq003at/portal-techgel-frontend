import { GeneralWorkflowStatusOptions } from '../../constants/GeneralWorkflowTypeOptions';
import { StatusCell } from '../../../Table/components/StatusCell';
import { ColumnDef } from "@tanstack/react-table";
import { GeneralWorkflowStatusType } from '../../config/GeneralWorkflowTypes';
import { Fragment } from 'react/jsx-runtime';
import { LeaveApprovalCategoryOptions } from '../../constants/LeaveRequestWorkflowOptions';

export interface BasicGeneralWorkflowInfo {
    id: number | undefined;
    mainId: string;
    name: string;
    description?: string;
    status: string;
    employeeId: number,
    employeeName: string,
    reason: string,
    startDate: string,
    endDate: string,
    employeeAnnualLeaveTotalDays: number,
    leaveApprovalCategory: string,
}

export const generalWorkflowBasicColumns: ColumnDef<BasicGeneralWorkflowInfo, any>[] = [
    {
        id: 'employeeName',
        accessorKey: 'employeeName',
        header: 'Tên nhân viên',
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
            return String(row.getValue(columnId)).toLowerCase() === filterValue.toLowerCase();
        },
        meta: {
            filterVariant: 'select',
            selectOptions: GeneralWorkflowStatusOptions,
        },
    },
    {
        id: 'reason',
        accessorKey: 'reason',
        header: 'Lý do xin nghỉ',
        enableSorting: true,
    },
    {
        id: 'totalDays',
        accessorKey: 'totalDays',
        header: 'Tổng ngày nghỉ',
        enableSorting: true,
    },
    {
        id: 'startDate',
        accessorKey: 'startDate',
        header: 'Từ ngày',
        enableSorting: true,
        cell: ({ getValue }) => {
            const value = getValue<Date | string>();
            const date = new Date(value);
            return new Intl.DateTimeFormat('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            }).format(date);
        },
    },
    {
        id: 'endDate',
        accessorKey: 'endDate',
        header: 'Đến ngày',
        enableSorting: true,
        cell: ({ getValue }) => {
            const value = getValue<Date | string>();
            const date = new Date(value);
            return new Intl.DateTimeFormat('vi-VN', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric',
            }).format(date);
        },
    },
    {
        id: 'employeeAnnualLeaveTotalDays',
        accessorKey: 'employeeAnnualLeaveTotalDays',
        header: 'Tổng phép năm',
        enableSorting: true,
    },
    {
        id: 'leaveApprovalCategory',
        accessorKey: 'leaveApprovalCategory',
        header: 'Loại',
        enableSorting: true,
        cell: (props) => (
            <StatusCell getValue={props.getValue} options={LeaveApprovalCategoryOptions} />
        ),
        filterFn: (row, columnId, filterValue) => {
            return String(row.getValue(columnId)).toLowerCase() === filterValue.toLowerCase();
        },
        meta: {
            filterVariant: 'select',
            selectOptions: LeaveApprovalCategoryOptions,
        },
    },
    {
        id: 'employeeId',
        accessorKey: 'employeeId',
        header: 'Mã nhân viên',
        enableSorting: true,
    },
];