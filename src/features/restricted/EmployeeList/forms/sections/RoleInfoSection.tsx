import { useFormikContext } from 'formik';
import { useRoleInfoFields } from '../../configs/sharedProps';
import { CreateEmployeeDTO } from '../../DTOs/EmployeeDTO';
import InputField from '../../../../../components/Form/InputField';

export default function RoleInfoSection() {
  useFormikContext<CreateEmployeeDTO>();
  const roleInfoFields = useRoleInfoFields();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {roleInfoFields.map((field) => (
        <InputField key={field.name} {...field} name={`roleInfo.${field.name}`} />
      ))}
    </div>
  );
}
