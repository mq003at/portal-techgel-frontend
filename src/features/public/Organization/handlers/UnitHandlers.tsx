import { http, HttpResponse } from 'msw';
import { employeeUnitMockData, unitMockData } from '../data/UnitMockList';
import { UnitDTO, CreateUnitDTO, UpdateUnitDTO } from '../DTOs/UnitDTO';
import { v4 as uuid } from 'uuid';

const employeeUnits = [...employeeUnitMockData];
const units = [...unitMockData];

export const unitHandlers = [
  // 🟢 GET all units
  http.get<never, null, UnitDTO[]>('/api/units', () => {
    const enrichedUnits: UnitDTO[] = units.map((unit) => {
      const related = employeeUnits.filter((e) => e.unitId === unit.id);
      return {
        ...unit,
        employeeIds: related.map((r) => r.employeeId),
        employees: related,
      };
    });

    return HttpResponse.json(enrichedUnits, { status: 200 });
  }),

  // 🔵 GET unit by ID
  http.get<{ id: string }, null, UnitDTO | { message: string }>('/api/units/:id', ({ params }) => {
    const unit = units.find((u) => u.id === params.id);
    if (!unit) {
      return HttpResponse.json({ message: 'Unit not found' }, { status: 404 });
    }

    const related = employeeUnits.filter((e) => e.unitId === unit.id);

    return HttpResponse.json(
      {
        ...unit,
        employeeIds: related.map((r) => r.employeeId),
        employees: related,
      },
      { status: 200 }
    );
  }),

  // 🟡 CREATE unit
  http.post<never, CreateUnitDTO, UnitDTO>('/api/units', async ({ request }) => {
    const body = await request.json();

    const newUnit: UnitDTO = {
      id: uuid(),
      name: body.name,
      mainId: body.mainId,
      sectionId: body.sectionId,
      status: body.status,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      teamIds: [],
      employeeIds: body.employeeIds || [],
    };

    units.push(newUnit);

    if (body.employeeIds) {
      body.employeeIds.forEach((empId) => {
        employeeUnits.push({
          id: uuid(),
          employeeId: empId,
          unitId: newUnit.id ?? uuid(),
          createdAt: new Date().toISOString(),
        });
      });
    }

    return HttpResponse.json(newUnit, { status: 201 });
  }),

  // 🟠 UPDATE unit
  http.put<{ id: string }, UpdateUnitDTO, UnitDTO | { message: string }>(
    '/api/units/:id',
    async ({ params, request }) => {
      const unit = units.find((u) => u.id === params.id);
      if (!unit) {
        return HttpResponse.json({ message: 'Unit not found' }, { status: 404 });
      }

      const body = await request.json();

      if (body.name !== undefined) unit.name = body.name;
      if (body.mainId !== undefined) unit.mainId = body.mainId;
      if (body.managerId !== undefined) unit.managerId = body.managerId;
      unit.updatedAt = new Date().toISOString();

      if (body.employeeIds !== undefined) {
        // Remove old entries
        const toRemove = employeeUnits.filter((e) => e.unitId === unit.id);
        toRemove.forEach((entry) => {
          const i = employeeUnits.indexOf(entry);
          if (i !== -1) employeeUnits.splice(i, 1);
        });

        // Add new
        body.employeeIds.forEach((empId) => {
          employeeUnits.push({
            id: uuid(),
            employeeId: empId,
            unitId: unit.id ?? uuid(),
            createdAt: new Date().toISOString(),
          });
        });
      }

      const related = employeeUnits.filter((e) => e.unitId === unit.id);

      return HttpResponse.json(
        {
          ...unit,
          employeeIds: related.map((r) => r.employeeId),
          employees: related,
        },
        { status: 200 }
      );
    }
  ),

  // 🔴 DELETE unit
  http.delete<{ id: string }, null, { message: string }>('/api/units/:id', ({ params }) => {
    const index = units.findIndex((u) => u.id === params.id);
    if (index === -1) {
      return HttpResponse.json({ message: 'Unit not found' }, { status: 404 });
    }

    // Clean up employee joins
    for (let i = employeeUnits.length - 1; i >= 0; i--) {
      if (employeeUnits[i].unitId === params.id) {
        employeeUnits.splice(i, 1);
      }
    }

    units.splice(index, 1);
    return HttpResponse.json({ message: 'Unit deleted' }, { status: 200 });
  }),
];
