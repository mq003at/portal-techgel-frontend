import { Column, ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFilteredRowModel, getSortedRowModel, RowData, SortingState, useReactTable } from "@tanstack/react-table";
import { useEffect, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import { Fragment } from "react/jsx-runtime";
import FunctionalityBar from "../Organization/component/OrganizationTable/FunctionalityBar";

interface TableProps<B, T> {
    title: string;
    basicData: B[];
    basicListColumns: ColumnDef<B, any>[];
    nestedData: T[];
    nestedColumns: ColumnDef<T, any>[];
}

declare module '@tanstack/react-table' {
    //allows us to define custom properties for our columns
    interface ColumnMeta<TData extends RowData, TValue> {
      filterVariant?: 'text' | 'range' | 'select'
    }
  }

function Filter({ column }: { column: Column<any, unknown> }) {
    const columnFilterValue = column.getFilterValue()
    const { filterVariant } = column.columnDef.meta ?? {}
  
    return filterVariant === 'range' ? (
      <div>
        <div className="flex space-x-2">
          {/* See faceted column filters example for min max values functionality */}
          <DebouncedInput
            type="number"
            value={(columnFilterValue as [number, number])?.[0] ?? ''}
            onChange={value =>
              column.setFilterValue((old: [number, number]) => [value, old?.[1]])
            }
            placeholder={`Min`}
            className="w-24 border shadow rounded"
          />
          <DebouncedInput
            type="number"
            value={(columnFilterValue as [number, number])?.[1] ?? ''}
            onChange={value =>
              column.setFilterValue((old: [number, number]) => [old?.[0], value])
            }
            placeholder={`Max`}
            className="w-24 border shadow rounded"
          />
        </div>
        <div className="h-1" />
      </div>
    ) : filterVariant === 'select' ? (
      <select
        onChange={e => column.setFilterValue(e.target.value)}
        value={columnFilterValue?.toString()}
      >
        {/* See faceted column filters example for dynamic select options */}
        <option value="">All</option>
        <option value="complicated">complicated</option>
        <option value="relationship">relationship</option>
        <option value="single">single</option>
      </select>
    ) : (
      <DebouncedInput
        className="w-36 border shadow rounded"
        onChange={value => column.setFilterValue(value)}
        placeholder={`Search...`}
        type="text"
        value={(columnFilterValue ?? '') as string}
      />
      // See faceted column filters example for datalist search suggestions
    )
  }
  
  // A typical debounced input react component
  function DebouncedInput({
    value: initialValue,
    onChange,
    debounce = 500,
    ...props
  }: {
    value: string | number
    onChange: (value: string | number) => void
    debounce?: number
  } & Omit<React.InputHTMLAttributes<HTMLInputElement>, 'onChange'>) {
    const [value, setValue] = useState(initialValue)
  
    useEffect(() => {
      setValue(initialValue)
    }, [initialValue])
  
    useEffect(() => {
      const timeout = setTimeout(() => {
        onChange(value)
      }, debounce)
  
      return () => clearTimeout(timeout)
    }, [value])
  
    return (
      <input {...props} value={value} onChange={e => setValue(e.target.value)} />
    )
  }

export function ListTable<B, T>({title, basicData, basicListColumns, nestedData, nestedColumns}: TableProps<B, T>){
    const navigate = useNavigate();

    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])

    const basicTable = useReactTable({
        initialState: {
            columnPinning: {
                left: basicListColumns
                .filter((column): column is ColumnDef<B, any> & { accessorKey: string } => 
                    column.enablePinning === true)
                .map(column => column.accessorKey),
                right: [],
            },
        },
        data: basicData,
        columns: basicListColumns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    });
    const nestedTable = useReactTable({
        data: nestedData,
        columns: nestedColumns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        onColumnFiltersChange: setColumnFilters,
        getFilteredRowModel: getFilteredRowModel(),
        state: {
            sorting,
            columnFilters,
        },
    });

    const allLeafColumns: (Column<B, unknown> | Column<T, unknown>)[] = [
        ...basicTable.getAllLeafColumns(),
        ...nestedTable.getAllLeafColumns(),
      ];

    // const combinedData = basicData.map((basicItem, index) => ({
    //     ...basicItem,
    //     ...nestedData[index]
    // }));
    // const combinedColumns: ColumnDef<any, any>[] = [
    //     ...basicListColumns,
    //     ...nestedColumns
    // ];
    // const table = useReactTable({
    //     data: combinedData,
    //     columns: combinedColumns,
    //     getCoreRowModel: getCoreRowModel(),
    //     initialState: {
    //         columnPinning: {
    //             left: basicListColumns
    //             .filter((column): column is ColumnDef<B, any> & { accessorKey: string } => 
    //                 column.enablePinning === true)
    //             .map(column => column.accessorKey),
    //             right: [],
    //         },
    //     },
    // });

    return (
        <section className="mt-10 space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{title}</h3>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1"><FaEyeSlash /> Ẩn cột</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm max-h-55 overflow-y-auto">
                        <li>
                            {allLeafColumns.map((column) => (
                                <Fragment key={column.id}>
                                        <label className="label">
                                        <input type="checkbox" className="checkbox" 
                                        checked={column.getIsVisible()}
                                        onChange={column.getToggleVisibilityHandler()} />
                                        {column.columnDef.header?.toString()}
                                    </label>
                                </Fragment>
                            ))}
                        </li>
                    </ul>
                </div>
            </div>

            <FunctionalityBar resetButtonFunction={function(){}} />

            {/* Basic Info Table */}
            <div className="overflow-x-auto w-[calc(100vw-25em)] rounded-lg border bg-white shadow">
            <table className="border-separate border-spacing-0 w-full">
                <thead className="bg-gray-100 text-sm font-medium">
                <tr>
                    {/* {basicTable.getHeaderGroups().map((hg) => (
                    <Fragment key={hg.id}>
                        {hg.headers.map((h, index) => (
                        <th key={h.id} 
                            className={`px-4 py-2 text-left" ${h.column.getCanSort() ? 'cursor-pointer select-none' : ''}`}
                            style={{
                                position: h.column.getIsPinned() ? 'sticky' : 'relative',
                                left: h.column.getIsPinned() === 'left' ? `${index * 100}px` : undefined,
                                zIndex: 2,
                                background: '#F3F4F6',
                            }}>
                            <div onClick={h.column.getToggleSortingHandler()}>
                                {flexRender(h.column.columnDef.header, h.getContext())}
                                {{
                                    asc: ' 🔼',
                                    desc: ' 🔽',
                                }[h.column.getIsSorted() as string] ?? null}
                            </div>
                            
                            {h.column.getCanFilter() ? (
                                <div>
                                    <Filter column={h.column} />
                                </div>
                            ) : null}
                        </th>
                        ))}
                    </Fragment>
                    ))}

                    {nestedTable.getHeaderGroups().map((hg) => (
                    <Fragment key={hg.id}>
                        {hg.headers.map((h) => (
                        <th key={h.id} 
                            className={`px-4 py-2 text-left" ${h.column.getCanSort() ? 'cursor-pointer select-none' : ''}`}>
                            <div onClick={h.column.getToggleSortingHandler()}>
                                {flexRender(h.column.columnDef.header, h.getContext())}
                                {{
                                    asc: ' 🔼',
                                    desc: ' 🔽',
                                }[h.column.getIsSorted() as string] ?? null}
                            </div>

                            {h.column.getCanFilter() ? (
                                <div>
                                    <Filter column={h.column} />
                                </div>
                            ) : null}
                            
                        </th>
                        ))}
                    </Fragment>
                    ))} */}
                    {[...basicTable.getHeaderGroups(), ...nestedTable.getHeaderGroups()].map((hg) => (
                      <Fragment key={hg.id}>
                        {hg.headers.map((h, index) => (
                          <th
                            key={h.id}
                            className={`px-4 py-2 text-left ${h.column.getCanSort() ? 'cursor-pointer select-none' : ''}`}
                            style={{
                              position: h.column.getIsPinned() ? 'sticky' : 'relative',
                              left: h.column.getIsPinned() === 'left' ? `${index * 100}px` : undefined,
                              zIndex: 2,
                              background: '#F3F4F6',
                            }}
                          >
                            <div onClick={h.column.getToggleSortingHandler()}>
                              {flexRender(h.column.columnDef.header, h.getContext())}
                              {{
                                asc: ' 🔼',
                                desc: ' 🔽',
                              }[h.column.getIsSorted() as string] ?? null}
                            </div>

                            {h.column.getCanFilter() && (
                              <div>
                                <Filter column={h.column} />
                              </div>
                            )}
                          </th>
                        ))}
                      </Fragment>
                    ))}

                </tr>
                </thead>
                <tbody>
                {/* {basicData.map((data: B, index) => {
                    const basicRow = basicTable.getRowModel().rows[index];
                    const nestedRow = nestedTable.getRowModel().rows[index];
                    return (
                    <tr
                        key={data.id}
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => navigate(`/main/employees/${data.id}/edit`)}
                    >
                        {basicRow && basicRow.getVisibleCells().map((cell, index) => (
                        <td key={cell.id} className="px-4 py-2 min-w-25 bg-white border-t"
                        style={{
                            position: cell.column.getIsPinned() ? 'sticky' : 'relative',
                            left: cell.column.getIsPinned() === 'left' ? `${index * 100}px` : undefined,
                            zIndex: 2,
                        }}>
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                        ))}

                        {nestedRow && nestedRow.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-4 py-2 min-w-25 position-relative bg-white border-t">
                            {flexRender(cell.column.columnDef.cell, cell.getContext())}
                        </td>
                        ))}
                    </tr>
                    );
                })} */}
                {basicData.map((data: B, index) => {
                  const basicRow = basicTable.getRowModel().rows[index];
                  const nestedRow = nestedTable.getRowModel().rows[index];

                  const allCells = [
                    ...(basicRow?.getVisibleCells() || []),
                    ...(nestedRow?.getVisibleCells() || []),
                  ];

                  return (
                    <tr
                      key={data.id}
                      className="hover:bg-gray-50 cursor-pointer"
                      onClick={() => navigate(`/main/employees/${data.id}/edit`)}
                    >
                      {allCells.map((cell, cellIndex) => (
                        <td
                          key={cell.id}
                          className="px-4 py-2 min-w-25 bg-white border-t"
                          style={{
                            position: cell.column.getIsPinned() ? 'sticky' : 'relative',
                            left: cell.column.getIsPinned() === 'left' ? `${cellIndex * 100}px` : undefined,
                            zIndex: cell.column.getIsPinned() ? 2 : undefined,
                          }}
                        >
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