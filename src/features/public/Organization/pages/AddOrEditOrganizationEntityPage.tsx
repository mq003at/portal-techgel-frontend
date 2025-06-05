// import { useEffect, useRef } from "react";
// import { CreateOrganizationEntityDTO, OrganizationEntityDTO, UpdateOrganizationEntityDTO } from "../DTOs/OrganizationEntityDTO";
// import { Field, Form, Formik } from "formik";
// import { useGetEmployeesQuery } from "../../../restricted/EmployeeList/api/employeeListApi";
// import { OrganizationStatusOptions } from "../configs/OrganizationModelOptions";
// import InputField from "../../../../components/Form/InputField";
// import { TagInput } from "../../../../components/Form/TagInput";

// interface Props {
//   mode: 'add' | 'edit';
//   initialData?: CreateOrganizationEntityDTO | UpdateOrganizationEntityDTO;
//   onSubmit: (formData: CreateOrganizationEntityDTO | UpdateOrganizationEntityDTO) => void;
// }

// export default function OrganizationEntityFormModal({mode, initialData, onSubmit}: Props){
//     const {data: employees = [], isLoading: isEmpLoading } = useGetEmployeesQuery();
    
//     if (mode === "edit" && !initialData) return <div>Đang tải dữ liệu...</div>;
//     console.log(initialData)

//     const initialValues: CreateOrganizationEntityDTO | UpdateOrganizationEntityDTO = {
//       mainId: initialData?.mainId ?? "",
//       name: initialData?.name ?? "",
//       description: initialData?.description ?? "",
//       level: initialData?.level ?? 1,
//       managerId: initialData?.managerId ?? "",
//       status: initialData?.status ?? "ACTIVE",
//       parentId: initialData?.parentId ?? "",
//       sortOrder: initialData?.sortOrder ?? 0,
//       employeeIds: initialData?.employeeIds ?? [],
//     };

//     return (
//         <Formik
//             initialValues={initialValues}
//             onSubmit={(values) => {
//               onSubmit(values);
//             }}
//           >
//             <Form className="space-y-4">
//               <div className="grid grid-cols-2 gap-4">
//                 <Field name="parentId" type="hidden" />
//                 <div>
//                   <label className="label">Mã tổ chức</label>
//                   <Field name="mainId" className="input input-bordered w-full" />
//                 </div>

//                 <div>
//                   <label className="label">Tên tổ chức</label>
//                   <Field name="name" className="input input-bordered w-full" />
//                 </div>

//                 <div>
//                   <label className="label">Mô tả</label>
//                   <Field name="description" className="input input-bordered w-full" />
//                 </div>

//                 <div>
//                   <label className="label">Trạng thái</label>
//                   <Field as="select" name="status" className="select select-bordered w-full">
//                     {Object.entries(OrganizationStatusOptions).map(([value, { label }]) => (
//                       <option key={value} value={value}>
//                         {label}
//                       </option>
//                     ))}
//                   </Field>
//                 </div>

//                 <div>
//                   <label className="label">Người quản lý (ID)</label>
//                   <Field
//                       name="managerId"
//                       as="select"
//                       className="select select-bordered w-full"
//                       disabled={isEmpLoading}
//                     >
//                       <option value="">
//                         {isEmpLoading ? 'Đang tải danh sách...' : '-- Chọn người quản lý --'}
//                       </option>
//                       {employees.map(emp => (
//                         <option key={emp.id} value={emp.id}>
//                           {emp.mainId} - {emp.lastName} {emp.middleName} {emp.firstName}
//                         </option>
//                       ))}
//                     </Field>
//                 </div>

//                 <div>
//                   <label className="label">Thứ tự</label>
//                   <Field name="sortOrder" type="number" className="input input-bordered w-full" />
//                 </div>

//                 <div className="col-span-2">
//                   <label className="label">Danh sách nhân viên</label>
//                   <p className="abc">{initialData?.employeeIds}</p>
//                   <TagInput
//                       name="employeeIds"
//                       initData={
//                         initialValues.employeeIds?.map((val) => ({
//                             id: val,
//                             label: val,
//                             value: val,
//                         }))
//                       }
//                       suggestions={[...employees.map((e) => ({label: `${e.id} - ${e.lastName} ${e.middleName} ${e.firstName}`, value: e.id}))]}
//                       allowNew={false} />
//                 </div>
//               </div>

//               <div className="modal-action">
//                 <button type="submit" className="btn btn-primary">
//                   {mode === 'add' ? 'Tạo mới' : 'Cập nhật'}
//                 </button>
//               </div>
//             </Form>
//           </Formik>
//     )
// }