import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';
import { EmployeeDTO, CreateEmployeeDTO, UpdateEmployeeDTO } from '../DTOs/EmployeeDTO';

export const employeeApi = createApi({
  reducerPath: 'employeeApi',
  baseQuery: fetchBaseQuery({ baseUrl: 'https://localhost:5001/api' }),
  tagTypes: ['Employee'],
  endpoints: (builder) => ({
    // GET all employees
    getEmployees: builder.query<EmployeeDTO[], void>({
      query: () => 'employees',
      providesTags: ['Employee'],
    }),

    // GET one employee
    getEmployeeById: builder.query<EmployeeDTO, string | number>({
      query: (id) => `employees/${id}`,
      providesTags: (_result, _error, id) => [{ type: 'Employee', id }],
    }),

    // POST create employee
    createEmployee: builder.mutation<EmployeeDTO, CreateEmployeeDTO>({
      query: (employee) => ({
        url: 'employees',
        method: 'POST',
        body: employee,
      }),
      invalidatesTags: ['Employee'],
    }),

    // PUT employee
    updateEmployee: builder.mutation<EmployeeDTO, { id: string; data: UpdateEmployeeDTO }>({
      query: ({ id, data }) => ({
        url: `employees/${id}`,
        method: 'PUT',
        body: data,
      }),
      invalidatesTags: ['Employee'],
    }),

    // DELETE employee
    deleteEmployee: builder.mutation<{ success: boolean }, string>({
      query: (id) => ({
        url: `employees/${id}`,
        method: 'DELETE',
      }),
      invalidatesTags: ['Employee'],
    }),
  }),
});

// Export auto-generated hooks
export const {
  useGetEmployeesQuery,
  useGetEmployeeByIdQuery,
  useCreateEmployeeMutation,
  useUpdateEmployeeMutation,
  useDeleteEmployeeMutation,
} = employeeApi;
