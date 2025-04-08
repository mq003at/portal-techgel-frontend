import StatusBadge from '../../../../../components/wrapper/BadgeWrapper';
import { employmentStatusOptions } from '../../configs/employeeFieldOptions';

export const StatusCell = ({ getValue }: { getValue: () => string }) => {
  const statusValue = getValue();
  const statusMeta = employmentStatusOptions.find((opt) => opt.value === statusValue);
  const label = statusMeta?.label || statusValue;
  const color = statusMeta?.color || 'neutral';
  return <StatusBadge label={label} color={color} />;
};
