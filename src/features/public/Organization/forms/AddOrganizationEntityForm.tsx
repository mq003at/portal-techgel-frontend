import { Formik, Field, Form } from 'formik';
import InputField from '../../../../components/form/InputField';
import { addingOrganizationEntityFields } from '../configs/formProps';
import { OrganizationEntityMeta } from '../configs/OrganizationEntityMeta';
import { useGetDepartmentsQuery } from '../api/DepartmentApi';
import { useGetDivisionsQuery } from '../api/DivisionApi';
import { useGetSectionsQuery } from '../api/SectionApi';
import { useGetUnitsQuery } from '../api/UnitApi';

interface Props {
  onClose: () => void;
}

export default function AddOrganizationEntityForm({ onClose }: Props) {
  const fields = addingOrganizationEntityFields;

  const { data: divisions = [] } = useGetDivisionsQuery();
  const { data: departments = [] } = useGetDepartmentsQuery();
  const { data: sections = [] } = useGetSectionsQuery();
  const { data: units = [] } = useGetUnitsQuery();

  const parentOptionsMap: Record<string, { id: string; name: string }[]> = {
    divisionId: divisions.filter((d) => d.id).map((d) => ({ id: d.id!, name: d.name })),
    departmentId: departments.filter((d) => d.id).map((d) => ({ id: d.id!, name: d.name })),
    sectionId: sections.filter((d) => d.id).map((d) => ({ id: d.id!, name: d.name })),
    unitId: units.filter((d) => d.id).map((d) => ({ id: d.id!, name: d.name })),
  };

  return (
    <Formik
      initialValues={{ name: '', type: 'divisionId', mainId: '', description: '', parentId: '' }}
      onSubmit={(values) => {
        const meta = OrganizationEntityMeta.find((m) => m.key === values.type);
        const finalizedMainId = `${meta?.prefix ?? 'GEN'}-${values.mainId}`;
        console.log('Final submitted:', { ...values, mainId: finalizedMainId });
        onClose();
      }}
    >
      {({ values }) => {
        const meta = OrganizationEntityMeta.find((m) => m.key === values.type);
        const hasParent = !!meta?.parentType;

        return (
          <Form className="space-y-4">
            {fields.map((field) => (
              <InputField key={field.name} {...field} />
            ))}

            {hasParent && (
              <div className="grid grid-cols-2 gap-4 items-center form-control">
                <label className="text-right font-medium">
                  Liên kết với {meta?.parentType?.replace('Id', '')}
                </label>
                <Field as="select" name="parentId" className="select select-bordered w-full">
                  <option value="">-- Chọn đơn vị --</option>
                  {parentOptionsMap[meta?.parentType || '']?.map((parent) => (
                    <option key={parent.id} value={parent.id}>
                      {parent.name}
                    </option>
                  ))}
                </Field>
              </div>
            )}

            <div className="grid grid-cols-2 gap-4 items-center form-control">
              <label className="text-right font-medium">
                Mã đơn vị <span className="text-red-500">*</span>
              </label>
              <div className="flex w-full">
                <span className="inline-flex items-center px-3 bg-gray-100 border border-r-0 rounded-l-md text-sm text-gray-600">
                  {meta?.prefix ?? 'GEN'}
                </span>
                <Field
                  name="mainId"
                  placeholder="Nhập mã"
                  className="input input-bordered w-full rounded-l-none"
                />
              </div>
            </div>

            <div className="flex items-center gap-4">
              <button type="submit" className="btn btn-primary">
                Add entity
              </button>
              <button type="button" className="btn btn-ghost text-blue-600" onClick={onClose}>
                Cancel
              </button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}
