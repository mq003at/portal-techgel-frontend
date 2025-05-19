import { Field, ErrorMessage } from 'formik';
import InputFieldProps from './types/InputFieldProps';
import { TagInput } from './TagInput';

export default function InputField({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  options,
  tags,
  disabled,
}: InputFieldProps) {

  return (
    <div className="grid grid-cols-2 gap-4 items-center form-control">
      {/* Label Column */}
      <label className="text-right font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Input Column */}
      <div className="">
        {type === 'select' && options ? (
          <Field
            as="select"
            name={name}
            className="select select-bordered w-full"
            disabled={disabled}
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Field>
        ) : type === 'tags' && tags ? (
            <TagInput
              name={name}
              suggestions={tags.suggestions}
              allowNew={tags.allowNew}
            />
        ) : (
            <Field
                name={name}
                type={type}
                placeholder={placeholder}
                className="input input-bordered w-full"
                disabled={disabled}
            />
        )}
        
        {/* Error Message (Spans Both Columns) */}
        <ErrorMessage
          name={name}
          component="div"
          className="text-red-500 text-sm mt-1 col-span-2"
        />
      </div>
    </div>
  );
}
