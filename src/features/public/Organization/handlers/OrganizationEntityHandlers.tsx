import { http, HttpResponse } from 'msw';
import { v4 as uuid } from 'uuid';
import {
  OrganizationEntityDTO,
  CreateOrganizationEntityDTO,
  UpdateOrganizationEntityDTO,
} from '../DTOs/OrganizationEntityDTO';
import {
  rootOrganizationMockData,
  divisionsMockData,
  departmentsMockData,
  sectionMockData, // Assuming this is the correct name based on your file list
  unitMockData, // Assuming this is the correct name
  teamMockData, // Assuming this is the correct name
} from '../data/OrganizationEntityMockList';
import { EmployeeMockData } from '../../../restricted/EmployeeList/data/employeeData';

// Combine all mock data into a single mutable array
let allEntities: OrganizationEntityDTO[] = [
  rootOrganizationMockData,
  ...divisionsMockData,
  ...departmentsMockData,
  ...sectionMockData,
  ...unitMockData,
  ...teamMockData,
];

const employees = [...EmployeeMockData]; // Assuming this is the correct name based on your file list

// Helper function to recursively fetch an entity and its children
const fetchEntityWithChildren = (
  entityId: string,
  entities: OrganizationEntityDTO[],
  visited: Set<string> = new Set() // Prevent infinite loops in case of cyclic data
): OrganizationEntityDTO | undefined => {
  if (visited.has(entityId)) {
    console.warn(`Circular dependency detected for entity ID: ${entityId}`);
    return undefined; // Avoid infinite loop
  }
  visited.add(entityId);

  const entity = entities.find((e) => e.id === entityId);
  if (!entity) {
    return undefined;
  }

  if (entity.managerId) {
    const manager = employees.find((emp) => emp.id === entity.managerId);
    entity.managerName = manager
      ? `${manager.lastName} ${manager.middleName || ''} ${manager.firstName}`
          .replace(/\s+/g, ' ')
          .trim() // Construct full name, handle missing middleName, trim extra spaces
      : `Manager ID ${entity.managerId} not found`; // Fallback if manager not found
  }

  // Populate employeeNames
  if (entity.employeeIds && entity.employeeIds.length > 0) {
    entity.employeeNames = entity.employeeIds.map((empId) => {
      const employee = employees.find((emp) => emp.id === empId);
      return employee
        ? `${employee.lastName} ${employee.middleName || ''} ${employee.firstName}`
            .replace(/\s+/g, ' ')
            .trim()
        : `Emp ID ${empId} not found`;
    });
  }

  const children = (entity.childrenIds ?? [])
    .map((childId) => fetchEntityWithChildren(childId, entities, new Set(visited))) // Pass a copy of visited set
    .filter((child): child is OrganizationEntityDTO => !!child); // Filter out undefined results

  // Return a copy of the entity with populated children
  return {
    ...entity,
    children: children,
  };
};

