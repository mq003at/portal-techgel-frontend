import { http, HttpResponse } from "msw";
import {  employeeSectionMockData, sectionMockData } from "../data/SectionMockList";
import { SectionDTO, CreateSectionDTO, UpdateSectionDTO } from "../DTOs/SectionDTO";
import { v4 as uuid } from 'uuid';

const sections = [...sectionMockData]
const employeeSections = [...employeeSectionMockData];

export const sectionHandlers = [
  // 🟢 GET all sections
  http.get<never, null, SectionDTO[]>("/api/sections", () => {
    const enriched = sections.map((section) => {
      const related = employeeSections.filter(
        (e) => e.sectionId === section.id
      );
      return {
        ...section,
        employeeIds: related.map((r) => r.employeeId),
        employees: related,
      };
    });

    return HttpResponse.json(enriched, { status: 200 });
  }),

  // 🔵 GET section by ID
  http.get<{ id: string }, null, SectionDTO | { message: string }>(
    "/api/sections/:id",
    ({ params }) => {
      const section = sections.find((s) => s.id === params.id);
      if (!section) {
        return HttpResponse.json({ message: "Section not found" }, { status: 404 });
      }

      const related = employeeSections.filter(
        (e) => e.sectionId === section.id
      );

      return HttpResponse.json(
        {
          ...section,
          employeeIds: related.map((r) => r.employeeId),
          employees: related,
        },
        { status: 200 }
      );
    }
  ),

  // 🟡 CREATE section
  http.post<never, CreateSectionDTO, SectionDTO>("/api/sections", async ({ request }) => {
    const body = await request.json();

    const newSection: SectionDTO = {
      id: uuid(),
      name: body.name,
      mainId: body.mainId,
      departmentId: body.departmentId,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
      unitIds: [],
      employeeIds: body.employeeIds || [],
    };

    sections.push(newSection);

    // Link employees
    if (body.employeeIds) {
      body.employeeIds.forEach((empId) => {
        employeeSections.push({
          id: uuid(),
          employeeId: empId,
          sectionId: '1',
          createdAt: new Date().toISOString(),
        });
      });
    }

    return HttpResponse.json(newSection, { status: 201 });
  }),

  // 🟠 UPDATE section
  http.put<{ id: string }, UpdateSectionDTO, SectionDTO | { message: string }>(
    "/api/sections/:id",
    async ({ params, request }) => {
      const section = sections.find((s) => s.id === params.id);
      if (!section) {
        return HttpResponse.json({ message: "Section not found" }, { status: 404 });
      }

      const body = await request.json();

      if (body.name !== undefined) section.name = body.name;
      if (body.mainId !== undefined) section.mainId = body.mainId;
      if (body.managerId !== undefined) section.managerId = body.managerId;
      section.updatedAt = new Date().toISOString();

      // Replace employee assignments
      if (body.employeeIds !== undefined) {
        const toRemove = employeeSections.filter(
          (e) => e.sectionId === section.id
        );
        toRemove.forEach((entry) => {
          const i = employeeSections.indexOf(entry);
          if (i !== -1) employeeSections.splice(i, 1);
        });

        body.employeeIds.forEach((empId) => {
          employeeSections.push({
            id: uuid(),
            employeeId: empId,
            sectionId: '1',
            createdAt: new Date().toISOString(),
          });
        });
      }

      const related = employeeSections.filter(
        (e) => e.sectionId === section.id
      );

      return HttpResponse.json(
        {
          ...section,
          employeeIds: related.map((r) => r.employeeId),
          employees: related,
        },
        { status: 200 }
      );
    }
  ),

  // 🔴 DELETE section
  http.delete<{ id: string }, null, { message: string }>(
    "/api/sections/:id",
    ({ params }) => {
      const index = sections.findIndex((s) => s.id === params.id);
      if (index === -1) {
        return HttpResponse.json({ message: "Section not found" }, { status: 404 });
      }

      // Clean up join data
      for (let i = employeeSections.length - 1; i >= 0; i--) {
        if (employeeSections[i].sectionId === params.id) {
          employeeSections.splice(i, 1);
        }
      }

      sections.splice(index, 1);
      return HttpResponse.json({ message: "Section deleted" }, { status: 200 });
    }
  ),
];