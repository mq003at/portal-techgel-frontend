import { useFormikContext } from 'formik';
import { CreateDocumentDTO } from '../../DTOs/DocumentDTO';
import { generalDocumentInfoFields } from '../../configs/sharedProps';
import InputField from '../../../../../components/Form/InputField';

export default function GeneralDocumentInfoSection() {
  useFormikContext<CreateDocumentDTO>();

  return (
    <div className="grid grid-cols-1 gap-6">
      {generalDocumentInfoFields.map((field) => (
        <InputField key={field.name} {...field} name={`generalDocumentInfo.${field.name}`} />
      ))}
    </div>
  );
}
