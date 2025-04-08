import { format } from 'date-fns';
import { vi } from 'date-fns/locale';

interface DateCellProps {
  value?: string | Date | null;
}

export function DateCell({ value }: DateCellProps) {
  if (!value) return null;

  try {
    const date = typeof value === 'string' ? new Date(value) : value;
    return <span>{format(date, 'dd/MM/yyyy', { locale: vi })}</span>;
  } catch (error) {
    console.error('Error formatting date:', error);
    return <span className="text-red-500">Invalid date</span>;
  }
}
