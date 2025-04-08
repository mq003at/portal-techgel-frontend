import { DepartmentDTO } from '../DTOs/DepartmentDTO';
import { EmployeeDepartment } from '../models/MTMOperationalOrganization';

export const departmentMockData: DepartmentDTO[] = [
  {
    id: '1',
    name: 'Phòng Mua Hàng',
    mainId: 'P_MUAHANG',
    status: 'ACTIVE',

    divisionId: '1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sectionIds: ['K_KIEMDINH', 'K_NCC'],
    employeeIds: ['1'],
  },
  {
    id: '2',
    name: 'Phòng QA/QC',
    mainId: 'P_QAQC',
    status: 'ACTIVE',

    divisionId: '1',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    employeeIds: [],
  },
  {
    id: '3',
    name: 'Phòng Công Nghệ Thông Tin',
    mainId: 'P_CNTT',
    status: 'ACTIVE',

    divisionId: '3',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    sectionIds: ['K_DATA', 'K_PHANMEM'],
    employeeIds: ['TG00002'],
  },
  {
    id: '4',
    name: 'Phòng Quản Trị',
    mainId: 'P_QUANTRI',
    status: 'ACTIVE',

    divisionId: '3',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    employeeIds: ['TG00003'],
  },
  {
    id: '5',
    name: 'Phòng An Ninh',
    mainId: 'P_ANNINH',
    status: 'ACTIVE',

    divisionId: '3',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    employeeIds: [],
  },
  {
    id: '6',
    name: 'Phòng Quản Lí Cục Bộ',
    mainId: 'P_QLCB',
    status: 'PENDING',

    divisionId: '4',
    createdAt: new Date().toISOString(),
    updatedAt: new Date().toISOString(),
    employeeIds: [],
  },
];

export const employeeDepartmentMockData: EmployeeDepartment[] = [
  {
    id: '1',
    employeeId: '1',
    departmentId: '1',
  },
  {
    id: '2',
    employeeId: '1',
    departmentId: '2',
  },
  {
    id: '3',
    employeeId: '2',
    departmentId: '3',
  },
  {
    id: '4',
    employeeId: '3',
    departmentId: '4',
    createdAt: new Date().toISOString(),
  },
];
