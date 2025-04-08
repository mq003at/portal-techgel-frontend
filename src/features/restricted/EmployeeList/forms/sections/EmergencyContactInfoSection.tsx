import { useFormikContext } from 'formik';
import InputField from '../../../../../components/form/InputField';
import { CreateEmployeeDTO } from '../../DTOs/EmployeeDTO';
import { emergencyContactInfoFields } from '../../configs/sharedProps';

export default function EmergencyContactInfoSection() {
  useFormikContext<CreateEmployeeDTO>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {emergencyContactInfoFields.map((field) => (
        <InputField key={field.name} {...field} name={`emergencyContactInfo.${field.name}`} />
      ))}
    </div>
  );
}
