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
    enablePinning: true,
  },
  {
    accessorKey: 'avatar',
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
    header: 'Họ',
    enableSorting: true,
    enablePinning: true,
  },
  {
    accessorKey: 'middleName',
    header: 'Tên đệm',
    enableSorting: true,
    enablePinning: true,
  },
  {
    accessorKey: 'firstName',
    header: 'Tên',
    enableSorting: true,
    enablePinning: true,
  },
];
