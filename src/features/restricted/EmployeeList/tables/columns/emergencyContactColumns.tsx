import { TableColumnDef } from '../types/tableTypes';
import { EmergencyContactInfoDTO } from '../../DTOs/EmployeeDTO';

export const employeeEmergencyContactColumns: TableColumnDef<EmergencyContactInfoDTO>[] = [
  { accessorKey: 'emergencyContactName', header: 'Tên người liên hệ', enableSorting: true },
  { accessorKey: 'emergencyContactPhone', header: 'Số điện thoại', enableSorting: true },
  { accessorKey: 'relationship', header: 'Quan hệ', enableSorting: true },
  {
    accessorKey: 'emergencyContactCurrentAddress',
    header: 'Địa chỉ hiện tại',
    enableSorting: true,
  },
  {
    accessorKey: 'emergencyContactPermanentAddress',
    header: 'Địa chỉ thường trú',
    enableSorting: true,
  },
];
