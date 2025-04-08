import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DivisionDTO, CreateDivisionDTO, UpdateDivisionDTO } from "../DTOs/DivisionDTO";


export const divisionApi = createApi({
  reducerPath: "divisionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Division"],

  endpoints: (builder) => ({
    // 🔄 GET all divisions
    getDivisions: builder.query<DivisionDTO[], void>({
      query: () => "divisions",
      providesTags: ["Division"],
    }),

    // 🔍 GET division by ID
    getDivisionById: builder.query<DivisionDTO, string>({
      query: (id) => `divisions/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Division", id }],
    }),

    // ➕ CREATE division
    createDivision: builder.mutation<DivisionDTO, CreateDivisionDTO>({
      query: (body) => ({
        url: "divisions",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Division"],
    }),

    // 📝 UPDATE division
    updateDivision: builder.mutation<DivisionDTO, { id: string; data: UpdateDivisionDTO }>({
      query: ({ id, data }) => ({
        url: `divisions/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Division", id }],
    }),

    // ❌ DELETE division
    deleteDivision: builder.mutation<void, string>({
      query: (id) => ({
        url: `divisions/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Division"],
    }),
  }),
});

export const {
  useGetDivisionsQuery,
  useGetDivisionByIdQuery,
  useCreateDivisionMutation,
  useUpdateDivisionMutation,
  useDeleteDivisionMutation,
} = divisionApi;