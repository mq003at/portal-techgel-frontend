import { setHours, setMinutes } from 'date-fns';
import DatePicker, { registerLocale } from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { vi } from 'date-fns/locale/vi';
import DatetimeInputFieldProps from './types/DatetimeInputFieldProps';
import { useField } from 'formik';

registerLocale('vi', vi)

export const DatetimeInput = ({ name, required, disabled }: DatetimeInputFieldProps) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className="w-full">
      <DatePicker
        locale="vi"
        required={required}
        disabled={disabled}
        className="input input-bordered w-full"
        selected={field.value ? new Date(field.value) : null}
        onChange={(date) => helpers.setValue(date ?? new Date())}
        showTimeSelect
        isClearable
        excludeTimes={[
          setHours(setMinutes(new Date(), 0), 17),
          setHours(setMinutes(new Date(), 30), 18),
          setHours(setMinutes(new Date(), 30), 19),
          setHours(setMinutes(new Date(), 30), 17),
        ]}
        dateFormat="Pp"
        timeFormat="HH:mm"
      />
      {meta.touched && meta.error && <div className="text-sm text-red-500 mt-1">{meta.error}</div>}
    </div>
  );
};

export const DateInput = ({ name, required, disabled }: DatetimeInputFieldProps) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className="w-full">
      <DatePicker
        locale="vi"
        required={required}
        disabled={disabled}
        isClearable
        className="input input-bordered w-full"
        selected={field.value ? new Date(field.value) : null}
        onChange={(date) => helpers.setValue(date ?? new Date())}
        dateFormat="Pp"
      />
      {meta.touched && meta.error && <div className="text-sm text-red-500 mt-1">{meta.error}</div>}
    </div>
  );
};

