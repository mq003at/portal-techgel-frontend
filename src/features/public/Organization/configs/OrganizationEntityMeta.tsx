export const OrganizationEntityMeta = [
  { key: 'divisionId', label: 'Division', prefix: 'K-' },
  { key: 'departmentId', label: 'Department', prefix: 'P-', parentType: 'divisionId' },
  { key: 'sectionId', label: 'Section', prefix: 'BP-', parentType: 'departmentId' },
  { key: 'unitId', label: 'Unit', prefix: 'B-', parentType: 'sectionId' },
  { key: 'teamId', label: 'Team', prefix: 'T-', parentType: 'unitId' },
];
