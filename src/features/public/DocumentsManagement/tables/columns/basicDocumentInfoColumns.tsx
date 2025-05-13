import { ColumnDef } from '@tanstack/react-table';

export interface BasicDocumentInfo {
  id: string;
  mainId: string;
}

export const documentBasicColumns: ColumnDef<BasicDocumentInfo, any>[] = [
  {
    id: 'mainId',
    accessorKey: 'mainId',
    header: 'Mã tài liệu',
    enableSorting: true,
    enablePinning: true,
  },
];
