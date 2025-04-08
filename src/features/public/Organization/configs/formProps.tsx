import { InputFieldProps } from '../../../../components/form/types/InputFieldProps';
import { OrganizationEntityTypes } from '../constants/OrganizationModelOptions';

export const addingOrganizationEntityFields: InputFieldProps[] = [
  { label: 'Tên', name: 'name', placeholder: 'Type name', required: true },
  {
    label: 'Loại',
    name: 'type',
    type: 'select',
    options: OrganizationEntityTypes.map((t) => ({ label: t.label, value: t.key })),
    required: true,
  },
  {
    label: 'Mô tả',
    name: 'description',
    placeholder: 'Type description',
    type: 'text',
  },
];
