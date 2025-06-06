import { ColumnDef } from '@tanstack/react-table';
import { OrgEntity } from '../types/OrganizationTypes';
import { OrganizationEntityTypes, OrganizationStatusOptions } from './OrganizationModelOptions';
import {BadgeWrapper} from '../../../../components/Wrapper/BadgeWrapper';

export const organizationTableColumns: ColumnDef<OrgEntity>[] = [
  {
    header: 'Tên đơn vị',
    accessorKey: 'name',
    cell: (info) => <span>{info.getValue() as string}</span>,
  },
  {
    header: 'Mã đơn vị',
    accessorKey: 'mainId',
    cell: (info) => <span>{info.getValue() as string}</span>,
  },
  {
    header: 'Cấp tổ chức',
    accessorFn: (row) => {
      const type = OrganizationEntityTypes.find((t) => t.key in row);
      return type ? type.label : 'Division';
    },
    cell: (info) => {
      const row = info.row.original;
      const type = OrganizationEntityTypes.find((t) => t.key in row);
      return <BadgeWrapper label={type?.label ?? 'Khối'} color={type?.color}></BadgeWrapper>;
    },
  },
  {
    header: 'Trạng thái',
    accessorKey: 'status',
    cell: (info) => {
      const status = OrganizationStatusOptions.find((s) => s.value === info.getValue());
      return <BadgeWrapper label={status?.label ?? 'grey'} color={status?.color}></BadgeWrapper>;
    },
  },
  {
    header: 'Mô tả',
    accessorKey: 'description',
    cell: (info) => <span>{info.getValue() as string}</span>,
  },
];
