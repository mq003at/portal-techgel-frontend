import { TableColumnDef } from '../types/tableTypes';
import { PersonalInfoDTO } from '../../DTOs/EmployeeDTO';
import { genderOptions, maritalStatusOptions } from '../../configs/employeeFieldOptions';
import { DateCell } from '../../../../public/Table/components/DateCell';
import { StatusCell } from '../../../../public/Table/components/StatusCell';

export const employeePersonalInfoListColumns: TableColumnDef<PersonalInfoDTO>[] = [
  {
    accessorKey: 'dateOfBirth',
    header: 'Ngày Sinh',
    enableSorting: true,
    cell: DateCell,
    sortingFn: (rowA, rowB, columnId) => {
      const dateA = new Date(rowA.getValue(columnId));
      const dateB = new Date(rowB.getValue(columnId));
      return dateA.getTime() - dateB.getTime();
    },
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
    accessorKey: 'gender',
    header: 'Giới tính',
    enableSorting: true,
    cell: (props) => (
      <StatusCell getValue={props.getValue} options={genderOptions} />
    ),
    filterFn: (row, columnId, filterValue) => {
      return row.getValue(columnId) === filterValue;
    },
    meta: {
      filterVariant: 'select',
      selectOptions: genderOptions,
    },
  },
  {
    accessorKey: 'maritalStatus',
    header: 'Hôn nhân',
    enableSorting: true,
    cell: (props) => (
      <StatusCell getValue={props.getValue} options={maritalStatusOptions} />
    ),
    filterFn: (row, columnId, filterValue) => {
      return row.getValue(columnId) === filterValue;
    },
    meta: {
      filterVariant: 'select',
      selectOptions: maritalStatusOptions,
    },
  },
  {
    accessorKey: 'birthPlace',
    header: 'Nơi sinh',
    enableSorting: true,
  },
  {
    accessorKey: 'ethnicGroup',
    header: 'Dân tộc',
    enableSorting: true,
  },
  {
    accessorKey: 'nationality',
    header: 'Quốc tịch',
    enableSorting: true,
  },
  {
    accessorKey: 'personalEmail',
    header: 'Email Cá nhân',
    enableSorting: true,
    cell: StatusCell
  },
  {
    accessorKey: 'personalPhoneNumber',
    header: 'Số đt cá nhân',
    enableSorting: true,
  },
  {
    accessorKey: 'address',
    header: 'Địa chỉ nhà',
    enableSorting: true,
  },
  {
    accessorKey: 'idCardNumber',
    header: 'CCCD / CMND',
    enableSorting: true,
  },
  {
    accessorKey: 'idCardIssueDate',
    header: 'Ngày Cấp',
    enableSorting: true,
    cell: DateCell,
    sortingFn: (rowA, rowB, columnId) => {
      const dateA = new Date(rowA.getValue(columnId));
      const dateB = new Date(rowB.getValue(columnId));
      return dateA.getTime() - dateB.getTime();
    },
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
    accessorKey: 'idCardExpiryDate',
    header: 'Ngày hết hạn',
    enableSorting: true,
    cell: DateCell,
    sortingFn: (rowA, rowB, columnId) => {
      const dateA = new Date(rowA.getValue(columnId));
      const dateB = new Date(rowB.getValue(columnId));
      return dateA.getTime() - dateB.getTime();
    },
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
