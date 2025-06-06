import { EmployeeDTO, CreateEmployeeDTO, UpdateEmployeeDTO } from '../DTOs/EmployeeDTO';
import { OrganizationEntityDTO } from '../../../public/Organization/DTOs/OrganizationEntityDTO';
import { uiAvatar } from '../../../../components/misc/uiAvatar';
import { departmentsMockData, divisionsMockData, sectionMockData, teamMockData, unitMockData } from '../../../public/Organization/data/OrganizationEntityMockList';

function getOrgInfoByLevel(level: number, allOrg: OrganizationEntityDTO[], employeeId: string) {
  const relatedIds = allOrg
    .filter((link) => link.level === level && link.employeeIds?.includes(employeeId))
    .map((link) => link.id);

  const names = allOrg
    .filter((org) => relatedIds.includes(org.id!))
    .map((org) => org.name);

  return { ids: relatedIds, names };
}

let allOrg = [...divisionsMockData, ...departmentsMockData, ...sectionMockData, ...unitMockData, ...teamMockData]

export async function fetchEmployees(): Promise<EmployeeDTO[]> {
  const res = await fetch('https://localhost:5001/api/employees');
  if (!res.ok) throw new Error('Failed to fetch employees');
  const employees: EmployeeDTO[] = await res.json();
  console.log(employees);

  return employees.map((employee) => {
    const { names: divisionNames } = getOrgInfoByLevel(1, allOrg, employee.id);
    const { names: departmentNames } = getOrgInfoByLevel(2, allOrg, employee.id);
    const { names: sectionNames } = getOrgInfoByLevel(3, allOrg, employee.id);
    const { names: unitNames } = getOrgInfoByLevel(4, allOrg, employee.id);
    const { names: teamNames } = getOrgInfoByLevel(5, allOrg, employee.id);

    return {
      ...employee,
      roleInfo: {
        ...employee.roleInfo,
        divisionNames,
        departmentNames,
        sectionNames,
        unitNames,
        teamNames,
      },
    };
  });
}

export async function fetchEmployeeById(id: string): Promise<EmployeeDTO> {
  const res = await fetch(`https://localhost:5001/api/employees/${id}`);
  if (!res.ok) throw new Error('Employee not found');
  return await res.json();
}

export async function createEmployee(data: CreateEmployeeDTO): Promise<EmployeeDTO> {
  const body: CreateEmployeeDTO = {
    ...data,
    avatar: data.avatar ?? uiAvatar({ name: `${data.lastName} ${data.firstName}` }),
  };

  const res = await fetch('/api/employees', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(body),
  });

  if (!res.ok) throw new Error('Failed to create employee');
  return await res.json();
}

export async function updateEmployee(id: string, updates: UpdateEmployeeDTO): Promise<EmployeeDTO> {
  const res = await fetch(`/api/employees/${id}`, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(updates),
  });

  if (!res.ok) throw new Error('Failed to update employee');
  return await res.json();
}

export async function deleteEmployee(id: string): Promise<void> {
  const res = await fetch(`/api/employees/${id}`, {
    method: 'DELETE',
  });

  if (!res.ok) throw new Error('Failed to delete employee');
}
