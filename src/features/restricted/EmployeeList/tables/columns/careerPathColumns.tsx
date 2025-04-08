import { TableColumnDef } from '../types/tableTypes';
import { CareerPathInfoDTO } from '../../DTOs/EmployeeDTO';

export const employeeCareerPathColumns: TableColumnDef<CareerPathInfoDTO>[] = [
  { accessorKey: 'degree', header: 'Bằng cấp', enableSorting: false },
  { accessorKey: 'certification', header: 'Chứng chỉ', enableSorting: false },
  { accessorKey: 'specialization', header: 'Chuyên ngành', enableSorting: false },
];
