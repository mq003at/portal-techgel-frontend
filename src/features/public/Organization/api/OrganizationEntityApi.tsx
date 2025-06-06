import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CreateOrganizationEntityDTO,
  OrganizationEntityDTO,
  UpdateOrganizationEntityDTO,
} from '../DTOs/OrganizationEntityDTO';

export const organizationEntityApi = createApi({
  reducerPath: 'organizationEntityApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:5001/api' }),
  tagTypes: ['OrganizationEntity'],

  endpoints: (builder) => ({
    // 🔄 GET all organization entities (divisions, departments, etc.)
    getOrganizationEntities: builder.query<OrganizationEntityDTO[], void>({
      query: () => 'organizationentities',
      providesTags: ['OrganizationEntity'],
    }),

    // 🔍 GET organization entity by ID
    getOrganizationEntityById: builder.query<OrganizationEntityDTO, string>({
      query: (id) => `organizationentities/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'OrganizationEntity', id }],
    }),

    // ➕ CREATE organization entity
    createOrganizationEntity: builder.mutation<OrganizationEntityDTO, CreateOrganizationEntityDTO>({
      query: (body) => ({
        url: 'organizationentities',
        method: 'POST',
        body,
      }),
      invalidatesTags: ['OrganizationEntity'],
    }),

    // 📝 UPDATE organization entity
    updateOrganizationEntity: builder.mutation<
      OrganizationEntityDTO,
      { id: string; data: UpdateOrganizationEntityDTO }
    >({
      query: ({ id, data }) => ({
        url: `organizationentities/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['OrganizationEntity']
    }),

    // ❌ DELETE organization entity
    deleteOrganizationEntity: builder.mutation<void, string>({
      query: (id) => ({
        url: `organizationentities/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['OrganizationEntity'],
    }),
  }),
});

export const {
  useGetOrganizationEntitiesQuery,
  useGetOrganizationEntityByIdQuery,
  useCreateOrganizationEntityMutation,
  useUpdateOrganizationEntityMutation,
  useDeleteOrganizationEntityMutation,
} = organizationEntityApi;
