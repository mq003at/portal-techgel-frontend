import { useFormikContext } from 'formik';
import InputField from '../../../../../components/Form/InputField';
import { insuranceInfoFields } from '../../configs/sharedProps';
import { CreateEmployeeDTO } from '../../DTOs/EmployeeDTO';

export default function InsuranceInfoSection() {
  useFormikContext<CreateEmployeeDTO>();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {insuranceInfoFields.map((field) => (
        <InputField key={field.name} {...field} name={`insuranceInfo.${field.name}`} />
      ))}
    </div>
  );
}
