import { Field, ErrorMessage } from 'formik';
import InputFieldProps from './types/InputFieldProps';

export default function TextField({ label, name, placeholder, required = false }: InputFieldProps) {
  return (
    <div className="grid grid-cols-2 gap-4 items-start form-control">
      {/* Label Column */}
      <label className="text-right font-medium pt-2">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* TextArea Column */}
      <div>
        <Field
          as="textarea"
          name={name}
          placeholder={placeholder}
          className="textarea textarea-bordered w-full p-1.5"
          rows={4}
        />
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-sm mt-1 col-span-2"
        />
      </div>
    </div>
  );
}
