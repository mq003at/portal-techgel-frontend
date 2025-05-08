export enum OrganizationStatusEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  PENDING = 'PENDING',
  TERMINATED = 'TERMINATED',
}

export type OrganizationStatus = keyof typeof OrganizationStatusEnum;

// Define a structure that maps each status directly to its label and color
export const OrganizationStatusOptions: Record<OrganizationStatus, { color: string }> = {
  [OrganizationStatusEnum.ACTIVE]: { color: 'success' },
  [OrganizationStatusEnum.INACTIVE]: { color: 'neutral' },
  [OrganizationStatusEnum.PENDING]: { color: 'warning' },
  [OrganizationStatusEnum.TERMINATED]: { color: 'error' },
};

export const OrganizationLevelOptions: Record<number, { key: string }> = {
  0: { key: 'organization.level.company' }, // i18n key
  1: { key: 'organization.level.division' }, // i18n key
  2: { key: 'organization.level.department' }, // i18n key
  3: { key: 'organization.level.section' }, // i18n key
  4: { key: 'organization.level.unit' }, // i18n key
  5: { key: 'organization.level.team' }, // i18n key
};
