import { http, HttpResponse } from 'msw';
import { EmployeeMockData } from '../data/employeeData';
import { EmployeeDTO, CreateEmployeeDTO, UpdateEmployeeDTO } from '../DTOs/EmployeeDTO';
import { uiAvatar } from '../../../../components/misc/uiAvatar';
import { departmentsMockData, divisionsMockData, sectionMockData, teamMockData, unitMockData } from '../../../public/Organization/data/OrganizationEntityMockList';
import { OrganizationEntityDTO } from '../../../public/Organization/DTOs/OrganizationEntityDTO';


let employees = [...EmployeeMockData];
let allOrg = [...divisionsMockData, ...departmentsMockData, ...sectionMockData, ...unitMockData, ...teamMockData]

function getOrgInfoByLevel(level: number, allOrg: OrganizationEntityDTO[], employeeId: string) {
  const relatedIds = allOrg
    .filter((link) => link.level === level && link.employeeIds?.includes(employeeId))
    .map((link) => link.id);

  const names = allOrg
    .filter((org) => relatedIds.includes(org.id!))
    .map((org) => org.name);

  return { ids: relatedIds, names };
}

export const employeeListHandlers = [
  // 🟢 GET all employees
  http.get<never, null, EmployeeDTO[]>('/api/employees', async () => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    const enrichedEmployees = employees.map((employee) => {
      // 🔹 Divisions
      const { ids: relatedDivisionIds, names: divisionNames } = getOrgInfoByLevel(1, allOrg, employee.id);

      // 🔹 Departments
      const { ids: relatedDepartmentIds, names: departmentNames } = getOrgInfoByLevel(2, allOrg, employee.id);

      // 🔹 Sections
      const { ids: relatedSectionIds, names: sectionNames } = getOrgInfoByLevel(3, allOrg, employee.id);

      // 🔹 Units
      const { ids: relatedUnitIds, names: unitNames } = getOrgInfoByLevel(4, allOrg, employee.id);

      // 🔹 Teams
      const { ids: relatedTeamIds, names: teamNames } = getOrgInfoByLevel(5, allOrg, employee.id);

      return {
        ...employee,
        roleInfo: {
          ...employee.roleInfo,
          divisionNames: divisionNames,
          departmentNames: departmentNames,
          sectionNames: sectionNames,
          unitNames: unitNames,
          teamNames: teamNames,
        },
      };
    });

    return HttpResponse.json(enrichedEmployees, { status: 200 });
  }),

  // 🔵 GET employee by id
  http.get<{ id: string }, null, EmployeeDTO | { message: string }>(
    '/api/employees/:id',
    async ({ params }) => {

      await new Promise(resolve => setTimeout(resolve, 1000));

      const id = params.id;
      const employee = employees.find((e) => e.id === id);

      if (!employee) {
        return HttpResponse.json({ message: 'Employee not found' }, { status: 404 });
      }

      return HttpResponse.json(employee, { status: 200 });
    }
  ),

  // 🟡 POST create employee
  http.post<never, CreateEmployeeDTO, EmployeeDTO>('/api/employees', async ({ request }) => {
    await new Promise(resolve => setTimeout(resolve, 3000));

    const body = await request.json();

    const lastEmployee = employees[employees.length - 1];
    const nextId =
      lastEmployee && !isNaN(Number(lastEmployee.id))
        ? (Number(lastEmployee.id) + 1).toString()
        : '1';

    const { id, ...restBody } = body;

    const newEmployee: EmployeeDTO = {
      id: nextId,
      avatar: body.avatar ?? uiAvatar({ name: `${body.lastName} ${body.firstName}` }),
      ...restBody,
      mainId: `TG${nextId.toString().padStart(5, '0')}`,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),

      personalInfo: body.personalInfo ?? {},
      companyInfo: body.companyInfo ?? {},
      careerPathInfo: body.careerPathInfo ?? {},
      taxInfo: body.taxInfo ?? {},
      insuranceInfo: body.insuranceInfo ?? {},
      scheduleInfo: body.scheduleInfo ?? {},
      roleInfo: body.roleInfo ?? {},
    };

    employees.push(newEmployee);

    return HttpResponse.json(newEmployee, { status: 201 }); // ✅ FIXED
  }),

  http.put<{ id: string }, UpdateEmployeeDTO, EmployeeDTO | { message: string }>(
    '/api/employees/:id',
    async ({ request, params }) => {
      await new Promise(resolve => setTimeout(resolve, 3000));

      const id = params.id;
      const updates = await request.json();

      const index = employees.findIndex((e) => e.id === id);
      if (index === -1) {
        return HttpResponse.json({ message: 'Employee not found' }, { status: 404 });
      }

      const existing = employees[index];

      const updatedEmployee: EmployeeDTO = {
        ...existing,
        ...updates,
        id: existing.id, // prevent accidental overwrite
        mainId: existing.mainId, // protect business ID
        updatedAt: new Date().toISOString(),
      };

      employees[index] = updatedEmployee;

      return HttpResponse.json(updatedEmployee, { status: 200 });
    }
  ),

  // 🔴 DELETE employee
  http.delete<{ id: string }, null, null>('/api/employees/:id', ({ params }) => {
    const id = params.id;
    employees = employees.filter((e) => e.id !== id);
    return HttpResponse.json(null, { status: 204 });
  }),
];

