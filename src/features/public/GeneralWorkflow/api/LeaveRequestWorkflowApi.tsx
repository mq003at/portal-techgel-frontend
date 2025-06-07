import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateLeaveRequestWorkflowDTO, LeaveRequestWorkflowDTO, UpdateLeaveRequestWorkflowDTO } from '../DTOs/LeaveRequestWorkflowDTO';
import { LeaveRequestNodeDTO } from '../DTOs/LeaveRequestNodeDTO';

export const leaveRequestWorkflowApi = createApi({
    reducerPath: 'LeaveRequestWorkflowApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:5001/api'}),
    tagTypes: ['LeaveRequestWorkflow'],

    endpoints: (builder) => ({
        getLeaveRequestWorkflows: builder.query<LeaveRequestWorkflowDTO[], void>({
            query: () => 'leave-requests',
            providesTags: ['LeaveRequestWorkflow']
        }),

        getLeaveRequestById: builder.query<LeaveRequestWorkflowDTO, string>({
            query: (id) => `leave-requests/${id}`,
            providesTags: (_result, _error, id) => [{type: 'LeaveRequestWorkflow', id}]
        }),

        getLeaveRequestNodesById: builder.query<LeaveRequestNodeDTO[], string>({
            query: (id) => `leave-requests/${id}/nodes`,
            providesTags: (_result, _error, id) => [{type: 'LeaveRequestWorkflow', id}]
        }),

        createLeaveRequestWorkflow: builder.mutation<LeaveRequestWorkflowDTO, CreateLeaveRequestWorkflowDTO>({
            query: (body) => ({
                url: 'leave-requests',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['LeaveRequestWorkflow'],
        }),

        updateLeaveRequestWorkflow: builder.mutation<LeaveRequestWorkflowDTO, {id: string; data: UpdateLeaveRequestWorkflowDTO}>({
            query: ({id, data}) => ({
                url: `leave-requests/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (_result, _error, {id}) => [{ type: 'LeaveRequestWorkflow', id}]
        }),

        approveLeaveRequestNode: builder.mutation<string, {id: number; approverId: number; comment?: string}>({
            query: ({id, approverId}) => ({
                url: `leave-request-nodes/${id}/approve?approverId=${approverId}`,
                method: 'PUT',
            }),
            invalidatesTags: ['LeaveRequestWorkflow']
        }),

        rejectLeaveRequestNode: builder.mutation<string, {id: number; approverId: number; comment?: string}>({
            query: ({id, approverId}) => ({
                url: `leave-request-nodes/${id}/reject?approverId=${approverId}`,
                method: 'PUT',
            }),
            invalidatesTags: ['LeaveRequestWorkflow']
        }),

        deleteLeaveRequestWorkflow: builder.mutation<void, number>({
            query: (id) => ({
                url: `leave-requests/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['LeaveRequestWorkflow']
        }),
    })
});

export const {
    useGetLeaveRequestWorkflowsQuery,
    useGetLeaveRequestByIdQuery,
    useGetLeaveRequestNodesByIdQuery,
    useCreateLeaveRequestWorkflowMutation,
    useUpdateLeaveRequestWorkflowMutation,
    useDeleteLeaveRequestWorkflowMutation,
    useApproveLeaveRequestNodeMutation,
    useRejectLeaveRequestNodeMutation,
} = leaveRequestWorkflowApi;