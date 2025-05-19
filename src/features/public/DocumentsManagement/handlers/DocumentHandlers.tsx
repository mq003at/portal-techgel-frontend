import { http, HttpResponse } from 'msw';
import { v4 as uuid } from 'uuid';
import { CreateDocumentDTO, DocumentDTO, UpdateDocumentDTO } from '../DTOs/DocumentDTO';
import { documentMockData } from '../data/DocumentMockList';
import { resolve } from 'path';

let documents = [...documentMockData]

export const documentHandlers = [
    // http.get<never, null, DocumentDTO[]>('/api/documents', async () => {
    //     await new Promise(resolve => setTimeout(resolve, 1000));

    //     return HttpResponse.json(documents, { status: 200 });
    // }),

    http.get<{ id: string }, null, DocumentDTO | { message: string }>('/api/documents/:id', async ({ params }) => {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const id = params.id;
        const document = documents.find((d) => d.id === id);

        if(!document) return HttpResponse.json({ message: 'Document not found' }, { status: 404 });

        return HttpResponse.json(document, { status: 200 });
    }),

    http.get<never, null, DocumentDTO[] | { message: string }> ('/api/documents', async ({ request }) => {
        await new Promise(resolve => setTimeout(resolve, 1000));

        const url = new URL(request.url);
        const cate = url.searchParams.get('cate');

        if(!cate) return HttpResponse.json(documents, { status: 200 });

        const results = documents.filter(doc => doc.generalDocumentInfo.category === cate);

        if(!results) return HttpResponse.json({ message: 'Document not found' }, { status: 404});

        return HttpResponse.json(results, { status: 200 });
    }),

    http.post<never, CreateDocumentDTO, DocumentDTO>('/api/documents', async ({ request }) => {
        await new Promise(resolve => setTimeout(resolve, 3000));

        const body = await request.json();

        const lastDocument = documents[documents.length - 1];
        const nextId = lastDocument && !isNaN(Number(lastDocument.id)) ? (Number(lastDocument.id) + 1).toString() : '1';

        const { id, ...restBody } = body;

        const newDocument: DocumentDTO = {
            id: nextId,
            mainId: `D${nextId}`,
            createdAt: new Date().toISOString(),
            updatedAt: new Date().toISOString(),
            generalDocumentInfo: body.generalDocumentInfo ?? {},
            legalDocumentInfo: body.legalDocumentInfo ?? {},
            securityInfo: body.securityInfo ?? {},
            additionalInfo: body.additionalInfo ?? {},
            editInfo: body.editInfo ?? {},
        }

        documents.push(newDocument);

        return HttpResponse.json(newDocument, { status: 201 });
    }),

    http.put<{ id: string }, UpdateDocumentDTO, DocumentDTO | { message: string }>('/api/documents/:id', async ({ request, params }) => {
        await new Promise(resolve => setTimeout(resolve, 3000));

        const id = params.id;
        const updates = await request.json();

        const index = documents.findIndex((d) => d.id === id);
        if(index === -1) return HttpResponse.json({ message: 'Document not found'}, { status: 404 });

        const existing = documents[index];

        const updatedDocument: DocumentDTO = {
            ...existing,
            ...updates,
            id: existing.id,
            mainId: existing.mainId,
            updatedAt: new Date().toISOString(),
        };

        documents[index] = updatedDocument;

        return HttpResponse.json(updatedDocument, { status: 200 });
    }),

    http.delete<{ id: string }, null, null>('/api/documents/:id', ({ params }) => {
        const id = params.id;
        documents = documents.filter((d) => d.id !== id);
        return HttpResponse.json(null, { status: 204 });
    }),
]