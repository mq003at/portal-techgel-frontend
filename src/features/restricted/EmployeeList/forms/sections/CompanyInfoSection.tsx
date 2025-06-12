import { useFormikContext } from 'formik';
import InputField from '../../../../../components/Form/InputField';
import { companyInfoFields } from '../../configs/sharedProps';
import { CreateEmployeeDTO } from '../../DTOs/EmployeeDTO';

export default function CompanyInfoSection() {
  useFormikContext<CreateEmployeeDTO>();

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {companyInfoFields.map((field) => (
        <InputField key={field.name} {...field} name={`companyInfo.${field.name}`} />
      ))}
    </div>
  );
}
