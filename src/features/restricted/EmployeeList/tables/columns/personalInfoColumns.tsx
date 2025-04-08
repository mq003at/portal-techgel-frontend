import { TableColumnDef } from '../types/tableTypes';
import { PersonalInfoDTO } from '../../DTOs/EmployeeDTO';
import { StatusCell } from '../components/StatusCell';
import { DateCell } from '../components/DateCell';

export const employeePersonalInfoListColumns: TableColumnDef<PersonalInfoDTO>[] = [
  {
    accessorKey: 'dateOfBirth',
    header: 'Ngày Sinh',
    enableSorting: true,
    cell: DateCell,
  },
  {
    accessorKey: 'gender',
    header: 'Giới tính',
    enableSorting: true,
  },
  {
    accessorKey: 'maritalStatus',
    header: 'Hôn nhân',
    enableSorting: true,
  },
  {
    accessorKey: 'nationality',
    header: 'Quốc tịch',
    enableSorting: true,
  },
  {
    accessorKey: 'personalEmail',
    header: 'Email Cá nhân',
    enableSorting: true,
    cell: StatusCell,
  },
  {
    accessorKey: 'personalPhoneNumber',
    header: 'Số đt cá nhân',
    enableSorting: true,
  },
  {
    accessorKey: 'address',
    header: 'Địa chỉ nhà',
    enableSorting: true,
  },
  {
    accessorKey: 'idCardNumber',
    header: 'CCCD / CMND',
    enableSorting: true,
  },
  {
    accessorKey: 'idCardIssueDate',
    header: 'Ngày cấp',
    enableSorting: true,
  },
  {
    accessorKey: 'idCardExpiryDate',
    header: 'Ngày hết hạn',
    enableSorting: true,
  },
];
