import { Fragment } from "react/jsx-runtime";
import { TableColumnDef } from "../../../../restricted/EmployeeList/tables/types/tableTypes";
import { StatusCell } from "../../../Table/components/StatusCell";
import { documentConfidentialityLevelOptions } from "../../constants/DocumentTypeOptions";
import { SecurityInfo } from "../../DTOs/DocumentDTO";

export const securityInfoColumns: TableColumnDef<SecurityInfo>[] = [
  {
    accessorKey: 'confidentialityReadLevel',
    id: 'confidentialityReadLevel',
    header: 'Mức độ đọc',
    enableSorting: true,
    cell: (props) => (
      <StatusCell getValue={props.getValue} options={documentConfidentialityLevelOptions} />
    ),
    filterFn: (row, columnId, filterValue) => row.getValue(columnId) === filterValue,
    meta: {
      filterVariant: 'select',
      selectOptions: documentConfidentialityLevelOptions,
    },
  },
  {
    accessorKey: 'confidentialityWriteLevel',
    id: 'confidentialityWriteLevel',
    header: 'Mức độ ghi',
    enableSorting: true,
    cell: (props) => (
      <StatusCell getValue={props.getValue} options={documentConfidentialityLevelOptions} />
    ),
    filterFn: (row, columnId, filterValue) => row.getValue(columnId) === filterValue,
    meta: {
      filterVariant: 'select',
      selectOptions: documentConfidentialityLevelOptions,
    },
  },
  {
    accessorKey: 'confidentialityVisibilityLevel',
    id: 'confidentialityVisibilityLevel',
    header: 'Mức độ hiển thị',
    enableSorting: true,
    cell: (props) => (
      <StatusCell getValue={props.getValue} options={documentConfidentialityLevelOptions} />
    ),
    filterFn: (row, columnId, filterValue) => row.getValue(columnId) === filterValue,
    meta: {
      filterVariant: 'select',
      selectOptions: documentConfidentialityLevelOptions,
    },
  },
  {
    accessorKey: 'confidentialityStatusChangeLevel',
    id: 'confidentialityStatusChangeLevel',
    header: 'Mức độ thay đổi trạng thái',
    enableSorting: true,
    cell: (props) => (
      <StatusCell getValue={props.getValue} options={documentConfidentialityLevelOptions} />
    ),
    filterFn: (row, columnId, filterValue) => row.getValue(columnId) === filterValue,
    meta: {
      filterVariant: 'select',
      selectOptions: documentConfidentialityLevelOptions,
    },
  },
  {
    accessorKey: 'confidentialityReadIds',
    id: 'confidentialityReadIds',
    header: 'Mã người được xem',
    enableSorting: true,
    cell: ({ getValue }) => {
      const values = getValue<string[]>() || [];
      return (
        <>
          {values.map((value, index) => (
            <Fragment key={`${value}-${index}`}>
              <StatusCell getValue={() => value} />
              &nbsp;
            </Fragment>
          ))}
        </>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      const values = row.getValue<string[]>(columnId);
      return values?.some(value => value.toLowerCase().includes(filterValue.toLowerCase()));
    },
  },
  {
    accessorKey: 'confidentialityWriteIds',
    id: 'confidentialityWriteIds',
    header: 'Mã người được ghi',
    enableSorting: true,
    cell: ({ getValue }) => {
      const values = getValue<string[]>() || [];
      return (
        <>
          {values.map((value, index) => (
            <Fragment key={`${value}-${index}`}>
              <StatusCell getValue={() => value} />
              &nbsp;
            </Fragment>
          ))}
        </>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      const values = row.getValue<string[]>(columnId);
      return values?.some(value => value.toLowerCase().includes(filterValue.toLowerCase()));
    },
  },
  {
    accessorKey: 'confidentialityVisibilityIds',
    id: 'confidentialityVisibilityIds',
    header: 'Mã người được hiển thị',
    enableSorting: true,
    cell: ({ getValue }) => {
      const values = getValue<string[]>() || [];
      return (
        <>
          {values.map((value, index) => (
            <Fragment key={`${value}-${index}`}>
              <StatusCell getValue={() => value} />
              &nbsp;
            </Fragment>
          ))}
        </>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      const values = row.getValue<string[]>(columnId);
      return values?.some(value => value.toLowerCase().includes(filterValue.toLowerCase()));
    },
  },
  {
    accessorKey: 'confidentialityStatusChangeIds',
    id: 'confidentialityStatusChangeIds',
    header: 'Mã người được thay đổi trạng thái',
    enableSorting: true,
    cell: ({ getValue }) => {
      const values = getValue<string[]>() || [];
      return (
        <>
          {values.map((value, index) => (
            <Fragment key={`${value}-${index}`}>
              <StatusCell getValue={() => value} />
              &nbsp;
            </Fragment>
          ))}
        </>
      );
    },
    filterFn: (row, columnId, filterValue) => {
      const values = row.getValue<string[]>(columnId);
      return values?.some(value => value.toLowerCase().includes(filterValue.toLowerCase()));
    },
  }
];
