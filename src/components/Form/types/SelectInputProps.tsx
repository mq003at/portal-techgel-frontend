export type Option = { label: string; value: any };

export interface SelectInputProps {
    name: string;
    options?: Option[];
    isMulti?: boolean;
    placeholder?: string;
    disabled?: boolean;
}