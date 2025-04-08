import { TableColumnDef } from '../types/tableTypes';
import { CompanyInfoDTO } from '../../DTOs/EmployeeDTO';
import { StatusCell } from '../components/StatusCell';
import { DateCell } from '../components/DateCell';

export const employeeCompanyInfoColumns: TableColumnDef<CompanyInfoDTO>[] = [
  { accessorKey: 'companyEmail', header: 'Email công ty', enableSorting: true },
  { accessorKey: 'companyPhoneNumber', header: 'SĐT công ty', enableSorting: true },
  {
    accessorKey: 'employmentStatus',
    header: 'Trạng thái',
    enableSorting: true,
    cell: StatusCell,
  },
  { accessorKey: 'position', header: 'Vị trí', enableSorting: true },
  {
    accessorKey: 'startDate',
    header: 'Ngày bắt đầu',
    enableSorting: true,
    cell: DateCell,
  },
  {
    accessorKey: 'endDate',
    header: 'Ngày kết thúc',
    enableSorting: true,
    cell: DateCell,
  },
  {
    accessorKey: 'probationStartDate',
    header: 'Bắt đầu thử việc',
    enableSorting: true,
    cell: DateCell,
  },
  {
    accessorKey: 'probationEndDate',
    header: 'Kết thúc thử việc',
    enableSorting: true,
    cell: DateCell,
  },
];
