import { TableColumnDef } from '../types/tableTypes';
import { RoleInfoDTO } from '../../DTOs/EmployeeDTO';

export const employeeRoleColumns: TableColumnDef<RoleInfoDTO>[] = [
  { accessorKey: 'divisionNames', header: 'Khối', enableSorting: false },
  { accessorKey: 'departmentNames', header: 'Phòng ban', enableSorting: false },
  { accessorKey: 'sectionNames', header: 'Bộ phận', enableSorting: false },
  { accessorKey: 'unitNames', header: 'Đơn vị', enableSorting: false },
  { accessorKey: 'teamNames', header: 'Tổ', enableSorting: false },
  { accessorKey: 'groupNames', header: 'Nhóm đặc biệt', enableSorting: false },
  { accessorKey: 'supervisorName', header: 'Người quản lý', enableSorting: false },
  { accessorKey: 'subordinateNames', header: 'Cấp dưới', enableSorting: false },
];
