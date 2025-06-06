import { useFormikContext } from 'formik';
import { CreateEmployeeDTO } from '../../DTOs/EmployeeDTO';
import { personalInfoFields } from '../../configs/sharedProps';
import InputField from '../../../../../components/Form/InputField';

export default function PersonalInfoSection() {
  useFormikContext<CreateEmployeeDTO>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {personalInfoFields.map((field) => (
        <InputField key={field.name} {...field} name={`personalInfo.${field.name}`} required={field.required} />
      ))}
    </div>
  );
}
