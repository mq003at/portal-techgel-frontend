import { useField } from "formik";
import TextareaInputFieldProps from "./types/TextareaInputFieldProps";

export const TextareaInput = ({name, required, placeholder, disabled}: TextareaInputFieldProps) => {
    const [field, meta, helpers] = useField(name);

    return(
        <div className="w-full">
            <textarea
                {...field}
                id={name}
                name={name}
                required={required}
                placeholder={placeholder}
                disabled={disabled}
                className={`input input-bordered w-full ${meta.touched && meta.error ? 'border-red-500' : ''}`}
            />
            {meta.touched && meta.error && (
                <div className="text-red-500 text-sm mt-1">{meta.error}</div>
            )}
        </div>
    )
}