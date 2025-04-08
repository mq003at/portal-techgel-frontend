import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { UnitDTO, CreateUnitDTO, UpdateUnitDTO } from "../DTOs/UnitDTO";

export const unitApi = createApi({
  reducerPath: "unitApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Unit"],

  endpoints: (builder) => ({
    getUnits: builder.query<UnitDTO[], void>({
      query: () => "units",
      providesTags: ["Unit"],
    }),

    getUnitById: builder.query<UnitDTO, string>({
      query: (id) => `units/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Unit", id }],
    }),

    createUnit: builder.mutation<UnitDTO, CreateUnitDTO>({
      query: (body) => ({
        url: "units",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Unit"],
    }),

    updateUnit: builder.mutation<UnitDTO, { id: string; data: UpdateUnitDTO }>({
      query: ({ id, data }) => ({
        url: `units/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Unit", id }],
    }),

    deleteUnit: builder.mutation<void, string>({
      query: (id) => ({
        url: `units/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Unit"],
    }),
  }),
});

export const {
  useGetUnitsQuery,
  useGetUnitByIdQuery,
  useCreateUnitMutation,
  useUpdateUnitMutation,
  useDeleteUnitMutation,
} = unitApi;