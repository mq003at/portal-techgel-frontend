import { Column, ColumnDef, flexRender, getCoreRowModel, getSortedRowModel, SortingState, useReactTable } from "@tanstack/react-table";
import { useState } from "react";
import { FaEyeSlash } from "react-icons/fa";
import { useNavigate } from "react-router";
import { Fragment } from "react/jsx-runtime";
import { BaseDTO } from "../../../types/DTOs/BaseDTO";

interface TableProps<B, T> {
    title: string;
    basicData: B[];
    basicListColumns: ColumnDef<B, any>[];
    nestedData: T[];
    nestedColumns: ColumnDef<T, any>[];
}

export function ListTable<B extends BaseDTO, T>({title, basicData, basicListColumns, nestedData, nestedColumns}: TableProps<B, T>){
    const navigate = useNavigate();

    const [sorting, setSorting] = useState<SortingState>([])

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
        state: {
            sorting,
        },
    });
    const nestedTable = useReactTable({
        data: nestedData,
        columns: nestedColumns,
        getCoreRowModel: getCoreRowModel(),
        getSortedRowModel: getSortedRowModel(),
        onSortingChange: setSorting,
        state: {
            sorting,
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

            {/* Basic Info Table */}
            <div className="overflow-x-auto w-[calc(100vw-25em)] rounded-lg border bg-white shadow">
            <table className="table table-md border-separate border-spacing-0 w-full">
                <thead className="bg-gray-100 text-sm font-medium">
                <tr>
                    {basicTable.getHeaderGroups().map((hg) => (
                    <Fragment key={hg.id}>
                        {hg.headers.map((h, index) => (
                        <th key={h.id} 
                            className={`px-4 py-2 text-left" ${h.column.getCanSort() ? 'cursor-pointer select-none' : ''}`}
                            onClick={h.column.getToggleSortingHandler()}
                            style={{
                                position: h.column.getIsPinned() ? 'sticky' : 'relative',
                                left: h.column.getIsPinned() === 'left' ? `${index * 100}px` : undefined,
                                zIndex: 2,
                                background: '#F3F4F6',
                            }}>
                            {flexRender(h.column.columnDef.header, h.getContext())}
                            {{
                                asc: ' 🔼',
                                desc: ' 🔽',
                            }[h.column.getIsSorted() as string] ?? null}
                        </th>
                        ))}
                    </Fragment>
                    ))}

                    {nestedTable.getHeaderGroups().map((hg) => (
                    <Fragment key={hg.id}>
                        {hg.headers.map((h) => (
                        <th key={h.id} 
                            className={`px-4 py-2 text-left" ${h.column.getCanSort() ? 'cursor-pointer select-none' : ''}`}
                            onClick={h.column.getToggleSortingHandler()}
                        >
                            {flexRender(h.column.columnDef.header, h.getContext())}
                            {{
                                asc: ' 🔼',
                                desc: ' 🔽',
                            }[h.column.getIsSorted() as string] ?? null}
                        </th>
                        ))}
                    </Fragment>
                    ))}
                </tr>
                </thead>
                <tbody>
                {basicData.map((data: B, index) => {
                    const basicRow = basicTable.getRowModel().rows[index];
                    const nestedRow = nestedTable.getRowModel().rows[index];
                    return (
                    <tr
                        key={data.id}
                        className="hover:bg-gray-50 cursor-pointer"
                        onClick={() => navigate(`/main/employees/${data.id}/edit`)}
                    >
                        {/* Basic Info */}
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

                        {/* Nested Info */}
                        {nestedRow && nestedRow.getVisibleCells().map((cell) => (
                        <td key={cell.id} className="px-4 py-2 min-w-25 position-relative bg-white border-t">
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