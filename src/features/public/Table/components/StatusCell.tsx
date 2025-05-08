import { BadgeWrapper } from "../../../../components/Wrapper/BadgeWrapper";
import { EmploymentStatusEnum, employmentStatusOptions } from "../../../restricted/EmployeeList/configs/employeeFieldOptions";

interface StatusCellProps {
    getValue: () => string;
    options?: Array<{
        value: any;
        label: string;
        color?: string;
    }>;
}

export const StatusCell = ({ getValue, options}: StatusCellProps) => {
    const statusValue = getValue();
    if(!options) return <BadgeWrapper label={String(statusValue)} color="neutral" />;

    const statusMeta = options.find((opt) => opt.value === statusValue);
    const label = statusMeta?.label || statusValue;
    const color = statusMeta?.color || 'neutral';
    return <BadgeWrapper label={label} color={color} />;
}