import { useFormikContext } from 'formik';
import InputField from '../../../../../components/Form/InputField';
import { CreateDocumentDTO } from '../../DTOs/DocumentDTO';
import { additionalInfoFields } from '../../configs/sharedProps';

export default function AdditionalInfoSection() {
  useFormikContext<CreateDocumentDTO>();

  return (
    <div className="grid grid-cols-1 gap-6">
      {additionalInfoFields.map((field) => (
        <InputField key={field.name} {...field} name={`additionalInfo.${field.name}`} />
      ))}
    </div>
  );
}
