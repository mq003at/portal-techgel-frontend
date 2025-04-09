import { http, HttpResponse } from 'msw';
import { departmentMockData, employeeDepartmentMockData } from '../data/DepartmentMockList';
import { DepartmentDTO, CreateDepartmentDTO, UpdateDepartmentDTO } from '../DTOs/DepartmentDTO';
import { v4 as uuid } from 'uuid';

const departments = [...departmentMockData];
const employeeDepartments = [...employeeDepartmentMockData];

export const departmentHandlers = [
  // 🟢 GET all departments
  http.get<never, null, DepartmentDTO[]>('/api/departments', () => {
    const enrichedDepartments: DepartmentDTO[] = departments.map((department) => {
      const related = employeeDepartments.filter((ed) => ed.departmentId === department.id);
      return {
        ...department,
        employeeIds: related.map((r) => r.employeeId),
        employees: related,
      };
    });

    return HttpResponse.json(enrichedDepartments, { status: 200 });
  }),

  // 🔵 GET department by ID
  http.get<{ id: string }, null, DepartmentDTO | { message: string }>(
    '/api/departments/:id',
    ({ params }) => {
      const department = departments.find((d) => d.id === params.id);
      if (!department) {
        return HttpResponse.json({ message: 'Department not found' }, { status: 404 });
      }

      const related = employeeDepartments.filter((ed) => ed.departmentId === params.id);

      return HttpResponse.json(
        {
          ...department,
          employeeIds: related.map((r) => r.employeeId),
          employees: related,
        },
        { status: 200 }
      );
    }
  ),

  // 🟡 CREATE department
  http.post<never, CreateDepartmentDTO, DepartmentDTO>('/api/departments', async ({ request }) => {
    const body = await request.json();

    const newDepartment: DepartmentDTO = {
      id: uuid(),
      status: 'INACTIVE',
      name: body.name,
      mainId: body.mainId,
      divisionId: body.divisionId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      sectionIds: [],
      employeeIds: body.employeeIds || [],
    };

    departments.push(newDepartment);

    // Optional: also push to employeeDepartments
    if (body.employeeIds) {
      body.employeeIds.forEach((empId) => {
        employeeDepartments.push({
          id: uuid(),
          employeeId: empId,
          departmentId: '1',
          createdAt: new Date().toISOString(),
        });
      });
    }

    return HttpResponse.json(newDepartment, { status: 201 });
  }),

  // 🟠 UPDATE department
  http.put<{ id: string }, UpdateDepartmentDTO, DepartmentDTO | { message: string }>(
    '/api/departments/:id',
    async ({ params, request }) => {
      const body = await request.json();
      const department = departments.find((d) => d.id === params.id);
      if (!department) {
        return HttpResponse.json({ message: 'Department not found' }, { status: 404 });
      }

      if (body.name !== undefined) department.name = body.name;
      if (body.mainId !== undefined) department.mainId = body.mainId;
      if (body.managerId !== undefined) department.managerId = body.managerId;
      department.updatedAt = new Date().toISOString();

      // Replace employee assignments
      if (body.employeeIds !== undefined) {
        // Remove old entries
        const indexToRemove = employeeDepartments.filter((ed) => ed.departmentId === department.id);
        indexToRemove.forEach((entry) => {
          const i = employeeDepartments.indexOf(entry);
          if (i !== -1) employeeDepartments.splice(i, 1);
        });

        // Add new entries
        body.employeeIds.forEach((empId) => {
          employeeDepartments.push({
            id: uuid(),
            employeeId: empId,
            departmentId: '1',
            createdAt: new Date().toISOString(),
          });
        });
      }

      const related = employeeDepartments.filter((ed) => ed.departmentId === department.id);

      return HttpResponse.json(
        {
          ...department,
          employeeIds: related.map((r) => r.employeeId),
          employees: related,
        },
        { status: 200 }
      );
    }
  ),

  // 🔴 DELETE department
  http.delete<{ id: string }, null, { message: string }>('/api/departments/:id', ({ params }) => {
    const index = departments.findIndex((d) => d.id === params.id);
    if (index === -1) {
      return HttpResponse.json({ message: 'Department not found' }, { status: 404 });
    }

    // Clean up employeeDepartments
    for (let i = employeeDepartments.length - 1; i >= 0; i--) {
      if (employeeDepartments[i].departmentId === params.id) {
        employeeDepartments.splice(i, 1);
      }
    }

    departments.splice(index, 1);
    return HttpResponse.json({ message: 'Department deleted' }, { status: 200 });
  }),
];
