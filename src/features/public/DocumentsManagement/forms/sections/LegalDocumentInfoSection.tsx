import { useFormikContext } from 'formik';
import InputField from '../../../../../components/Form/InputField';
import { CreateDocumentDTO } from '../../DTOs/DocumentDTO';
import { legalDocumentInfoFields } from '../../configs/sharedProps';

export default function LegalDocumentInfoSection() {
  useFormikContext<CreateDocumentDTO>();

  return (
    <div className="grid grid-cols-1 gap-6">
      {legalDocumentInfoFields.map((field) => (
        <InputField key={field.name} {...field} name={`legalDocumentInfo.${field.name}`} />
      ))}
    </div>
  );
}
