interface StatusCellProps {
  value?: string | null;
}

const statusColors: Record<string, string> = {
  ACTIVE: 'bg-green-100 text-green-800',
  INACTIVE: 'bg-red-100 text-red-800',
  PROBATION: 'bg-yellow-100 text-yellow-800',
  MALE: 'bg-blue-100 text-blue-800',
  FEMALE: 'bg-pink-100 text-pink-800',
  OTHER: 'bg-gray-100 text-gray-800',
  SINGLE: 'bg-purple-100 text-purple-800',
  MARRIED: 'bg-indigo-100 text-indigo-800',
  DIVORCED: 'bg-orange-100 text-orange-800',
  WIDOWED: 'bg-gray-100 text-gray-800',
};

const statusLabels: Record<string, string> = {
  ACTIVE: 'Đã kích hoạt',
  INACTIVE: 'Đã nghỉ việc',
  PROBATION: 'Thử việc',
  MALE: 'Nam',
  FEMALE: 'Nữ',
  OTHER: 'Khác',
  SINGLE: 'Độc thân',
  MARRIED: 'Đã kết hôn',
  DIVORCED: 'Đã ly hôn',
  WIDOWED: 'Góa phụ/phu',
};

export function StatusCell({ value }: StatusCellProps) {
  if (!value) return null;

  const normalizedValue = value.toUpperCase();
  const color = statusColors[normalizedValue] || 'bg-gray-100 text-gray-800';
  const label = statusLabels[normalizedValue] || value;

  const baseClasses = 'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium';

  return <span className={`${baseClasses} ${color}`}>{label}</span>;
}
