import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { SectionDTO, CreateSectionDTO, UpdateSectionDTO } from "../DTOs/SectionDTO";

export const sectionApi = createApi({
  reducerPath: "sectionApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Section"],

  endpoints: (builder) => ({
    getSections: builder.query<SectionDTO[], void>({
      query: () => "sections",
      providesTags: ["Section"],
    }),

    getSectionById: builder.query<SectionDTO, string>({
      query: (id) => `sections/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Section", id }],
    }),

    createSection: builder.mutation<SectionDTO, CreateSectionDTO>({
      query: (body) => ({
        url: "sections",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Section"],
    }),

    updateSection: builder.mutation<SectionDTO, { id: string; data: UpdateSectionDTO }>({
      query: ({ id, data }) => ({
        url: `sections/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Section", id }],
    }),

    deleteSection: builder.mutation<void, string>({
      query: (id) => ({
        url: `sections/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Section"],
    }),
  }),
});

export const {
  useGetSectionsQuery,
  useGetSectionByIdQuery,
  useCreateSectionMutation,
  useUpdateSectionMutation,
  useDeleteSectionMutation,
} = sectionApi;