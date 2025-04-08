import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { DepartmentDTO, CreateDepartmentDTO, UpdateDepartmentDTO } from "../DTOs/DepartmentDTO";

export const departmentApi = createApi({
    reducerPath: "departmentApi",
    baseQuery: fetchBaseQuery({ baseUrl: "/api" }),
    tagTypes: ["Department"],

    endpoints: (builder) => ({
        // 🔄 GET all departments
        getDepartments: builder.query<DepartmentDTO[], void>({
            query: () => "departments",
            providesTags: ["Department"],
        }),

        // 🔍 GET department by ID
        getDepartmentById: builder.query<DepartmentDTO, string>({
            query: (id) => `departments/${id}`,
            providesTags: (_result, _error, id) => [{ type: "Department", id }],
        }),

        // ➕ CREATE department
        createDepartment: builder.mutation<DepartmentDTO, CreateDepartmentDTO>({
            query: (body) => ({
                url: "departments",
                method: "POST",
                body,
            }),
            invalidatesTags: ["Department"],
        }),

        // 📝 UPDATE department
        updateDepartment: builder.mutation<
            DepartmentDTO,
            { id: string; data: UpdateDepartmentDTO }
        >({
            query: ({ id, data }) => ({
                url: `departments/${id}`,
                method: "PUT",
                body: data,
            }),
            invalidatesTags: (_result, _error, { id }) => [{ type: "Department", id }],
        }),

        // ❌ DELETE department
        deleteDepartment: builder.mutation<void, string>({
            query: (id) => ({
                url: `departments/${id}`,
                method: "DELETE",
            }),
            invalidatesTags: ["Department"],
        }),
    }),
});

export const {
    useGetDepartmentsQuery,
    useGetDepartmentByIdQuery,
    useCreateDepartmentMutation,
    useUpdateDepartmentMutation,
    useDeleteDepartmentMutation,
} = departmentApi;