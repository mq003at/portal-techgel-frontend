// import { Formik, Form } from 'formik';
// import { useState } from 'react';
// import * as Yup from 'yup';
// import InputField from '../../../../components/form/InputField';
// import { personalInfoFields, employmentInfoFields } from '../configs/sharedProps';
// import EmployeeDeleteConfirmPopover from '../modals/EmployeeDeleteConfirmPopover';
// import { onSubmitEmployeeDelete } from './EmployeeListFormComponents';
// import { formatDate } from '../../../../utils/conversion';
// import { EmployeeEditFormProps } from '../types/EmployeeListFormProps';
// import { useDeleteEmployeeMutation } from '../api/employeeListApi';
// import { useEmployeeListForm } from '../hooks/useEmployeeListForm';

// export default function EmployeeEditForm({ employeeId, employee, onClose }: EmployeeEditFormProps) {
//   const [isDeleteConfirmPopoverOpen, setDeleteConfirmPopover] = useState<boolean>(false);
//   const [deleteEmployee] = useDeleteEmployeeMutation();
//   const { handleUpdateEmployee } = useEmployeeListForm();

//   return (
//     <Formik
//       enableReinitialize
//       initialValues={{
//         id: employeeId,
//         mainId: employee.mainId || '',
//         lastName: employee.lastName || '',
//         middleName: employee.middleName || '',
//         firstName: employee.firstName || '',
//         gender: employee.gender || 'Male',
//         dateOfBirth: formatDate(employee.dateOfBirth ?? '') || '',
//         personalEmail: employee.personalEmail || '',
//         companyEmail: employee.companyEmail || '',
//         phoneNumber: employee.personalPhoneNumber || '',
//         companyNumber: employee.companyNumber || '',
//         probationStartDate: formatDate(employee.probationStartDate ?? '') || '',
//         probationEndDate: formatDate(employee.probationEndDate ?? '') || '',
//         startDate: formatDate(employee.startDate ?? '') || '',
//         endDate: formatDate(employee.endDate ?? '') || '',
//         position: employee.position || '',
//         employmentStatus: employee.employmentStatus || 'INACTIVE',
//         address: employee.address || '',
//         salary: employee.salary || 0.0,
//       }}
//       validationSchema={Yup.object({
//         lastName: Yup.string().required('Họ là bắt buộc'),
//         firstName: Yup.string().required('Tên là bắt buộc'),
//         dateOfBirth: Yup.date().required('Ngày sinh là bắt buộc'),
//         personalEmail: Yup.string().email('Email không hợp lệ'),
//         companyEmail: Yup.string().email('Email công ty không hợp lệ'),
//         phoneNumber: Yup.string().matches(/^[0-9]+$/, 'Số điện thoại không hợp lệ'),
//         companyNumber: Yup.string().matches(/^[0-9]+$/, 'Số điện thoại công ty không hợp lệ'),
//       })}
//       onSubmit={handleUpdateEmployee(employeeId)}
//     >
//       {({ handleSubmit, values }) => (
//         <div className="fixed top-0 right-0 w-2/3 h-full bg-white shadow-lg z-50 transition-transform duration-300 p-6">
//           {/* Header */}
//           <div className="flex justify-between items-center border-b pb-2 mb-4 w-full">
//             <div className="flex-1 text-center">
//               <h2 className="text-xl font-bold">
//                 {values.lastName} {values.middleName} {values.firstName}
//               </h2>
//             </div>
//             <button type="button" onClick={onClose} className="btn btn-sm btn-circle">
//               ✕
//             </button>
//           </div>

//           {/* Form Content */}
//           <Form onSubmit={handleSubmit} className="grid grid-cols-2 gap-6">
//             {/* Left Column - Personal Information */}
//             <div>
//               <h3 className="text-lg font-semibold mb-2 text-center">Thông tin cá nhân</h3>
//               {personalInfoFields.map((field) => (
//                 <InputField key={`employee-edit-form-${employeeId}-${field.name}`} {...field} />
//               ))}
//             </div>

//             {/* Right Column - Employment Details */}
//             <div>
//               <h3 className="text-lg font-semibold mb-2 text-center">Thông tin nghiệp vụ</h3>
//               {employmentInfoFields.map((field) => (
//                 <InputField key={`employee-edit-form-${employeeId}-${field.name}`} {...field} />
//               ))}
//               <div className="grid grid-cols-2 gap-4 items-center form-control h-[40px]">
//                 <label className="text-right font-medium">Trạng thái kích hoạt</label>
//                 <label>Chưa kích hoạt</label>
//               </div>
//             </div>

//             {/* Button */}
//             <div className="grid grid-cols-2 gap-4 justify-center col-span-2">
//               <button
//                 type="button"
//                 className="btn btn-secondary w-full text-center"
//                 onClick={() => setDeleteConfirmPopover(true)}
//               >
//                 Xóa Nhân Viên
//               </button>
//               <button type="submit" className="btn btn-success w-full text-center">
//                 Cập nhật thông tin
//               </button>
//             </div>
//             <EmployeeDeleteConfirmPopover
//               isOpen={isDeleteConfirmPopoverOpen}
//               onConfirm={() => {
//                 onSubmitEmployeeDelete(deleteEmployee)(employee.id); // Call delete function
//                 setDeleteConfirmPopover(false);
//                 onClose();
//               }}
//               onCancel={() => setDeleteConfirmPopover(false)}
//             />
//           </Form>
//         </div>
//       )}
//     </Formik>
//   );
// }
