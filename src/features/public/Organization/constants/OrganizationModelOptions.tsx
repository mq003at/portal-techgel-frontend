export enum OrganizationStatusEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  TERMINATED = 'TERMINATED',
}

export const OrganizationStatusOptions = [
  { value: OrganizationStatusEnum.ACTIVE, label: 'Đang hoạt động', color: 'success' },
  { value: OrganizationStatusEnum.INACTIVE, label: 'Không hoạt động', color: 'neutral' },
  { value: OrganizationStatusEnum.PENDING, label: 'Đang thiết lập', color: 'warning' },
  { value: OrganizationStatusEnum.TERMINATED, label: 'Chấm dứt', color: 'error' },
];

export type OrganizationStatus = keyof typeof OrganizationStatusEnum;

export const OrganizationEntityTypes = [
  { key: 'unitId', label: 'Tổ', color: 'blue' },
  { key: 'sectionId', label: 'Ban', color: 'brown' },
  { key: 'departmentId', label: 'Bộ Phận', color: 'pink' },
  { key: 'divisionId', label: 'Phòng', color: 'red' },
];

export const DefaultEntityType = 'Khối';
