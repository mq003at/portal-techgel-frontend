import { Column, ColumnDef, ColumnFiltersState, flexRender, getCoreRowModel, getFacetedMinMaxValues, getFacetedRowModel, getFacetedUniqueValues, getFilteredRowModel, getPaginationRowModel, getSortedRowModel, PaginationState, RowData, SortingState, useReactTable } from "@tanstack/react-table";
import { useEffect, useMemo, useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import { Fragment } from "react/jsx-runtime";
import { v4 as uuidv4 } from 'uuid';
import { Menu, Item, useContextMenu, ItemParams } from 'react-contexify';
import 'react-contexify/ReactContexify.css';

interface ContextMenuItem {
  label: string;
  handle: (params: any) => void;
}

interface TableProps<B, T> {
    title: string;
    slug: string;
    contextMenu: ContextMenuItem[];
    basicData: B[];
    basicListColumns: ColumnDef<B, any>[];
    nestedData: T[];
    nestedColumns: ColumnDef<T, any>[];
}

declare module '@tanstack/react-table' {
    //allows us to define custom properties for our columns
    interface ColumnMeta<TData extends RowData, TValue> {
      filterVariant?: 'text' | 'range' | 'select';
      selectOptions?: { label: string; value: any }[];
      isDateRange?: boolean;
    }
  }

function Filter({ column }: { column: Column<any, unknown> }) {
    const columnFilterValue = column.getFilterValue()
    const { filterVariant, selectOptions, isDateRange } = column.columnDef.meta ?? {}

    const sortedUniqueValues = useMemo(
      () =>
        filterVariant === 'range'
          ? []
          : Array.from(column.getFacetedUniqueValues().keys())
              .sort()
              .slice(0, 5000),
      [column.getFacetedUniqueValues(), filterVariant]
    )
  
    return filterVariant === 'range' ? (
      isDateRange ?
      <div className="flex space-x-2">
        <DebouncedInput
          type="date"
          value={(columnFilterValue as [string, string])?.[0] ?? ''}
          onChange={(value) =>
            column.setFilterValue((old: [string, string]) => [value, old?.[1]])
          }
          className="w-28"
        />
        <DebouncedInput
          type="date"
          value={(columnFilterValue as [string, string])?.[1] ?? ''}
          onChange={(value) =>
            column.setFilterValue((old: [string, string]) => [old?.[0], value])
          }
          className="w-28"
        />
      </div>
      : 
      <div>
        <div className="flex space-x-2">
          <DebouncedInput
            type="number"
            value={(columnFilterValue as [number, number])?.[0] ?? ''}
            onChange={value =>
              column.setFilterValue((old: [number, number]) => [value, old?.[1]])
            }
            placeholder={`Min`}
            className="w-12"
          />
          <DebouncedInput
            type="number"
            value={(columnFilterValue as [number, number])?.[1] ?? ''}
            onChange={value =>
              column.setFilterValue((old: [number, number]) => [old?.[0], value])
            }
            placeholder={`Max`}
            className="w-12"
          />
        </div>
        <div className="h-1" />
      </div>
    ) : (filterVariant === 'select' && selectOptions) ? (
      <select className="select h-8 inline-block w-auto"
        onChange={e => column.setFilterValue(e.target.value)}
        value={columnFilterValue?.toString()}
      >
        <option value="">All</option>
        {selectOptions.map((op, index) => {
          return <option key={index} value={op.value}>{op.label}</option>
        })}
      </select>
    ) : (
      <>
        <datalist id={column.id + 'list'}>
          {sortedUniqueValues.map((value: any) => (
            <option value={value} key={uuidv4()} />
          ))}
        </datalist>
        <DebouncedInput
          className=""
          onChange={value => column.setFilterValue(value)}
          placeholder={`Search...`}
          type="text"
          value={(columnFilterValue ?? '') as string}
          list={column.id + 'list'}
        />
      </>
    )
  }
  
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
      <label className="input h-8 w-50">
        <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
          <g
            strokeLinejoin="round"
            strokeLinecap="round"
            strokeWidth="2.5"
            fill="none"
            stroke="currentColor"
          >
            <circle cx="11" cy="11" r="8"></circle>
            <path d="m21 21-4.3-4.3"></path>
          </g>
        </svg>
        <input {...props} value={value} onChange={e => setValue(e.target.value)} />
      </label>
    )
  }

