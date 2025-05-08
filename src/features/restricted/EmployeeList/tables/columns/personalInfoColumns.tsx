import { TableColumnDef } from '../types/tableTypes';
import { PersonalInfoDTO } from '../../DTOs/EmployeeDTO';
import { genderOptions, maritalStatusOptions } from '../../configs/employeeFieldOptions';
import { DateCell } from '../../../../public/Table/components/DateCell';
import { StatusCell } from '../../../../public/Table/components/StatusCell';

export const employeePersonalInfoListColumns: TableColumnDef<PersonalInfoDTO>[] = [
  {
    accessorKey: 'dateOfBirth',
    header: 'Ngày Sinh',
    enableSorting: true,
    cell: DateCell,
    sortingFn: (rowA, rowB, columnId) => {
      const dateA = new Date(rowA.getValue(columnId));
      console.log("************" + columnId);
      const dateB = new Date(rowB.getValue(columnId));
      return dateA.getTime() - dateB.getTime();
    },
  },
  {
    accessorKey: 'gender',
    header: 'Giới tính',
    enableSorting: true,
    cell: (props) => (
      <StatusCell getValue={props.getValue} options={genderOptions} />
    )
  },
  {
    accessorKey: 'maritalStatus',
    header: 'Hôn nhân',
    enableSorting: true,
    cell: (props) => (
      <StatusCell getValue={props.getValue} options={maritalStatusOptions} />
    )
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
    cell: StatusCell
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
