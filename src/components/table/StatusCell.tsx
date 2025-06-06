interface StatusCellProps<T> {
  value: T;
  color: string;
  label?: string;
}

const StatusCell = <T,>({ value, color, label }: StatusCellProps<T>) => {
  return <div className={`badge ${color}`}>{label || String(value)}</div>;
};

export default StatusCell;
