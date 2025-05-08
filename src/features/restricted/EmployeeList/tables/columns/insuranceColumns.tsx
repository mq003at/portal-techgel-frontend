import { TableColumnDef } from '../types/tableTypes';
import { InsuranceInfoDTO } from '../../DTOs/EmployeeDTO';
import { DateCell } from '../../../../public/Table/components/DateCell';

export const employeeInsuranceColumns: TableColumnDef<InsuranceInfoDTO>[] = [
  { accessorKey: 'insuranceNumber', header: 'Mã BHXH', enableSorting: true },
  { accessorKey: 'provider', header: 'Nhà cung cấp', enableSorting: true },
  {
    accessorKey: 'effectiveDate',
    header: 'Ngày hiệu lực',
    enableSorting: true,
    cell: DateCell,
  },
  {
    accessorKey: 'expiryDate',
    header: 'Ngày hết hạn',
    enableSorting: true,
    cell: DateCell,
  },
];
