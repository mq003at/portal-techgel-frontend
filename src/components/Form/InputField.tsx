import { Field, ErrorMessage } from "formik";

export interface InputFieldProps {
  label: string;
  name: string;
  type?: "text" | "email" | "date" | "select" | "number";
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[]; // 🔥 Only used when type = "select"
}

export default function InputField({
  label,
  name,
  type = "text",
  placeholder,
  required = false,
  options,
}: InputFieldProps) {
  return (
    <div className="grid grid-cols-2 gap-4 items-center form-control">
      {/* Label Column */}
      <label className="text-right font-medium">
        {label} {required && <span className="text-red-500">*</span>}
      </label>

      {/* Input Column */}
      <div className="">
        {type === "select" && options ? (
          <Field
            as="select"
            name={name}
            className="select select-bordered w-full"
          >
            {options.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </Field>
        ) : (
          <Field
            name={name}
            type={type}
            placeholder={placeholder}
            className="input input-bordered w-full"
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
