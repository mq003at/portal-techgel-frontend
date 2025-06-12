import { Field, ErrorMessage, useFormikContext } from 'formik';
import InputFieldProps from './types/InputFieldProps';
import { TagInput } from './TagInput';
import { DateInput, DatetimeInput } from './DatetimeInput';
import { TextareaInput } from './TextareaInput';
import { SelectInput } from './SelectInput';

export default function InputField({
  label,
  name,
  type = 'text',
  placeholder,
  required = false,
  options,
  tags,
  files,
  disabled,
  multiple,
}: InputFieldProps) {
  const { setFieldValue } = useFormikContext();
  const handleFileChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.currentTarget.files) {
      const fileList = Array.from(event.currentTarget.files);
      setFieldValue(name, fileList);
    } else {
      setFieldValue(name, []);
    }
  };

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
          <TagInput name={name} suggestions={tags.suggestions} allowNew={tags.allowNew} />
        ) : type === 'date' ? (
          <DateInput name={name} required={required} disabled={disabled} />
        ) : type === 'datetime' ? (
            <DatetimeInput name={name} required={required} disabled={disabled} />
        ): type === 'select-input' ? (
            <SelectInput options={options} name={name} disabled={disabled} placeholder={placeholder} isMulti={multiple}/>
        ) : type === 'file' ? (
          <input
            name={name}
            type={type}
            multiple={files?.multiple}
            accept={files?.accept}
            className="file-input file-input-bordered w-full"
            onChange={handleFileChange}
            disabled={disabled}
          />
        ) : type === 'textarea' ? (
          <TextareaInput name={name} placeholder={placeholder} 
                        disabled={disabled} required={required}/>
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
