import { useFormikContext } from 'formik';
import { CreateEmployeeDTO } from '../../DTOs/EmployeeDTO';
import InputField from '../../../../../components/form/InputField';
import { personalInfoFields } from '../../configs/sharedProps';

export default function PersonalInfoSection() {
  useFormikContext<CreateEmployeeDTO>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {personalInfoFields.map((field) => (
        <InputField key={field.name} {...field} name={`personalInfo.${field.name}`} />
      ))}
    </div>
  );
}
