import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { BasicEmployeeInfo, employeeBasicListColumns } from './columns/basicInfoColumns';
import { useNavigate } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

interface EmployeeListTableProps<T> {
  title: string;
  basicData: any[];
  nestedData: T[];
  columns: ColumnDef<T, any>[];
}

export function EmployeeListTable<T>({
  title,
  basicData,
  nestedData,
  columns,
}: EmployeeListTableProps<T>) {
  const navigate = useNavigate();
  const basicTable = useReactTable({
    initialState: {
      columnPinning: {
        left: employeeBasicListColumns
        .filter((column): column is ColumnDef<BasicEmployeeInfo, any> & { accessorKey: string } => 
          column.enablePinning === true)
        .map(column => column.accessorKey),
        right: [],
      },
    },
    data: basicData,
    columns: employeeBasicListColumns,
    getCoreRowModel: getCoreRowModel(),
  });
  const nestedTable = useReactTable({
    data: nestedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  // const combinedData = basicData.map((basicItem, index) => ({
  //   ...basicItem,
  //   ...nestedData[index] // Gộp theo index hoặc key tương ứng
  // }));

  // const combinedColumns: ColumnDef<any, any>[] = [
  //   ...employeeBasicListColumns,
  //   ...columns
  // ];
  // const table = useReactTable({
  //   data: combinedData,
  //   columns: combinedColumns,
  //   getCoreRowModel: getCoreRowModel(),
  //   initialState: {
  //     columnPinning: {
  //       left: ['mainId', 'avatar', 'lastName', 'middleName', 'firstName'],
  //       right: []
  //     }
  //   }
  // });

  console.log(basicData, 'basicData');
  return (
    <section className="mt-10 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      {/* Basic Info Table */}
      <div className="overflow-x-auto w-[calc(100vw-25em)] rounded-lg border bg-white shadow">
        <table className="border-collapse border-spacing-0 w-full">
          <thead className="bg-gray-100 text-sm font-medium">
            <tr>
              {basicTable.getHeaderGroups().map((hg) => (
                <Fragment key={hg.id}>
                  {hg.headers.map((h, index) => (
                    <th key={h.id} className="px-4 py-2 text-left"
                      style={{
                        position: h.column.getIsPinned() ? 'sticky' : 'relative',
                        left: h.column.getIsPinned() === 'left' ? `${index * 100}px` : undefined,
                        zIndex: 2,
                        background: '#F3F4F6',
                      }}>
                      {flexRender(h.column.columnDef.header, h.getContext())}
                    </th>
                  ))}
                </Fragment>
              ))}

              {nestedTable.getHeaderGroups().map((hg) => (
                <Fragment key={hg.id}>
                  {hg.headers.map((h) => (
                    <th key={h.id} className="px-4 py-2 text-left position-relative">
                      {flexRender(h.column.columnDef.header, h.getContext())}
                    </th>
                  ))}
                </Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {basicData.map((emp, index) => {
              const basicRow = basicTable.getRowModel().rows[index];
              const nestedRow = nestedTable.getRowModel().rows[index]; // match by index
              return (
                <tr
                  key={emp.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => navigate(`/main/employees/${emp.id}/edit`)}
                >
                  {/* Basic Info */}
                  {basicRow.getVisibleCells().map((cell, index) => (
                    <td key={cell.id} className="px-4 py-2 border-t min-w-25 bg-white"
                    style={{
                      position: cell.column.getIsPinned() ? 'sticky' : 'relative',
                      left: cell.column.getIsPinned() === 'left' ? `${index * 100}px` : undefined,
                      zIndex: 2,
                    }}>
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}

                  {/* Nested Info */}
                  {nestedRow.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-2 border-t min-w-25 position-relative bg-white">
                      {flexRender(cell.column.columnDef.cell, cell.getContext())}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </section>
  );
}
