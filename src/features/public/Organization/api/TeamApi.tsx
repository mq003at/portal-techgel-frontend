import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { TeamDTO, CreateTeamDTO, UpdateTeamDTO } from "../DTOs/TeamDTO";

export const teamApi = createApi({
  reducerPath: "teamApi",
  baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
  tagTypes: ["Team"],

  endpoints: (builder) => ({
    getTeams: builder.query<TeamDTO[], void>({
      query: () => "teams",
      providesTags: ["Team"],
    }),

    getTeamById: builder.query<TeamDTO, string>({
      query: (id) => `teams/${id}`,
      providesTags: (_result, _error, id) => [{ type: "Team", id }],
    }),

    createTeam: builder.mutation<TeamDTO, CreateTeamDTO>({
      query: (body) => ({
        url: "teams",
        method: "POST",
        body,
      }),
      invalidatesTags: ["Team"],
    }),

    updateTeam: builder.mutation<TeamDTO, { id: string; data: UpdateTeamDTO }>({
      query: ({ id, data }) => ({
        url: `teams/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: (_result, _error, { id }) => [{ type: "Team", id }],
    }),

    deleteTeam: builder.mutation<void, string>({
      query: (id) => ({
        url: `teams/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["Team"],
    }),
  }),
});

export const {
  useGetTeamsQuery,
  useGetTeamByIdQuery,
  useCreateTeamMutation,
  useUpdateTeamMutation,
  useDeleteTeamMutation,
} = teamApi;
