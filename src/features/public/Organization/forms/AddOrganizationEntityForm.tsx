// import { Formik, Field, Form } from 'formik';
// import InputField from '../../../../components/form/InputField';
// import { addingOrganizationEntityFields } from '../configs/formProps';
// import { OrganizationEntityMeta, OrganizationTypeOption } from '../configs/OrganizationEntityMeta';
// import {
//   useCreateOrganizationEntityMutation,
//   useGetOrganizationEntitiesQuery,
// } from '../api/OrganizationEntityApi';
// import { CreateOrganizationEntityDTO } from '../DTOs/OrganizationEntityDTO';
// import { OrganizationStatus } from '../configs/OrganizationModelOptions';
// import { toast } from 'react-toastify';

// interface Props {
//   onClose: () => void;
// }

// export default function AddOrganizationEntityForm({ onClose }: Props) {
//   const fields = addingOrganizationEntityFields; // Assuming this config is still relevant

//   // Fetch all entities to determine potential parents
//   const { data: allEntities = [], isLoading: isLoadingEntities } =
//     useGetOrganizationEntitiesQuery();

//   // Get the mutation hook
//   const [createEntity, { isLoading: isCreating }] = useCreateOrganizationEntityMutation();

//   // Helper to flatten the nested structure for easier lookup
//   const flattenEntities = (entities: any[]): any[] => {
//     let flatList: any[] = [];
//     entities.forEach((entity) => {
//       flatList.push(entity);
//       if (entity.children && entity.children.length > 0) {
//         flatList = flatList.concat(flattenEntities(entity.children));
//       }
//     });
//     return flatList;
//   };

//   return (
//     <Formik
//       initialValues={{ name: '', type: 'division', mainId: '', description: '', parentId: '' }} // Default type might be 'division' or similar
//       onSubmit={async (values) => {
//         const meta = OrganizationEntityMeta.find((m) => m.key === values.type);
//         const finalizedMainId = `${meta?.prefix ?? 'GEN'}-${values.mainId}`;

//         if (!meta) {
//           toast.error('Invalid entity type selected.');
//           return;
//         }

//         const payload: CreateOrganizationEntityDTO = {
//           name: values.name,
//           mainId: finalizedMainId,
//           description: values.description || undefined,
//           level: meta.level,
//           parentId: values.parentId || '', // Ensure parentId is empty string if not provided (for level 0 or if user didn't select)
//           status: OrganizationStatus.ACTIVE, // Default status or make it a form field
//           // managerId: // Add if needed
//           // employeeIds: // Add if needed
//         };

//         // Basic validation: Ensure parentId is provided if level > 0
//         if (meta.level > 0 && !values.parentId) {
//           toast.error(`Please select a parent ${meta.parentLabel || 'entity'}.`);
//           return;
//         }
//         // Basic validation: Ensure parentId is NOT provided if level === 0
//         if (meta.level === 0 && values.parentId) {
//           toast.error('Root level entities cannot have a parent.');
//           // Optionally clear parentId: values.parentId = '';
//           return;
//         }

//         try {
//           await createEntity(payload).unwrap();
//           toast.success(`Successfully created ${meta.label}: ${values.name}`);
//           onClose();
//         } catch (error) {
//           console.error('Failed to create organization entity:', error);
//           toast.error('Failed to create entity. Please check the details.');
//         }
//       }}
//     >
//       {({ values }) => {
//         const meta = OrganizationEntityMeta.find((m) => m.key === values.type);
//         const requiredParentLevel = meta ? meta.level - 1 : -1; // Level of the parent needed
//         const hasParent = requiredParentLevel >= 0; // Only entities with level > 0 need a parent

//         // Filter potential parents based on the required level
//         const potentialParents = hasParent
//           ? flattenEntities(allEntities).filter((e) => e.level === requiredParentLevel)
//           : [];

//         return (
//           <Form className="space-y-4">
//             {fields.map((field) => (
//               <InputField key={field.name} {...field} />
//             ))}

//             {hasParent && (
//               <div className="grid grid-cols-2 gap-4 items-center form-control">
//                 <label className="text-right font-medium">
//                   Liên kết với {meta?.parentLabel || 'Parent'}{' '}
//                   <span className="text-red-500">*</span>
//                 </label>
//                 <Field as="select" name="parentId" className="select select-bordered w-full">
//                   <option value="">-- Chọn {meta?.parentLabel || 'Parent'} --</option>
//                   {isLoadingEntities && <option disabled>Loading parents...</option>}
//                   {potentialParents.map((parent) => (
//                     <option key={parent.id} value={parent.id}>
//                       {parent.name}
//                     </option>
//                   ))}
//                 </Field>
//               </div>
//             )}

//             <div className="grid grid-cols-2 gap-4 items-center form-control">
//               <label className="text-right font-medium">
//                 Mã đơn vị <span className="text-red-500">*</span>
//               </label>
//               <div className="flex w-full">
//                 <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 rounded-l-md text-sm text-gray-600">
//                   {meta?.prefix ?? 'GEN'}
//                 </span>
//                 <Field
//                   name="mainId"
//                   placeholder="Nhập mã"
//                   className="input input-bordered w-full rounded-l-none"
//                 />
//               </div>
//             </div>

//             <div className="flex items-center gap-4 pt-4">
//               <button type="submit" className="btn btn-primary" disabled={isCreating}>
//                 Add entity
//               </button>
//               <button type="button" className="btn btn-ghost text-blue-600" onClick={onClose}>
//                 Cancel
//               </button>
//             </div>
//           </Form>
//         );
//       }}
//     </Formik>
//   );
// }
