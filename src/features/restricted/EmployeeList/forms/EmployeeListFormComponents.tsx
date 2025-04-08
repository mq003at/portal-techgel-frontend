// import {
//   useCreateEmployeeMutation,
//   useUpdateEmployeeMutation,
//   useDeleteEmployeeMutation,
// } from '../api/employeeListApi';
// import { toUTCDate } from '../../../../utils/conversion';
// import { CreateEmployeeDTO, EmployeeDTO, UpdateEmployeeDTO } from '../DTOs/EmployeeDTO';

// export const onSubmitEmployeeAddForm = async (values: any, { setSubmitting, resetForm }: any) => {
//   console.log('press');
//   const employeeData: CreateEmployeeDTO = {
//     id: values.id,
//     mainId: values.mainId,
//     firstName: values.firstName,
//     lastName: values.lastName,
//     middleName: values.middleName,
//     password: values.password,
//     gender: values.gender,
//     personalPhoneNumber: values.personalPhoneNumber,
//     companyNumber: values.companyNumber,
//     dateOfBirth: toUTCDate(values.dateOfBirth),
//     startDate: toUTCDate(values.startDate),
//     endDate: toUTCDate(values.endDate),
//     probationStartDate: toUTCDate(values.probationStart),
//     probationEndDate: toUTCDate(values.probationEnd),
//     personalEmail: values.personalEmail,
//     companyEmail: values.companyEmail,
//     employmentStatus: values.employmentStatus,
//     position: values.position,
//     address: values.address,
//     salary: values.salary,

//     divisionIds: [],
//     departmentIds: [],
//     sectionIds: [],
//     unitIds: [],
//     teamIds: [],
//   };
//   console.log('Submitting Employee Data:', employeeData);

//   try {
//     const [createEmployee] = useCreateEmployeeMutation();
//     const response: EmployeeDTO = await createEmployee(employeeData).unwrap(); // ← unwrap the result
//     console.log('Response:', response);
//     alert(`Đã thêm nhân viên ${response.firstName} thành công`);
//     resetForm();
//   } catch (error) {
//     console.error('Error submitting employee data:', error);
//     alert('Failed to add employee. Please try again.');
//   } finally {
//     setSubmitting(false);
//   }
// };

// export const onSubmitEmployeeEditForm =
//   (updateEmployee: ReturnType<typeof useUpdateEmployeeMutation>[0]) =>
//   async (values: any, { setSubmitting }: any) => {
//     console.log('press');

//     const employeeData: UpdateEmployeeDTO = {
//       firstName: values.firstName,
//       lastName: values.lastName,
//       middleName: values.middleName,
//       gender: values.gender,
//       dateOfBirth: toUTCDate(values.dateOfBirth),
//       personalEmail: values.personalEmail,
//       personalPhoneNumber: values.phoneNumber,
//       companyEmail: values.companyEmail,
//       companyNumber: values.companyNumber,
//       address: values.address,
//       salary: values.salary,
//       startDate: toUTCDate(values.startDate),
//       endDate: toUTCDate(values.endDate),
//       probationStartDate: toUTCDate(values.probationStart),
//       probationEndDate: toUTCDate(values.probationEnd),
//       employmentStatus: values.employmentStatus,
//       position: values.position,
//       managerId: values.managerId ?? undefined,
//       divisionIds: values.divisionIds ?? [],
//       departmentIds: values.departmentIds ?? [],
//       sectionIds: values.sectionIds ?? [],
//       unitIds: values.unitIds ?? [],
//       teamIds: values.teamIds ?? [],
//     };

//     try {
//       await updateEmployee({ id: values.id, ...employeeData }).unwrap();
//       alert('Cập nhật thành công. Vui lòng refresh trang');
//     } catch (error) {
//       console.error('Error updating employee:', error);
//       alert('Failed to update employee. Please try again.');
//     } finally {
//       setSubmitting(false);
//     }
//   };

// export const onSubmitEmployeeDelete =
//   (deleteEmployee: ReturnType<typeof useDeleteEmployeeMutation>[0]) => async (id: string) => {
//     console.log('press delete');

//     try {
//       await deleteEmployee(id).unwrap();
//       alert('Nhân viên đã được xóa.');
//     } catch (error) {
//       console.error('Error deleting employee:', error);
//       alert('Failed to delete employee. Please try again.');
//     }
//   };
