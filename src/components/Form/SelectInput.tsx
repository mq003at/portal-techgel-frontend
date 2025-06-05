import { useField, useFormikContext } from "formik";
import Select, { MultiValue, SingleValue } from "react-select";
import { Option, SelectInputProps } from "./types/SelectInputProps";

export const SelectInput = ({
    name,
    options,
    isMulti = false,
    placeholder,
    disabled,
}: SelectInputProps) => {
    const [field, meta] = useField(name);
    const { setFieldValue } = useFormikContext();

    const handleChange = (
        selected: MultiValue<Option> | SingleValue<Option> | null
    ) => {
        if (isMulti) {
            setFieldValue(
                name,
                selected ? [...(selected as Option[])].map((opt) => opt.value) : []
            );
        } else {
            setFieldValue(name, selected ? (selected as Option).value : "");
        }
    };

    const getValue = () => {
        if (isMulti) {
            return (options ?? []).filter((opt) => field.value?.includes(opt.value));
        } else {
            return (options ?? []).find((opt) => opt.value === field.value) || null;
        }
    };

    return (
        <div className="w-full">
            <Select
                name={name}
                options={options}
                isMulti={isMulti}
                placeholder={placeholder}
                value={getValue()}
                onChange={handleChange as (
                    newValue: MultiValue<Option> | SingleValue<Option>
                ) => void}
                onBlur={field.onBlur}
                isDisabled={disabled}
                classNamePrefix="react-select"
            />
            {meta.touched && meta.error && (
                <div className="text-red-500 text-sm mt-1">{meta.error}</div>
            )}
        </div>
    );
};
