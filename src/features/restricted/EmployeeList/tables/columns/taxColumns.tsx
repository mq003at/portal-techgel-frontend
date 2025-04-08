import { TableColumnDef } from '../types/tableTypes';
import { TaxInfoDTO } from '../../DTOs/EmployeeDTO';

export const employeeTaxColumns: TableColumnDef<TaxInfoDTO>[] = [
  { accessorKey: 'taxId', header: 'Mã số thuế', enableSorting: true },
  { accessorKey: 'taxStatus', header: 'Tình trạng', enableSorting: true },
  { accessorKey: 'region', header: 'Khu vực', enableSorting: true },
];
