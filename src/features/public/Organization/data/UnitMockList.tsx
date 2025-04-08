import { UnitDTO } from '../DTOs/UnitDTO';
import { EmployeeUnit } from '../models/MTMOperationalOrganization';

export const unitMockData: UnitDTO[] = [
  {
    id: '1',
    name: 'Ban Pháp Chế',
    mainId: 'B_PHAPCHE',
    status: 'PENDING',

    sectionId: '1',
    teamIds: ['1'],
    createdAt: new Date().toISOString(),
    employeeIds: ['TG99998'],
  },
];

export const employeeUnitMockData: EmployeeUnit[] = [];
