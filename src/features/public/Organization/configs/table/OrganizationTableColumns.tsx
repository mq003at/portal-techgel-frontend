// import StatusCell from '../../../../../components/table/StatusCell';
// import { TableColumnConfig } from '../../../../../components/table/TableColumnConfig';
// import { OrganizationEntitySummaryDTO } from '../../DTOs/OrganizationEntityDTO';
// import { OrganizationLevelOptions } from '../OrganizationModelOptions';

// export const OrganizationInfo: TableColumnConfig<OrganizationEntitySummaryDTO> = {
//   name: { ns: 'organization' },
//   mainId: { ns: 'organization' },
//   level: {
//     labelKey: 'level',
//     ns: 'organization',
//     cell: (info) => {
//       const level = info.getValue() as number; // Ensure getValue() returns a number
//       const levelOption = OrganizationLevelOptions[level];
//       const levelLabel = levelOption ? t(levelOption.key) : `Cấp ${level}`; // Use i18n key, fallback
//       return <span>{levelLabel}</span>;
//     },
//   },
//   status: {
//     ns: 'organization',
//     cell: StatusCell,
//     statusMapping: {
//       ACTIVE: 'badge-success',
//       INACTIVE: 'badge-error',
//       PENDING: 'badge-warning',
//       TERMINATED: 'badge-info',
//     } as Record<OrganizationEntitySummaryDTO['status'], string>,
//   },
//   email: {
//     ns: 'organization',
//     cell: (info) => <a href={`mailto:${info.getValue()}`}>{info.getValue()}</a>,
//   },
// };
