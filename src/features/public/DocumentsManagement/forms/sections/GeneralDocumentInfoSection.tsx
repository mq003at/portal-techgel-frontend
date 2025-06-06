import { useFormikContext } from 'formik';
import InputField from '../../../../../components/Form/InputField';
import { CreateDocumentDTO } from '../../DTOs/DocumentDTO';
import { generalDocumentInfoFields } from '../../configs/sharedProps';

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
