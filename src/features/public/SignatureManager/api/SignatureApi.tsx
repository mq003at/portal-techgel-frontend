import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { CreateSignatureDTO, SignatureDTO, UpdateSignatureDTO } from '../DTOs/SignatureDTO';

export const signatureApi = createApi({
    reducerPath: 'SignatureApi',
    baseQuery: fetchBaseQuery({baseUrl: 'https://localhost:5001/api'}),
    tagTypes: ['Signature'],

    endpoints: (builder) => ({
        getSignatures: builder.query<SignatureDTO[], void>({
            query: () => 'signatures',
            providesTags: ['Signature']
        }),

        getSignatureById: builder.query<SignatureDTO, string>({
            query: (id) => `signatures/${id}`,
            providesTags: (_result, _error, id) => [{type: 'Signature', id}]
        }),

        getSignatureByEmployeeId: builder.query<SignatureDTO, string>({
            query: (employeeId) => `signatures/employee/${employeeId}`,
            providesTags: ['Signature']
        }),

        createSignature: builder.mutation<SignatureDTO, FormData>({
            query: (body) => ({
                url: 'signatures',
                method: 'POST',
                body,
            }),
            invalidatesTags: ['Signature'],
        }),

        updateSignature: builder.mutation<SignatureDTO, {id: string; data: UpdateSignatureDTO}>({
            query: ({id, data}) => ({
                url: `signatures/${id}`,
                method: 'PUT',
                body: data,
            }),
            invalidatesTags: (_result, _error, {id}) => [{ type: 'Signature', id}]
        }),

        deleteSignature: builder.mutation<void, string>({
            query: (id) => ({
                url: `signatures/${id}`,
                method: 'DELETE',
            }),
            invalidatesTags: ['Signature']
        })
    })
});

export const {
    useGetSignaturesQuery,
    useGetSignatureByIdQuery,
    useGetSignatureByEmployeeIdQuery,
    useCreateSignatureMutation,
    useUpdateSignatureMutation,
    useDeleteSignatureMutation,
} = signatureApi;