import { TeamDTO } from '../DTOs/TeamDTO';
import { EmployeeTeam } from '../models/MTMOperationalOrganization';

export const teamMockData: TeamDTO[] = [
  {
    id: '1',
    name: 'Tổ 1',
    mainId: 'T_1',
    status: 'PENDING',
    description: 'Mẫu Tổ. Người quản lý là Quân, bao gồm 2 thành viên là 1 và 3.',

    unitId: '1',
    managerId: '3',
    createdAt: new Date().toISOString(),
    employeeIds: ['1', '3'],
  },
];

export const employeeTeamMockData: EmployeeTeam[] = [];
