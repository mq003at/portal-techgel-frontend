// import { toUTCDate } from "../../../../utils/conversion";
// import { useCreateEmployeeMutation, useUpdateEmployeeMutation } from "../api/employeeListApi";
// import { CreateEmployeeDTO, UpdateEmployeeDTO } from "../DTOs/EmployeeDTO";

// export function useEmployeeListForm() {
//     const [createEmployee] = useCreateEmployeeMutation();
//     const [updateEmployee] = useUpdateEmployeeMutation();
  
//     const handleAddEmployee = async (
//       values: any,
//       { setSubmitting, resetForm }: any
//     ) => {
//       const employeeData: CreateEmployeeDTO = {
//         mainId: values.mainId,
//         firstName: values.firstName,
//         lastName: values.lastName,
//         middleName: values.middleName,
//         password: values.password,
//         gender: values.gender,
//         personalPhoneNumber: values.personalPhoneNumber,
//         companyNumber: values.companyNumber,
//         dateOfBirth: toUTCDate(values.dateOfBirth),
//         startDate: toUTCDate(values.startDate),
//         endDate: toUTCDate(values.endDate),
//         probationStartDate: toUTCDate(values.probationStart),
//         probationEndDate: toUTCDate(values.probationEnd),
//         personalEmail: values.personalEmail,
//         companyEmail: values.companyEmail,
//         employmentStatus: values.employmentStatus,
//         position: values.position,
//         address: values.address,
//         salary: values.salary,
//         divisionIds: values.divisionIds ?? [],
//         departmentIds: values.departmentIds ?? [],
//         sectionIds: values.sectionIds ?? [],
//         unitIds: values.unitIds ?? [],
//         teamIds: values.teamIds ?? [],
//       };
  
//       try {
//         const response = await createEmployee(employeeData).unwrap();
//         alert(`Đã thêm nhân viên ${response.firstName} thành công`);
//         resetForm();
//       } catch (error) {
//         console.error("Error submitting employee data:", error);
//         alert("Failed to add employee. Please try again.");
//       } finally {
//         setSubmitting(false);
//       }
//     };
  
//     const handleUpdateEmployee = (employeeId: string) =>
//         async (values: any, { setSubmitting }: any) => {
//           const employeeData: UpdateEmployeeDTO = {
//             firstName: values.firstName,
//             lastName: values.lastName,
//             middleName: values.middleName,
//             gender: values.gender,
//             personalEmail: values.personalEmail,
//             personalPhoneNumber: values.personalPhoneNumber,
//             companyEmail: values.companyEmail,
//             companyNumber: values.companyNumber,
//             address: values.address,
//             salary: values.salary,
//             dateOfBirth: toUTCDate(values.dateOfBirth),
//             startDate: toUTCDate(values.startDate),
//             endDate: toUTCDate(values.endDate),
//             probationStartDate: toUTCDate(values.probationStart),
//             probationEndDate: toUTCDate(values.probationEnd),
//             employmentStatus: values.employmentStatus,
//             position: values.position,
//             managerId: values.managerId ?? undefined,
//             divisionIds: values.divisionIds ?? [],
//             departmentIds: values.departmentIds ?? [],
//             sectionIds: values.sectionIds ?? [],
//             unitIds: values.unitIds ?? [],
//             teamIds: values.teamIds ?? [],
//           };
      
//           try {
//             console.log("submit press");
//             await updateEmployee({ id: employeeId, ...employeeData }).unwrap();
//             alert("Cập nhật nhân viên thành công");
//           } catch (error) {
//             console.error("Error updating employee:", error);
//             alert("Failed to update employee. Please try again.");
//           } finally {
//             setSubmitting(false);
//           }
//         };
  
//     return {
//       handleAddEmployee,
//       handleUpdateEmployee
//     };
//   }