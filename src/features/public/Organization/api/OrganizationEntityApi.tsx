import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import {
  CreateOrganizationEntityDTO,
  OrganizationEntityDTO,
  UpdateOrganizationEntityDTO,
} from '../DTOs/OrganizationEntityDTO';

export const organizationEntityApi = createApi({
  reducerPath: 'organizationEntityApi',
  baseQuery: fetchBaseQuery({ baseUrl: '/api' }),
  tagTypes: ['OrganizationEntity'],

  endpoints: (builder) => ({
    // 🔄 GET all organization entities (divisions, departments, etc.)
    getOrganizationEntities: builder.query<OrganizationEntityDTO[], void>({
      query: () => 'organization-entities',
      providesTags: ['OrganizationEntity'],
    }),

    // 🔍 GET organization entity by ID
    getOrganizationEntityById: builder.query<OrganizationEntityDTO, string>({
      query: (id) => `organization-entities/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'OrganizationEntity', id }],
    }),

    // ➕ CREATE organization entity
    createOrganizationEntity: builder.mutation<OrganizationEntityDTO, CreateOrganizationEntityDTO>({
      query: (body) => ({
        url: 'organization-entities',
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
        url: `organization-entities/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: 'OrganizationEntity', id }],
    }),

    // ❌ DELETE organization entity
    deleteOrganizationEntity: builder.mutation<void, string>({
      query: (id) => ({
        url: `organization-entities/${id}`,
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
