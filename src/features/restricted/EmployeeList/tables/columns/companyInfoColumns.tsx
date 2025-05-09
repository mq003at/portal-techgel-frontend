import { TableColumnDef } from '../types/tableTypes';
import { CompanyInfoDTO } from '../../DTOs/EmployeeDTO';
import { employmentStatusOptions } from '../../configs/employeeFieldOptions';
import { StatusCell } from '../../../../public/Table/components/StatusCell';
import { DateCell } from '../../../../public/Table/components/DateCell';

export const employeeCompanyInfoColumns: TableColumnDef<CompanyInfoDTO>[] = [
  { 
    accessorKey: 'companyEmail', 
    header: 'Email công ty', 
    enableSorting: true,
    cell: StatusCell
  },
  { 
    accessorKey: 'companyPhoneNumber',
    header: 'SĐT công ty', 
    enableSorting: true 
  },
  {
    accessorKey: 'employmentStatus',
    header: 'Trạng thái',
    enableSorting: true,
    cell: (props) => (
      <StatusCell getValue={props.getValue} options={employmentStatusOptions} />
    ),
    filterFn: (row, columnId, filterValue) => {
      return row.getValue(columnId) === filterValue;
    },
    meta: {
      filterVariant: 'select',
      selectOptions: employmentStatusOptions,
    },
  },
  { accessorKey: 'position', header: 'Vị trí', enableSorting: true },
  {
    accessorKey: 'startDate',
    header: 'Ngày bắt đầu',
    enableSorting: true,
    cell: DateCell,
    meta: {
      filterVariant: 'range',
      isDateRange: true
    },
    filterFn: (row, columnId, filterValue: [string?, string?]) => {
      if( !row.getValue(columnId)) return true;

      const toDate = (val: string | number | Date): number =>
        typeof val === 'string' || typeof val === 'number'
          ? new Date(val).getTime()
          : val.getTime();

      const rowDate = toDate(row.getValue(columnId));
      const [min, max] = filterValue;

      const minDate = min ? toDate(min) : -Infinity;
      const maxDate = max ? toDate(max) : Infinity;

      return rowDate >= minDate && rowDate <= maxDate;
    },
  },
  {
    accessorKey: 'endDate',
    header: 'Ngày kết thúc',
    enableSorting: true,
    cell: DateCell,
    meta: {
      filterVariant: 'range',
      isDateRange: true
    },
    filterFn: (row, columnId, filterValue: [string?, string?]) => {
      if( !row.getValue(columnId)) return true;

      const toDate = (val: string | number | Date): number =>
        typeof val === 'string' || typeof val === 'number'
          ? new Date(val).getTime()
          : val.getTime();

      const rowDate = toDate(row.getValue(columnId));
      const [min, max] = filterValue;

      const minDate = min ? toDate(min) : -Infinity;
      const maxDate = max ? toDate(max) : Infinity;

      return rowDate >= minDate && rowDate <= maxDate;
    },
  },
  {
    accessorKey: 'probationStartDate',
    header: 'Bắt đầu thử việc',
    enableSorting: true,
    cell: DateCell,
    meta: {
      filterVariant: 'range',
      isDateRange: true
    },
    filterFn: (row, columnId, filterValue: [string?, string?]) => {
      if( !row.getValue(columnId)) return true;

      const toDate = (val: string | number | Date): number =>
        typeof val === 'string' || typeof val === 'number'
          ? new Date(val).getTime()
          : val.getTime();

      const rowDate = toDate(row.getValue(columnId));
      const [min, max] = filterValue;

      const minDate = min ? toDate(min) : -Infinity;
      const maxDate = max ? toDate(max) : Infinity;

      return rowDate >= minDate && rowDate <= maxDate;
    },
  },
  {
    accessorKey: 'probationEndDate',
    header: 'Kết thúc thử việc',
    enableSorting: true,
    cell: DateCell,
    meta: {
      filterVariant: 'range',
      isDateRange: true
    },
    filterFn: (row, columnId, filterValue: [string?, string?]) => {
      if( !row.getValue(columnId)) return true;

      const toDate = (val: string | number | Date): number =>
        typeof val === 'string' || typeof val === 'number'
          ? new Date(val).getTime()
          : val.getTime();

      const rowDate = toDate(row.getValue(columnId));
      const [min, max] = filterValue;

      const minDate = min ? toDate(min) : -Infinity;
      const maxDate = max ? toDate(max) : Infinity;

      return rowDate >= minDate && rowDate <= maxDate;
    },
  },
];
