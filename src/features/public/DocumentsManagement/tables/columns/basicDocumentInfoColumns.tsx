import { ColumnDef } from '@tanstack/react-table';

export interface BasicDocumentInfo {
  id: string;
  mainId: string;
}

export const documentBasicColumns: ColumnDef<BasicDocumentInfo, any>[] = [
  {
    accessorKey: 'mainId',
    header: 'Mã tài liệu',
    enableSorting: true,
    enablePinning: true,
  },
];
