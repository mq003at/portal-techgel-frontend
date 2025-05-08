export interface OrganizationTypeOption {
  level: number;
  key: string; // Simple key for identification (e.g., 'division', 'department')
  label: string; // Display label (Vietnamese)
  prefix: string; // Prefix for mainId
  parentLabel?: string; // Display label for the parent type (Vietnamese)
}

export const OrganizationEntityMeta: OrganizationTypeOption[] = [
  { level: 0, key: 'company', label: 'Công ty', prefix: 'CT_' },
  { level: 1, key: 'division', label: 'Khối', prefix: 'K_', parentLabel: 'Công ty' },
  { level: 2, key: 'department', label: 'Phòng', prefix: 'P_', parentLabel: 'Khối' },
  { level: 3, key: 'section', label: 'Bộ phận', prefix: 'BP_', parentLabel: 'Phòng' },
  { level: 4, key: 'unit', label: 'Ban', prefix: 'B_', parentLabel: 'Bộ phận' },
  { level: 5, key: 'team', label: 'Nhóm', prefix: 'T_', parentLabel: 'Ban' },
  // Add more levels here if needed
];

// Helper function to get meta by level
export const getMetaByLevel = (level: number): OrganizationTypeOption | undefined => {
  return OrganizationEntityMeta.find((meta) => meta.level === level);
};
