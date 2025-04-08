import {
  useReactTable,
  getCoreRowModel,
  getSortedRowModel,
  flexRender,
} from '@tanstack/react-table';
import { useGetDivisionsQuery } from '../../api/DivisionApi';
import { OrgEntity } from '../../types/OrganizationTypes';
import { organizationTableColumns } from '../../constants/OrganizationTableColumns';
import { useAppSelector } from '../../../../../hooks/reduxHooks';
import IconWrapper from '../../../../../components/wrapper/IconWrapper';

function flattenChildren(entity: OrgEntity): OrgEntity[] {
  if ('departments' in entity) return entity.departments ?? [];
  if ('sections' in entity) return entity.sections ?? [];
  if ('units' in entity) return entity.units ?? [];
  if ('teams' in entity) return entity.teams ?? [];

  return [];
}

export default function OrganizationTable() {
  const selected = useAppSelector((state) => state.selectedOrganizationEntity.selected);
  const { data: divisions = [] } = useGetDivisionsQuery();

  const data: OrgEntity[] = selected
    ? flattenChildren(selected)
    : divisions.flatMap((division) => [division, ...flattenChildren(division)]);

  const table = useReactTable({
    data,
    columns: organizationTableColumns,
    getCoreRowModel: getCoreRowModel(),
    getSortedRowModel: getSortedRowModel(),
    state: {},
  });

  return (
    <div className="overflow-x-auto bg-white shadow rounded-lg">
      <table className="table w-full">
        <thead className="sticky top-0 bg-gray-200 z-10">
          {table.getHeaderGroups().map((headerGroup) => (
            <tr key={headerGroup.id}>
              {headerGroup.headers.map((header) => {
                const sort = header.column.getIsSorted();
                return (
                  <th
                    key={header.id}
                    className="cursor-pointer px-4 py-2"
                    onClick={header.column.getToggleSortingHandler()}
                  >
                    {flexRender(header.column.columnDef.header, header.getContext())}
                    <div className="pl-[10px] inline-flex">
                      {sort === 'asc' && (
                        <IconWrapper
                          src="../assets/icon/globalIcons/sortUp.svg"
                          title="Từ thấp tới cao"
                          width={12}
                          height={12}
                        />
                      )}
                      {sort === 'desc' && (
                        <IconWrapper
                          src="../assets/icon/globalIcons/sortDown.svg"
                          title="Từ cao tới thấp"
                          width={12}
                          height={12}
                        />
                      )}
                      {!sort && (
                        <IconWrapper
                          src="../assets/icon/globalIcons/sortArrows.svg"
                          title="Lọc"
                          width={12}
                          height={12}
                        />
                      )}
                    </div>
                  </th>
                );
              })}
            </tr>
          ))}
        </thead>
        <tbody>
          {data.length > 0 &&
            table.getRowModel().rows.map((row) => (
              <tr key={row.id} className="hover:bg-gray-50">
                {row.getVisibleCells().map((cell) => (
                  <td key={cell.id} className="px-4 py-2">
                    {flexRender(cell.column.columnDef.cell, cell.getContext())}
                  </td>
                ))}
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}
