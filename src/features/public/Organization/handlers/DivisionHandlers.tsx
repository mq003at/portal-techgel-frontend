import { http, HttpResponse } from 'msw';
import { divisionsMockData } from '../data/DivisionMockList';
import { DivisionDTO, CreateDivisionDTO, UpdateDivisionDTO } from '../DTOs/DivisionDTO';
import { v4 as uuid } from 'uuid';
import { departmentMockData } from '../data/DepartmentMockList';
import { unitMockData } from '../data/UnitMockList';
import { sectionMockData } from '../data/SectionMockList';
import { teamMockData } from '../data/TeamMockList';
import { EmployeeMockData } from '../../../restricted/EmployeeList/data/employeeData';

let divisions = [...divisionsMockData];
let departments = [...departmentMockData];
let sections = [...sectionMockData];
let units = [...unitMockData];
let teams = [...teamMockData];

let employees = [...EmployeeMockData];

export const divisionHandlers = [
  // 🟢 GET all divisions
  http.get<never, null, DivisionDTO[]>('/api/divisions', () => {
    const enrichedDivisions = divisions.map((division) => {
      if (division.managerId) {
        const divManager = employees.find((e) => e.id === division.managerId);
        division.managerName = divManager
          ? `${divManager.lastName} ${divManager.middleName} ${divManager.firstName}`
          : undefined;
      }
      const relatedDepartments = departments
        .filter((d) => d.divisionId === division.id)
        .map((department) => {
          if (department.managerId) {
            const depManager = employees.find((e) => e.id === department.managerId);
            department.managerName = depManager
              ? `${depManager.lastName} ${depManager.middleName} ${depManager.firstName}`
              : undefined;
          }
          const relatedSections = sections
            .filter((s) => s.departmentId === department.id)
            .map((section) => {
              if (section.managerId) {
                const secManager = employees.find((e) => e.id === section.managerId);
                section.managerName = secManager
                  ? `${secManager.lastName} ${secManager.middleName} ${secManager.firstName}`
                  : undefined;
              }
              const relatedUnits = units
                .filter((u) => u.sectionId === section.id)
                .map((unit) => {
                  if (unit.managerId) {
                    const unitManager = employees.find((e) => e.id === unit.managerId);
                    unit.managerName = unitManager
                      ? `${unitManager.lastName} ${unitManager?.middleName} ${unitManager.firstName}`
                      : undefined;
                  }
                  const relatedTeams = teams
                    .filter((t) => t.unitId === unit.id)
                    .map((team) => {
                      const manager = employees.find((e) => e.id === team.managerId);
                      return {
                        ...team,
                        managerName: manager
                          ? `${manager.lastName} ${manager.middleName} ${manager.firstName}`
                          : undefined,
                      };
                    });
                  return {
                    ...unit,
                    teams: relatedTeams,
                    teamIds: relatedTeams
                      .map((t) => t.id)
                      .filter((id): id is string => typeof id === 'string'),
                  };
                });

              return {
                ...section,
                units: relatedUnits,
                unitIds: relatedUnits
                  .map((u) => u.id)
                  .filter((id): id is string => typeof id === 'string'),
              };
            });

          return {
            ...department,
            sections: relatedSections,
            sectionIds: relatedSections
              .map((s) => s.id)
              .filter((id): id is string => typeof id === 'string'),
          };
        });

      return {
        ...division,
        departments: relatedDepartments,
        departmentIds: relatedDepartments
          .map((d) => d.id)
          .filter((id): id is string => typeof id === 'string'),
      };
    });

    return HttpResponse.json(enrichedDivisions, { status: 200 });
  }),

  // 🔵 GET division by id
  http.get<{ id: string }, null, DivisionDTO | { message: string }>(
    '/api/divisions/:id',
    ({ params }) => {
      const division = divisions.find((d) => d.id === params.id);
      if (!division) {
        return HttpResponse.json({ message: 'Division not found' }, { status: 404 });
      }
      return HttpResponse.json(division, { status: 200 });
    }
  ),

  // 🟡 POST new division
  http.post<never, CreateDivisionDTO, DivisionDTO>('/api/divisions', async ({ request }) => {
    const body = await request.json();
    const newDivision: DivisionDTO = {
      id: uuid(),
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      name: body.name,
      mainId: body.mainId,
      status: 'INACTIVE',
      employeeIds: body.employeeIds || [],
      departmentIds: [],
    };
    divisions.push(newDivision);
    return HttpResponse.json(newDivision, { status: 201 });
  }),

  // 🟠 PUT update division
  http.put<{ id: string }, UpdateDivisionDTO, DivisionDTO | { message: string }>(
    '/api/divisions/:id',
    async ({ params, request }) => {
      const body = await request.json();
      const division = divisions.find((d) => d.id === params.id);
      if (!division) {
        return HttpResponse.json({ message: 'Division not found' }, { status: 404 });
      }

      if (body.name !== undefined) division.name = body.name;
      if (body.mainId !== undefined) division.mainId = body.mainId;
      if (body.employeeIds !== undefined) division.employeeIds = body.employeeIds;
      if (body.managerId !== undefined) division.managerId = body.managerId;
      division.updatedAt = new Date().toISOString();

      return HttpResponse.json(division, { status: 200 });
    }
  ),

  // 🔴 DELETE division
  http.delete<{ id: string }, null, { message: string }>('/api/divisions/:id', ({ params }) => {
    const index = divisions.findIndex((d) => d.id === params.id);
    if (index === -1) {
      return HttpResponse.json({ message: 'Division not found' }, { status: 404 });
    }
    divisions.splice(index, 1);
    return HttpResponse.json({ message: 'Division deleted' }, { status: 200 });
  }),
];
