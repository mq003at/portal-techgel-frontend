export default interface InputFieldProps {
  label: string;
  name: string;
  type?: 'text' | 'email' | 'date' | 'select' | 'number' | 'password' | 'tel';
  placeholder?: string;
  required?: boolean;
  options?: { value: string; label: string }[];
  disabled?: boolean;
}
