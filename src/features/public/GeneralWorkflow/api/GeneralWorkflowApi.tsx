import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { GeneralWorkflowDTO } from '../DTOs/GeneralWorkflowDTO';

export const GeneralWorkflowApi = createApi({
    reducerPath: 'GeneralWorkflowApi',
    baseQuery: fetchBaseQuery({baseUrl: '/api'}),
    tagTypes: ['GeneralWorkflow'],

    endpoints: (builder) => ({
        getGeneralWorkflow: builder.query<GeneralWorkflowDTO[], void>({
            query: () => 'generalWorkflows',
            providesTags: ['GeneralWorkflow']
        }),

        getGeneralWorkflowById: builder.query<GeneralWorkflowDTO, string>({
            query: (id) => `generalWorkflows/${id}`,
            providesTags: (_result, _error, id) => [{type: 'GeneralWorkflow', id}]
        }),

        createGeneralWorkflow: builder.mutation<GeneralWorkflowDTO, Create
    })
})