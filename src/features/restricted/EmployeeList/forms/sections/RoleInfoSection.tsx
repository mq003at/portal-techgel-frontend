import { useFormikContext } from 'formik';
import InputField from '../../../../../components/form/InputField';
import { roleInfoFields } from '../../configs/sharedProps';
import { CreateEmployeeDTO } from '../../DTOs/EmployeeDTO';

export default function RoleInfoSection() {
  useFormikContext<CreateEmployeeDTO>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {roleInfoFields.map((field) => (
        <InputField key={field.name} {...field} name={`roleInfo.${field.name}`} disabled />
      ))}
    </div>
  );
}
