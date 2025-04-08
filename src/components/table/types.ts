import { ColumnDef } from '@tanstack/react-table';

export interface TableColumnDef<TData> extends ColumnDef<TData> {
  accessorKey: keyof TData;
  header: string;
  enableSorting?: boolean;
}

export interface TablePagination {
  pageIndex: number;
  pageSize: number;
  totalCount: number;
}

export interface TableFilters {
  [key: string]: string | number | boolean | null;
}

export interface TableState {
  pagination: TablePagination;
  sorting: { id: string; desc: boolean }[];
  filters: TableFilters;
}

export const defaultTableState: TableState = {
  pagination: {
    pageIndex: 0,
    pageSize: 10,
    totalCount: 0,
  },
  sorting: [],
  filters: {},
};
