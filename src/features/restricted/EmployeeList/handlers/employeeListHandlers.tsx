import { http, HttpResponse } from 'msw';
import { EmployeeMockData } from '../data/employeeData';
import { EmployeeDTO, CreateEmployeeDTO, UpdateEmployeeDTO } from '../DTOs/EmployeeDTO';
import { uiAvatar } from '../../../../components/misc/uiAvatar';
import {
  divisionsMockData,
  employeeDivisionMockData,
} from '../../../public/Organization/data/DivisionMockList';
import {
  departmentMockData,
  employeeDepartmentMockData,
} from '../../../public/Organization/data/DepartmentMockList';
import {
  employeeSectionMockData,
  sectionMockData,
} from '../../../public/Organization/data/SectionMockList';
import { employeeTeamMockData, teamMockData } from '../../../public/Organization/data/TeamMockList';
import { employeeUnitMockData, unitMockData } from '../../../public/Organization/data/UnitMockList';

let employees = [...EmployeeMockData];
let employeeDivisions = [...employeeDivisionMockData];
let employeeDepartments = [...employeeDepartmentMockData];
let employeeSections = [...employeeSectionMockData];
let employeeUnits = [...employeeUnitMockData];
let employeeTeams = [...employeeTeamMockData];

let divisions = [...divisionsMockData];
let departments = [...departmentMockData];
let sections = [...sectionMockData];
let units = [...unitMockData];
let teams = [...teamMockData];

export const employeeListHandlers = [
  // 🟢 GET all employees
  http.get<never, null, EmployeeDTO[]>('/api/employees', () => {
    const enrichedEmployees = employees.map((employee) => {
      // 🔹 Divisions
      const relatedDivisionIds = employeeDivisions
        .filter((link) => link.employeeId === employee.id)
        .map((link) => link.divisionId);
      const divisionNames = divisions
        .filter((d) => relatedDivisionIds.includes(d.id!))
        .map((d) => d.name);

      // 🔹 Departments
      const relatedDepartmentIds = employeeDepartments
        .filter((link) => link.employeeId === employee.id)
        .map((link) => link.departmentId);

      const departmentNames = departments
        .filter((d) => relatedDepartmentIds.includes(d.id!))
        .map((d) => d.name);

      // 🔹 Sections
      const relatedSectionIds = employeeSections
        .filter((link) => link.employeeId === employee.id)
        .map((link) => link.sectionId);

      const sectionNames = sections
        .filter((s) => relatedSectionIds.includes(s.id!))
        .map((s) => s.name);

      // 🔹 Units
      const relatedUnitIds = employeeUnits
        .filter((link) => link.employeeId === employee.id)
        .map((link) => link.unitId);

      const unitNames = units.filter((u) => relatedUnitIds.includes(u.id!)).map((u) => u.name);

      // 🔹 Teams
      const relatedTeamIds = employeeTeams
        .filter((link) => link.employeeId === employee.id)
        .map((link) => link.teamId);

      const teamNames = teams.filter((t) => relatedTeamIds.includes(t.id!)).map((t) => t.name);

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
    ({ params }) => {
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
    const body = await request.json();

    const lastEmployee = employees[employees.length - 1];
    const nextId =
      lastEmployee && !isNaN(Number(lastEmployee.id))
        ? (Number(lastEmployee.id) + 1).toString()
        : '1';

    const { id, ...restBody } = body;

    const newEmployee: EmployeeDTO = {
      id: nextId,
      mainId: `TG${nextId.toString().padStart(5, '0')}`,
      avatar: body.avatar ?? uiAvatar({ name: `${body.lastName} ${body.firstName}` }),
      ...restBody,
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
