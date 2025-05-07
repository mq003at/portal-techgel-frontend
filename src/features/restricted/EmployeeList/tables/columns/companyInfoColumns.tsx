import { TableColumnDef } from '../types/tableTypes';
import { CompanyInfoDTO } from '../../DTOs/EmployeeDTO';
import { employmentStatusOptions } from '../../configs/employeeFieldOptions';
import { StatusCell } from '../../../../public/Table/components/StatusCell';
import { DateCell } from '../../../../public/Table/components/DateCell';

export const employeeCompanyInfoColumns: TableColumnDef<CompanyInfoDTO>[] = [
  { 
    accessorKey: 'companyEmail', 
    header: 'Email công ty', 
    enableSorting: true,
    cell: StatusCell
  },
  { 
    accessorKey: 'companyPhoneNumber',
    header: 'SĐT công ty', 
    enableSorting: true 
  },
  {
    accessorKey: 'employmentStatus',
    header: 'Trạng thái',
    enableSorting: true,
    cell: (props) => (
      <StatusCell getValue={props.getValue} options={employmentStatusOptions} />
    )
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
