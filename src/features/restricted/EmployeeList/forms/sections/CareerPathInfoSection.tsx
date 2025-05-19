import { useFormikContext } from 'formik';
import InputField from '../../../../../components/Form/InputField';
import { careerPathFields } from '../../configs/sharedProps';
import { CreateEmployeeDTO } from '../../DTOs/EmployeeDTO';

export default function CareerPathInfoSection() {
  useFormikContext<CreateEmployeeDTO>();

  return (
    <div className="grid grid-cols-1 gap-6">
      {careerPathFields.map((field) => (
        <InputField key={field.name} {...field} name={`careerPathInfo.${field.name}`} />
      ))}
    </div>
  );
}
