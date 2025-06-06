import { setHours, setMinutes } from 'date-fns';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import DatetimeInputFieldProps from './types/DatetimeInputFieldProps';
import { useField } from 'formik';

export const DatetimeInput = ({ name, required, disabled }: DatetimeInputFieldProps) => {
  const [field, meta, helpers] = useField(name);

  return (
    <div className="w-full">
      <DatePicker
        required={required}
        disabled={disabled}
        className="input input-bordered w-full"
        selected={field.value ? new Date(field.value) : null}
        onChange={(date) => helpers.setValue(date ?? new Date())}
        showTimeSelect
        excludeTimes={[
          setHours(setMinutes(new Date(), 0), 17),
          setHours(setMinutes(new Date(), 30), 18),
          setHours(setMinutes(new Date(), 30), 19),
          setHours(setMinutes(new Date(), 30), 17),
        ]}
        dateFormat="MMMM d, yyyy h:mm aa"
      />
      {meta.touched && meta.error && <div className="text-sm text-red-500 mt-1">{meta.error}</div>}
    </div>
  );
};
