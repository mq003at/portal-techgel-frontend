import { TableColumnDef } from '../types/tableTypes';
import { ScheduleInfoDTO } from '../../DTOs/EmployeeDTO';

export const employeeScheduleColumns: TableColumnDef<ScheduleInfoDTO>[] = [
  { accessorKey: 'workSchedule', header: 'Lịch làm việc', enableSorting: true },
  { accessorKey: 'isRemoteStatus', header: 'Làm việc từ xa', enableSorting: true },
  { accessorKey: 'shiftType', header: 'Ca làm việc', enableSorting: true },
];
