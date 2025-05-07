import { ColumnDef, CellContext } from '@tanstack/react-table';
import React from 'react';

// Define generic types for your custom cell renderers
type StatusCell<T, K extends keyof T> = (info: CellContext<T, T[K]>) => React.ReactNode;
type EmailCell<T, K extends keyof T> = (info: CellContext<T, T[K]>) => React.ReactNode;
// Add other custom cell types as needed

// Define the generic column configuration type
export type TableColumnConfig<T> = Record<
  keyof T,
  {
    ns?: string;
    labelKey?: string;
    label?: string;
    cell?: (
      info: CellContext<T, T[keyof T]>
    ) => React.ReactNode | StatusCell<T, keyof T> | EmailCell<T, keyof T>;
    // Add more TanStack Table options here if needed
  }
>;

// Helper function to generate a default header
const defaultHeaderFormatter = <T extends Record<string, any>>(key: keyof T): string => {
  return (
    String(key)
      .replace(/([A-Z])/g, ' $1')
      .trim()
      .charAt(0)
      .toUpperCase() + String(key).slice(1)
  );
};

// Generic function to generate TanStack Table column definitions
export const getTableColumns = <T extends Record<string, any>>(
  config: TableColumnConfig<T>,
  t?: (key: string, options?: any) => string
): ColumnDef<T>[] => {
  return Object.entries(config).map(([key, columnConfig]) => {
    const header =
      columnConfig.label ??
      (columnConfig.labelKey && t
        ? t(`${columnConfig.ns ? columnConfig.ns + ':' : ''}${columnConfig.labelKey}`)
        : columnConfig.ns && t
        ? t(`${columnConfig.ns}:${key}`)
        : defaultHeaderFormatter(key as keyof T));

    const cell: ColumnDef<T>['cell'] = (info: CellContext<T, unknown>) => {
      if (columnConfig.cell) {
        return columnConfig.cell(info as CellContext<T, T[keyof T]>);
      }
      // Explicitly cast info.getValue() to string or React.ReactNode
      return <span>{String(info.getValue())}</span>;
    };

    return {
      key: key as keyof T extends string ? keyof T : never,
      header,
      cell,
      accessorKey: key as keyof T,
      ...(columnConfig as Omit<typeof columnConfig, 'ns' | 'labelKey' | 'label' | 'cell'>), // Spread other config
    } as ColumnDef<T>;
  });
};