export const organizationEntityHandlers = [
  // GET all organization entities (starting from level 0)
  http.get<never, null, OrganizationEntityDTO[]>('/api/organization-entities', () => {
    const rootEntities = allEntities.filter((e) => e.level === 0);
    const populatedRootEntities = rootEntities
      .map((root) => fetchEntityWithChildren(root.id, allEntities))
      .filter((entity): entity is OrganizationEntityDTO => !!entity); // Filter out potential undefineds

    return HttpResponse.json(populatedRootEntities, { status: 200 });
  }),

  // GET organization entity by ID (with all descendants)
  http.get<{ id: string }, null, OrganizationEntityDTO | { message: string }>(
    '/api/organization-entities/:id',
    ({ params }) => {
      const entity = fetchEntityWithChildren(params.id, allEntities);

      if (!entity) {
        return HttpResponse.json({ message: 'Organization entity not found' }, { status: 404 });
      }

      return HttpResponse.json(entity, { status: 200 });
    }
  ),

  // ➕ CREATE organization entity
  http.post<never, CreateOrganizationEntityDTO, OrganizationEntityDTO | { message: string }>(
    '/api/organization-entities',
    async ({ request }) => {
      const body = await request.json();

      // Validation
      let parent: OrganizationEntityDTO | undefined = undefined;
      if (body.level > 0) {
        if (!body.parentId) {
          return HttpResponse.json(
            { message: 'parentId is required for level > 0' },
            { status: 400 }
          );
        }
        parent = allEntities.find((e) => e.id === body.parentId);
        if (!parent) {
          return HttpResponse.json(
            { message: `Parent entity with id ${body.parentId} not found` },
            { status: 400 }
          );
        }
        // Check if parent level is correct (parent.level === body.level - 1)
        if (parent.level !== body.level - 1) {
          return HttpResponse.json({ message: `Parent level mismatch` }, { status: 400 });
        }
      } else if (body.parentId) {
        // Level 0 should not have a parentId
        return HttpResponse.json(
          { message: 'parentId must be empty for level 0' },
          { status: 400 }
        );
      }

      const newEntity: OrganizationEntityDTO = {
        id: uuid(), // Generate unique ID
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        name: body.name,
        mainId: body.mainId,
        description: body.description,
        level: body.level,
        status: body.status,
        parentId: body.parentId || '',
        parentName: parent?.name || '',
        managerId: body.managerId,
        employeeIds: body.employeeIds || [],
        childrenIds: [], // New entities have no children initially
        childrenNames: [],
        sortOrder: body.sortOrder,
      };

      // Add to the main list
      allEntities.push(newEntity);

      // Update parent's children list
      if (parent) {
        parent.childrenIds = [...(parent.childrenIds || []), newEntity.id];
        parent.childrenNames = [...(parent.childrenNames || []), newEntity.name];
        parent.updatedAt = new Date().toISOString(); // Mark parent as updated
      }

      return HttpResponse.json(newEntity, { status: 201 });
    }
  ),

  // 📝 UPDATE organization entity
  http.put<
    { id: string },
    UpdateOrganizationEntityDTO,
    OrganizationEntityDTO | { message: string }
  >('/api/organization-entities/:id', async ({ params, request }) => {
    const body = await request.json();
    const entityIndex = allEntities.findIndex((e) => e.id === params.id);

    if (entityIndex === -1) {
      return HttpResponse.json({ message: 'Organization entity not found' }, { status: 404 });
    }

    const originalEntity = allEntities[entityIndex];
    const updatedEntity = { ...originalEntity }; // Create a copy to modify

    // Update fields provided in the body
    if (body.name !== undefined) updatedEntity.name = body.name;
    if (body.mainId !== undefined) updatedEntity.mainId = body.mainId;
    if (body.description !== undefined) updatedEntity.description = body.description;
    if (body.managerId !== undefined) updatedEntity.managerId = body.managerId; // Add logic to update managerName if needed
    if (body.status !== undefined) updatedEntity.status = body.status;
    if (body.sortOrder !== undefined) updatedEntity.sortOrder = body.sortOrder;
    if (body.employeeIds !== undefined) updatedEntity.employeeIds = body.employeeIds; // Add logic to update employeeNames if needed

    // Parent change logic (more complex, omitted for brevity - requires updating old/new parents)
    if (body.parentId !== undefined && body.parentId !== originalEntity.parentId) {
      // Basic validation: Cannot set parent for level 0, new parent must exist
      if (originalEntity.level === 0 && body.parentId) {
        return HttpResponse.json(
          { message: 'Cannot set parent for a level 0 entity.' },
          { status: 400 }
        );
      }
      const newParent = allEntities.find((e) => e.id === body.parentId);
      if (originalEntity.level > 0 && !newParent) {
        return HttpResponse.json(
          { message: `New parent entity with id ${body.parentId} not found` },
          { status: 400 }
        );
      }
      // TODO: Implement full parent update logic (remove from old parent's children, add to new parent's children)
      console.warn('Parent change logic in PUT handler is simplified.');
      updatedEntity.parentId = body.parentId || '';
      updatedEntity.parentName = newParent?.name || '';
    }

    updatedEntity.updatedAt = new Date().toISOString();
    allEntities[entityIndex] = updatedEntity; // Replace the old entity with the updated one

    return HttpResponse.json(updatedEntity, { status: 200 });
  }),

  // ❌ DELETE organization entity
  http.delete<{ id: string }, null, { message: string }>(
    '/api/organization-entities/:id',
    ({ params }) => {
      const entityIndex = allEntities.findIndex((e) => e.id === params.id);

      if (entityIndex === -1) {
        return HttpResponse.json({ message: 'Organization entity not found' }, { status: 404 });
      }

      const entityToDelete = allEntities[entityIndex];

      // Check for children
      if (entityToDelete.childrenIds && entityToDelete.childrenIds.length > 0) {
        return HttpResponse.json(
          { message: 'Cannot delete entity that has children.' },
          { status: 400 }
        );
      }

      // Remove from parent's children list
      if (entityToDelete.parentId) {
        const parentIndex = allEntities.findIndex((e) => e.id === entityToDelete.parentId);
        if (parentIndex !== -1) {
          allEntities[parentIndex].childrenIds = (
            allEntities[parentIndex].childrenIds || []
          ).filter((id) => id !== entityToDelete.id);
          allEntities[parentIndex].childrenNames = (
            allEntities[parentIndex].childrenNames || []
          ).filter((name) => name !== entityToDelete.name); // Assuming names need removal too
          allEntities[parentIndex].updatedAt = new Date().toISOString();
        }
      }

      // Remove the entity itself
      allEntities.splice(entityIndex, 1);

      return HttpResponse.json(
        { message: 'Organization entity deleted successfully' },
        { status: 200 }
      );
    }
  ),
];
