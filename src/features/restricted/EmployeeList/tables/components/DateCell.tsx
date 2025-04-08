import { formatDateToDDMMYYYY } from '../../../../../utils/conversion';

export const DateCell = ({ getValue }: { getValue: () => string }) => (
  <span>{formatDateToDDMMYYYY(getValue())}</span>
);
