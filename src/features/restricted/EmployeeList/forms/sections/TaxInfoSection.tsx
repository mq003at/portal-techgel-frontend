import { useFormikContext } from 'formik';
import InputField from '../../../../../components/form/InputField';
import { taxInfoFields } from '../../configs/sharedProps';
import { CreateEmployeeDTO } from '../../DTOs/EmployeeDTO';

export default function TaxInfoSection() {
  useFormikContext<CreateEmployeeDTO>();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {taxInfoFields.map((field) => (
        <InputField key={field.name} {...field} name={`taxInfo.${field.name}`} />
      ))}
    </div>
  );
}
