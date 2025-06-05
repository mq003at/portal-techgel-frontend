import { BadgeWrapper } from "../../../../components/Wrapper/BadgeWrapper";

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

    const statusMeta = options.find((opt) => String(opt.value).toLowerCase() === String(statusValue).toLowerCase());
    const label = statusMeta?.label || statusValue;
    const color = statusMeta?.color || 'neutral';
    return <BadgeWrapper label={label} color={color} />;
}