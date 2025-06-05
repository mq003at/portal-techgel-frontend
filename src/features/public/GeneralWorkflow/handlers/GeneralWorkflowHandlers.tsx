import { http, HttpResponse } from 'msw';
import { v4 as uuid } from 'uuid';
import { resolve } from 'path';
import {
  CreateGeneralWorkflowDTO,
  GeneralWorkflowDTO,
  UpdateGeneralWorkflowDTO,
} from '../DTOs/GeneralWorkflowDTO';
import { GeneralWorkflowFacilitySupport } from '../data/GeneralWorkflowFacilitySupport';

let generalWorkflows = [...GeneralWorkflowFacilitySupport];

export const generalWorkflowHandlers = [
  http.get<never, null, GeneralWorkflowDTO[]>('/api/general-workflow', async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return HttpResponse.json(generalWorkflows, { status: 200 });
  }),

  http.get<{ id: string }, null, GeneralWorkflowDTO | { message: string }>(
    '/api/general-workflow/:id',
    async ({ params }) => {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      const id = params.id;
      const generalWorkflow = generalWorkflows.find((d) => d.id === id);

      if (!generalWorkflow)
        return HttpResponse.json({ message: 'GeneralWorkflow not found' }, { status: 404 });

      return HttpResponse.json(generalWorkflow, { status: 200 });
    }
  ),

  http.post<never, CreateGeneralWorkflowDTO, GeneralWorkflowDTO>(
    '/api/general-workflow',
    async ({ request }) => {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const body = await request.json();

      const lastGeneralWorkflow = generalWorkflows[generalWorkflows.length - 1];
      const nextId =
        lastGeneralWorkflow && !isNaN(Number(lastGeneralWorkflow.id))
          ? (Number(lastGeneralWorkflow.id) + 1).toString()
          : '1';

      const { id, ...restBody } = body;

      const newGeneralWorkflow: GeneralWorkflowDTO = {
        id: nextId,
        mainId: `D${nextId}`,
        createdAt: new Date().toISOString(),
        updatedAt: new Date().toISOString(),
        generalInfo: body.generalInfo ?? {},
        ApprovalWorkflowNodes: body.ApprovalWorkflowNodes ?? {},
      };

      generalWorkflows.push(newGeneralWorkflow);

      return HttpResponse.json(newGeneralWorkflow, { status: 201 });
    }
  ),

  http.put<{ id: string }, UpdateGeneralWorkflowDTO, GeneralWorkflowDTO | { message: string }>(
    '/api/general-workflow/:id',
    async ({ request, params }) => {
      await new Promise((resolve) => setTimeout(resolve, 3000));

      const id = params.id;
      const updates = await request.json();

      const index = generalWorkflows.findIndex((d) => d.id === id);
      if (index === -1)
        return HttpResponse.json({ message: 'GeneralWorkflow not found' }, { status: 404 });

      const existing = generalWorkflows[index];

      const updatedDocument: GeneralWorkflowDTO = {
        ...existing,
        ...updates,
        id: existing.id,
        mainId: existing.mainId,
        updatedAt: new Date().toISOString(),
      };

      generalWorkflows[index] = updatedDocument;

      return HttpResponse.json(updatedDocument, { status: 200 });
    }
  ),

  http.delete<{ id: string }, null, null>('/api/general-workflows/:id', ({ params }) => {
    const id = params.id;
    generalWorkflows = generalWorkflows.filter((d) => d.id !== id);
    return HttpResponse.json(null, { status: 204 });
  }),
];