const MENU_ID = 'row-context-menu';

export function ListTable<B, T>({title, slug, contextMenu, basicData, basicListColumns, nestedData, nestedColumns}: TableProps<B, T>){
    const navigate = useNavigate();

    const [sorting, setSorting] = useState<SortingState>([])
    const [columnFilters, setColumnFilters] = useState<ColumnFiltersState>([])
    const [pagination, setPagination] = useState<PaginationState>({pageIndex: 0,pageSize: 5,})

    const { show } = useContextMenu({
      id: MENU_ID,
    });
    const handleContextMenu = (event: React.MouseEvent, row: any) => {
      event.preventDefault();
      show({
        event,
        props: {
          row,
        },
      });
    };

    // const basicTable = useReactTable({
    //     initialState: {
    //         columnPinning: {
    //             left: basicListColumns
    //             .filter((column): column is ColumnDef<B, any> & { accessorKey: string } => 
    //                 column.enablePinning === true)
    //             .map(column => column.accessorKey),
    //             right: [],
    //         },
    //     },
    //     data: basicData,
    //     columns: basicListColumns,
    //     getCoreRowModel: getCoreRowModel(),
    //     getSortedRowModel: getSortedRowModel(),
    //     onSortingChange: setSorting,
    //     onColumnFiltersChange: setColumnFilters,
    //     getFilteredRowModel: getFilteredRowModel(),
    //     state: {
    //         sorting,
    //         columnFilters,
    //     },
    // });
    // const nestedTable = useReactTable({
    //     data: nestedData,
    //     columns: nestedColumns,
    //     getCoreRowModel: getCoreRowModel(),
    //     getSortedRowModel: getSortedRowModel(),
    //     onSortingChange: setSorting,
    //     onColumnFiltersChange: setColumnFilters,
    //     getFilteredRowModel: getFilteredRowModel(),
    //     state: {
    //         sorting,
    //         columnFilters,
    //     },
    // });

    // const allLeafColumns: (Column<B, unknown> | Column<T, unknown>)[] = [
    //     ...basicTable.getAllLeafColumns(),
    //     ...nestedTable.getAllLeafColumns(),
    //   ];

    const combinedData = useMemo(() => (
      basicData.map((basicItem, index) => ({
        ...basicItem,
        ...nestedData[index],
      }))
    ), [basicData, nestedData]);
    
    const combinedColumns: ColumnDef<any, any>[] = useMemo(() => (
      [...basicListColumns, ...nestedColumns]
    ), [basicListColumns, nestedColumns]);

    const validColumnFilterIds = useMemo(
      () => combinedColumns.map(col => col.accessorKey || col.id),
      [combinedColumns]
    );
    const sanitizedColumnFilters = useMemo(
      () => columnFilters.filter(f => validColumnFilterIds.includes(f.id)),
      [columnFilters, validColumnFilterIds]
    );
    useEffect(() => {
      setColumnFilters(prev =>
        prev.filter(f => validColumnFilterIds.includes(f.id))
      );
    }, [validColumnFilterIds]);

    const table = useReactTable({
      data: combinedData,
      columns: combinedColumns,
      getCoreRowModel: getCoreRowModel(),
      getSortedRowModel: getSortedRowModel(),
      getFilteredRowModel: getFilteredRowModel(),
      getPaginationRowModel: getPaginationRowModel(),
      getFacetedRowModel: getFacetedRowModel(),
      getFacetedUniqueValues: getFacetedUniqueValues(),
      getFacetedMinMaxValues: getFacetedMinMaxValues(),
      onSortingChange: setSorting,
      onColumnFiltersChange: setColumnFilters,
      onPaginationChange: setPagination,
      state: {
        sorting,
        columnFilters: sanitizedColumnFilters,
        pagination,
      },
      initialState: {
        columnPinning: {
          left: basicListColumns
            .filter((column): column is ColumnDef<any, any> & { id: string } =>
              column.enablePinning === true)
            .map(column => column.id),
          right: [],
        },
      },
    });
    

    return (
        <section className="mt-10 space-y-6">
            <div className="flex justify-between items-center">
                <h3 className="text-xl font-semibold">{title}</h3>
                <div className="dropdown dropdown-bottom dropdown-end">
                    <div tabIndex={0} role="button" className="btn m-1"><FaEyeSlash /> Ẩn cột</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-1 w-52 p-2 shadow-sm max-h-55 overflow-y-auto">
                        <li>
                            {table.getAllLeafColumns().map((column) => (
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

            {/* Basic Info Table */}
            <div className="overflow-x-auto w-[calc(100vw-25em)] rounded-lg border bg-white shadow">
            <table className="table border-separate border-spacing-0 w-full">
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

                    {table.getHeaderGroups().map((hg) => (
                      <Fragment key={hg.id}>
                        {hg.headers.map((h, index) => (
                          <th
                            key={index}
                            className={`px-4 py-2 text-left bg-base-200 ${h.column.getCanSort() ? 'cursor-pointer select-none' : ''}`}
                            style={{
                              position: h.column.getIsPinned() ? 'sticky' : 'relative',
                              left: h.column.getIsPinned() === 'left' ? `${index * 150}px` : undefined,
                              zIndex: h.column.getIsPinned() ? 2 : 1,
                            }}
                          >
                            <div onClick={h.column.getToggleSortingHandler()}>
                              {flexRender(h.column.columnDef.header, h.getContext())}
                              {{
                                asc: ' 🔼',
                                desc: ' 🔽',
                                false: ' 🔃',
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
                {table.getRowModel().rows.map(row => (
                  <tr key={row.id} onClick={() => navigate(`/main/${slug}/${row.original.id}/edit`)} 
                    onContextMenu={(e) => handleContextMenu(e, row)}
                    className="cursor-pointer group">
                    {row.getVisibleCells().map((cell, index) => (
                      <td
                        key={cell.id}
                        className="px-4 py-2 min-w-25 bg-white border-t group-hover:!bg-gray-100"
                        style={{
                          position: cell.column.getIsPinned() ? 'sticky' : 'relative',
                          left: cell.column.getIsPinned() === 'left' ? `${index * 150}px` : undefined,
                          zIndex: cell.column.getIsPinned() ? 2 : 1,
                        }}
                      >
                        {flexRender(cell.column.columnDef.cell, cell.getContext())}
                      </td>
                    ))}
                  </tr>
                ))}
                </tbody>
            </table>
          </div>

          <div>
            <Menu id={MENU_ID}>
              {contextMenu.map((c, index) => (
                <Item key={index} onClick={c.handle}>{c.label}</Item>
              ))}
            </Menu>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1">
              <button
                className="btn btn-xs btn-outline"
                onClick={() => table.firstPage()}
                disabled={!table.getCanPreviousPage()}
              >
                « First
              </button>
              <button
                className="btn btn-xs btn-outline"
                onClick={() => table.previousPage()}
                disabled={!table.getCanPreviousPage()}
              >
                ‹ Prev
              </button>
              <button
                className="btn btn-xs btn-outline"
                onClick={() => table.nextPage()}
                disabled={!table.getCanNextPage()}
              >
                Next ›
              </button>
              <button
                className="btn btn-xs btn-outline"
                onClick={() => table.lastPage()}
                disabled={!table.getCanNextPage()}
              >
                Last »
              </button>
            </div>

            <div className="flex items-center gap-2">
              <span className="text-sm">
                Page <strong>{table.getState().pagination.pageIndex + 1}</strong> of{' '}
                <strong>{table.getPageCount().toLocaleString()}</strong>
              </span>

              <label className="input input-sm input-bordered flex items-center gap-2 w-fit">
                <span className="text-xs whitespace-nowrap">Go to page:</span>
                <input
                  type="number"
                  min="1"
                  max={table.getPageCount()}
                  defaultValue={table.getState().pagination.pageIndex + 1}
                  onChange={e => {
                    const page = e.target.value ? Number(e.target.value) - 1 : 0;
                    table.setPageIndex(page);
                  }}
                  className="grow w-16"
                />
              </label>
            </div>

            <select
              className="select select-sm select-bordered w-fit"
              value={table.getState().pagination.pageSize}
              onChange={e => {
                table.setPageSize(Number(e.target.value));
              }}
            >
              {[5, 30, 50, 100].map(pageSize => (
                <option key={pageSize} value={pageSize}>
                  Show {pageSize}
                </option>
              ))}
            </select>

            <div className="text-sm">
              Showing {table.getRowModel().rows.length.toLocaleString()} of{' '}
              {table.getRowCount().toLocaleString()} rows
            </div>
          </div>

        </section>
      );
}