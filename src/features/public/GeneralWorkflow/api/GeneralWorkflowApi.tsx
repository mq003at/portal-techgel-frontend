import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { ApprovalWorkflowNode, CreateGeneralWorkflowDTO, GeneralWorkflowDTO, UpdateApprovalWorkflowNode, UpdateGeneralWorkflowDTO } from '../DTOs/GeneralWorkflowDTO';

export const generalWorkflowApi = createApi({
    reducerPath: 'GeneralWorkflowApi',
    baseQuery: fetchBaseQuery({baseUrl: '/api'}),
    tagTypes: ['GeneralWorkflow'],

    endpoints: (builder) => ({
        getGeneralWorkflows: builder.query<GeneralWorkflowDTO[], void>({
            query: () => 'general-workflow',
            providesTags: ['GeneralWorkflow']
        }),

        getGeneralWorkflowById: builder.query<GeneralWorkflowDTO, string>({
            query: (id) => `general-workflow/${id}`,
            providesTags: (_result, _error, id) => [{type: 'GeneralWorkflow', id}]
        }),

        createGeneralWorkflow: builder.mutation<GeneralWorkflowDTO, CreateGeneralWorkflowDTO>({
            query: (body) => ({
                url: 'general-workflow',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['GeneralWorkflow'],
        }),

        updateGeneralWorkflow: builder.mutation<GeneralWorkflowDTO, {id: string; data: UpdateGeneralWorkflowDTO}>({
            query: ({id, data}) => ({
                url: `general-workflow/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (_result, _error, {id}) => [{ type: 'GeneralWorkflow', id}]
        }),

        updateApprovalWorkflowNode: builder.mutation<ApprovalWorkflowNode, {id: string; nodeId: string, data: UpdateApprovalWorkflowNode}>({
            query: ({id, nodeId, data}) => ({
                url: `general-workflow/${id}/nodes/${nodeId}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (_result, _error, {id, nodeId}) => [{ type: 'GeneralWorkflow', id, nodeId}]
        }),

        deleteGeneralWorkflow: builder.mutation<void, string>({
            query: (id) => ({
                url: `general-workflow/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['GeneralWorkflow']
        })
    })
});

export const {
    useGetGeneralWorkflowsQuery,
    useGetGeneralWorkflowByIdQuery,
    useCreateGeneralWorkflowMutation,
    useUpdateApprovalWorkflowNodeMutation,
    useUpdateGeneralWorkflowMutation,
} = generalWorkflowApi;