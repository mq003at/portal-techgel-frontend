import { ColumnDef } from '@tanstack/react-table';

export interface BasicEmployeeInfo {
  id: string;
  mainId: string;
  lastName: string;
  middleName?: string;
  firstName: string;
  avatar?: string;
}

export const employeeBasicListColumns: ColumnDef<BasicEmployeeInfo, any>[] = [
  {
    accessorKey: 'mainId',
    header: 'Mã nhân viên',
    enableSorting: true,
  },
  {
    accessorKey: 'lastNameAndMiddle',
    header: 'Họ và tên đệm',
    enableSorting: true,
  },
  {
    accessorKey: 'firstName',
    header: 'Tên',
    enableSorting: true,
  },
  {
    accessorKey: 'avatar',
    header: 'Ảnh đại diện',
    enableSorting: false,
    cell: ({ row }) => (
      <div className="avatar">
        <div className="w-24 rounded-full">
          <img src={row.original.avatar} alt="avatar" />
        </div>
      </div>
    ),
  },
];
