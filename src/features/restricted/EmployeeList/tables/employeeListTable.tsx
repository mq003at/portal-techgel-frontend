import { ColumnDef, flexRender, getCoreRowModel, useReactTable } from '@tanstack/react-table';

import { BasicEmployeeInfo } from './columns/basicInfoColumns';
import { useNavigate } from 'react-router';
import { Fragment } from 'react/jsx-runtime';

interface EmployeeListTableProps<T> {
  title: string;
  basicData: BasicEmployeeInfo[];
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

  const nestedTable = useReactTable({
    data: nestedData,
    columns,
    getCoreRowModel: getCoreRowModel(),
  });

  console.log(basicData, 'basicData');
  return (
    <section className="mt-10 space-y-6">
      <div className="flex justify-between items-center">
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>

      {/* Basic Info Table */}
      <div className="overflow-x-auto rounded-lg border bg-white shadow">
        <table className="table w-full">
          <thead className="bg-gray-100 text-sm font-medium">
            <tr>
              <th className="px-4 py-2 text-left">Mã nhân viên</th>
              <th className="px-4 py-2 text-left">Ảnh đại diện</th>
              <th className="px-4 py-2 text-left">Họ</th>
              <th className="px-4 py-2 text-left">Tên đệm</th>
              <th className="px-4 py-2 text-left">Tên</th>

              {nestedTable.getHeaderGroups().map((hg) => (
                <Fragment key={hg.id}>
                  {hg.headers.map((h) => (
                    <th key={h.id} className="px-4 py-2 text-left border-b">
                      {flexRender(h.column.columnDef.header, h.getContext())}
                    </th>
                  ))}
                </Fragment>
              ))}
            </tr>
          </thead>
          <tbody>
            {basicData.map((emp, index) => {
              const nestedRow = nestedTable.getRowModel().rows[index]; // match by index
              return (
                <tr
                  key={emp.id}
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => navigate(`/main/employees/${emp.id}/edit`)}
                >
                  {/* Basic Info */}
                  <td className="px-4 py-2 border-t">{emp.mainId}</td>
                  <td className="px-4 py-2 border-t">
                    <img src={emp.avatar} alt="avatar" className="w-10 h-10 rounded-full" />
                  </td>
                  <td className="px-4 py-2 border-t">{emp.lastName}</td>
                  <td className="px-4 py-2 border-t">{emp.middleName}</td>
                  <td className="px-4 py-2 border-t">{emp.firstName}</td>

                  {/* Nested Info */}
                  {nestedRow.getVisibleCells().map((cell) => (
                    <td key={cell.id} className="px-4 py-2 border-t">
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
