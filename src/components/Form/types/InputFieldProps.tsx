export default interface InputFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'date' | 'select' | 'number' | 'password' | 'tel' | 'tags' | 'file';
  placeholder?: string;
  required?: boolean;
  options?: { value: any; label: string }[];
  tags?: { suggestions: any[]; allowNew: boolean };
  files?: {multiple: boolean, accept: string}
  disabled?: boolean;
}
