import { useFormikContext } from 'formik';
import InputField from '../../../../../components/Form/InputField';
import { CreateDocumentDTO } from '../../DTOs/DocumentDTO';
import { securityInfoFields } from '../../configs/sharedProps';

export default function SecurityInfoSection() {
  useFormikContext<CreateDocumentDTO>();

  return (
    <div className="grid grid-cols-1 gap-6">
      {securityInfoFields.map((field) => (
        <InputField key={field.name} {...field} name={`securityInfo.${field.name}`} />
      ))}
    </div>
  );
}
