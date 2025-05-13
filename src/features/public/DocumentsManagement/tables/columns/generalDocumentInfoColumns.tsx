import { TableColumnDef } from "../../../../restricted/EmployeeList/tables/types/tableTypes";
import { StatusCell } from "../../../Table/components/StatusCell";
import { LinkCell } from "../../../Table/components/LinkCell";
import { documentCategoryOptions, documentStatusOptions, documentSubTypeOptions, documentTypeOptions } from "../../constants/DocumentTypeOptions";
import { GeneralDocumentInfo } from "../../DTOs/DocumentDTO";
import { Fragment } from "react/jsx-runtime";

export interface BasicDocumentInfo {
  id: string;
  mainId: string;
}

export const generalDocumentInfoColumns: TableColumnDef<GeneralDocumentInfo>[] = [
  {
    accessorKey: 'name',
    id: 'name',
    header: 'Tên',
    enableSorting: true,
  },
  {
    accessorKey: 'type',
    id: 'type',
    header: 'Kiểu',
    enableSorting: true,
    cell: (props) => (
      <StatusCell getValue={props.getValue} options={documentTypeOptions} />
    ),
    filterFn: (row, columnId, filterValue) => {
      return row.getValue(columnId) === filterValue;
    },
    meta: {
      filterVariant: 'select',
      selectOptions: documentTypeOptions,
    },
  },
  {
    accessorKey: 'status',
    id: 'status',
    header: 'Trạng thái',
    enableSorting: true,
    cell: (props) => (
      <StatusCell getValue={props.getValue} options={documentStatusOptions} />
    ),
    filterFn: (row, columnId, filterValue) => {
      return row.getValue(columnId) === filterValue;
    },
    meta: {
      filterVariant: 'select',
      selectOptions: documentStatusOptions,
    },
  },
  {
    accessorKey: 'subType',
    id: 'subType',
    header: 'Phụ đề',
    enableSorting: true,
    cell: (props) => (
      <StatusCell getValue={props.getValue} options={documentSubTypeOptions} />
    ),
    filterFn: (row, columnId, filterValue) => {
      return row.getValue(columnId) === filterValue;
    },
    meta: {
      filterVariant: 'select',
      selectOptions: documentSubTypeOptions,
    },
  },
  {
    accessorKey: 'category',
    id: 'category',
    header: 'Loại',
    enableSorting: true,
    cell: (props) => (
      <StatusCell getValue={props.getValue} options={documentCategoryOptions} />
    ),
    filterFn: (row, columnId, filterValue) => {
      return row.getValue(columnId) === filterValue;
    },
    meta: {
      filterVariant: 'select',
      selectOptions: documentCategoryOptions,
    },
  },
  {
    accessorKey: 'ownerId',
    id: 'ownerId',
    header: 'Mã người sở hữu',
    enableSorting: true,
  },
  {
    accessorKey: 'ownerName',
    id: 'ownerName',
    header: 'Tên người sở hữu',
    enableSorting: true,
  },
  {
    accessorKey: 'organizationResponsibleId',
    id: 'organizationResponsibleId',
    header: 'Mã đơn vị chịu trách nhiệm',
    enableSorting: true,
  },
  {
    accessorKey: 'organizationResponsibleName',
    id: 'organizationResponsibleName',
    header: 'Tên đơn vị chịu trách nhiệm',
    enableSorting: true,
  },
  {
    accessorKey: 'tag',
    id: 'tag',
    header: 'Tag',
    enableSorting: true,
    cell: ({ getValue: getTags }) => {
      const tags = getTags<string[]>() || [];

      return (
        <>
          {tags.map((tag, index) => (
            <Fragment key={`${tag}-${index}`}>
              <StatusCell getValue={() => tag} />
              &nbsp;
            </Fragment>
          ))}
        </>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      const tags = row.getValue<string[]>(columnId);
      return tags?.some(tag => tag.toLowerCase().includes(filterValue.toLowerCase()));
    },
  },
  {
    accessorKey: 'description',
    id: 'description',
    header: 'Mô tả',
    enableSorting: true,
  },
  {
    accessorKey: 'url',
    id: 'url',
    header: 'Đường dẫn',
    enableSorting: true,
    cell: LinkCell,
  },
  {
    accessorKey: 'version',
    id: 'version',
    header: 'Phiên bản',
    enableSorting: true,
  },
];
