import { DivisionDTO } from '../DTOs/DivisionDTO';
import { EmployeeDivision } from '../models/MTMOperationalOrganization';

export const divisionsMockData: DivisionDTO[] = [
  {
    id: '1',
    name: 'Khối Dự Án',
    status: 'ACTIVE',
    mainId: 'K_DUAN',
    createdAt: new Date().toISOString(),
    departmentIds: ['1', '2'],
    managerId: '1',
    description:
      'Testing cho Khối Dự Án. Chạy chính xác sẽ bao gồm P.Mua Hàng và QA/QC. Người quản lý là TG99999 (DB ID là 1).',
  },
  {
    id: '2',
    name: 'Khối Tài Chính Kế Toán',
    mainId: 'K_TCKT',
    status: 'TERMINATED',
    createdAt: new Date().toISOString(),
  },
  {
    id: '3',
    name: 'Khối Công Nghệ',
    mainId: 'K_CNGHE',
    status: 'INACTIVE',

    createdAt: new Date().toISOString(),
    managerId: '2',
    departmentIds: ['3', '4', '5'],
  },
  {
    id: '4',
    name: 'Khối Hành Chính',
    mainId: 'K_HCHINH',
    status: 'PENDING',

    createdAt: new Date().toISOString(),
    managerId: '1',
    departmentIds: ['6'],
  },
];

export const employeeDivisionMockData: EmployeeDivision[] = [
  {
    id: '1',
    employeeId: '1',
    divisionId: '1',
  },
  {
    id: '2',
    employeeId: '1',
    divisionId: '3',
  },
  {
    id: '3',
    employeeId: '3',
    divisionId: '3',
  },
];
