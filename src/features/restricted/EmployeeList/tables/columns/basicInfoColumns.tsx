import { ColumnDef } from '@tanstack/react-table';

export interface BasicEmployeeInfo {
  mainId: string;
  lastName: string;
  middleName?: string;
  firstName: string;
  avatar?: string;
  password?: string;
}

export const employeeBasicListColumns: ColumnDef<BasicEmployeeInfo, any>[] = [
  {
    accessorKey: 'mainId',
    id: 'mainId',
    header: 'Mã nhân viên',
    enableSorting: true,
    enablePinning: true,
  },
  {
    accessorKey: 'avatar',
    id: 'avatar',
    header: 'Ảnh đại diện',
    enableSorting: false,
    enablePinning: true,
    cell: ({ row }) => (
      <div className="avatar">
        <div className="w-10 h-10 rounded-full">
          <img src={row.original.avatar} alt="avatar" />
        </div>
      </div>
    ),
  },
  {
    accessorKey: 'lastName',
    id: 'lastName',
    header: 'Họ',
    enableSorting: true,
    enablePinning: true,
  },
  {
    accessorKey: 'middleName',
    id: 'middleName',
    header: 'Tên đệm',
    enableSorting: true,
    enablePinning: true,
  },
  {
    accessorKey: 'firstName',
    id: 'firstName',
    header: 'Tên',
    enableSorting: true,
    enablePinning: true,
  },
];
