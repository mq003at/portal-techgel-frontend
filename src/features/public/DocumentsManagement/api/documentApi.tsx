import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateDocumentDTO, DocumentDTO, UpdateDocumentDTO } from '../DTOs/DocumentDTO';

export const documentApi = createApi({
    reducerPath: 'documentApi',
    baseQuery: fetchBaseQuery({baseUrl: '/api'}),
    tagTypes: ['Document'],

    endpoints: (builder) => ({
        getDocuments: builder.query<DocumentDTO[], void>({
            query: () => 'documents',
            providesTags: ['Document']
        }),

        getDocumentById: builder.query<DocumentDTO, string>({
            query: (id) => `documents/${id}`,
            providesTags: (_result, _error, id) => [{type: 'Document', id}],
        }),

        getDocumentsByCate: builder.query<DocumentDTO[], string>({
            query: (cate) => `documents?cate=${cate}`,
            providesTags: (_result, _error, cate) => [{ type: 'Document', id: cate }],
        }),

        createDocument: builder.mutation<DocumentDTO, CreateDocumentDTO>({
            query: (body) => ({
                url: 'documents',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Document'],
        }),

        updateDocument: builder.mutation<DocumentDTO, {id: string; data: UpdateDocumentDTO}>({
            query: ({id, data}) => ({
                url: `documents/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (_result, _error, {id}) => [{ type: 'Document', id}]
        }),

        deleteDocument: builder.mutation<void, string>({
            query: (id) => ({
                url: `document/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Document'],
        })
    })
});

export const {
    useGetDocumentsQuery,
    useGetDocumentByIdQuery,
    useGetDocumentsByCateQuery,
    useCreateDocumentMutation,
    useUpdateDocumentMutation,
    useDeleteDocumentMutation,
} = documentApi;