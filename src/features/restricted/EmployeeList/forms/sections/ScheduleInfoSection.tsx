import { useFormikContext } from 'formik';
import InputField from '../../../../../components/form/InputField';
import { scheduleInfoFields } from '../../configs/sharedProps';
import { CreateEmployeeDTO } from '../../DTOs/EmployeeDTO';

export default function ScheduleInfoSection() {
  useFormikContext<CreateEmployeeDTO>();
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {scheduleInfoFields.map((field) => (
        <InputField key={field.name} {...field} name={`ScheduleInfo.${field.name}`} />
      ))}
    </div>
  );
}
