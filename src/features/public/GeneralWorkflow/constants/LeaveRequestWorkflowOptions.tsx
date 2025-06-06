import { DayNightEnum, LeaveAprrovalCategoryEnum } from "../config/LeaveRequestWorkflowTypes";

export const LeaveApprovalCategoryOptions = [
    { value: LeaveAprrovalCategoryEnum.AnnualLeave, color: 'info', label: 'Nghỉ phép hàng năm' },
    { value: LeaveAprrovalCategoryEnum.SickLeave, color: 'info', label: 'Nghỉ ốm' },
    { value: LeaveAprrovalCategoryEnum.MaternityLeave, color: 'info', label: 'Nghỉ thai sản' },
    { value: LeaveAprrovalCategoryEnum.PaternityLeave, color: 'info', label: 'Nghỉ tang / cưới' },
    { value: LeaveAprrovalCategoryEnum.UnpaidLeave, color: 'danger', label: 'Nghỉ không lương' },
    { value: LeaveAprrovalCategoryEnum.Other, color: 'neutral', label: 'Nghỉ khác' },
];

export const DayNightOptions = [
    { value: DayNightEnum.Day, color: 'warning', label: 'Buổi sáng' },
    { value: DayNightEnum.Night, color: 'neutral', label: 'Buổi chiều' },
];

export const LeaveApprovalCategoryLabels: Record<LeaveAprrovalCategoryEnum, string> = {
    [LeaveAprrovalCategoryEnum.AnnualLeave]: 'Nghỉ phép hàng năm',
    [LeaveAprrovalCategoryEnum.SickLeave]: 'Nghỉ ốm',
    [LeaveAprrovalCategoryEnum.MaternityLeave]: 'Nghỉ thai sản',
    [LeaveAprrovalCategoryEnum.PaternityLeave]: 'Nghỉ tang / cưới',
    [LeaveAprrovalCategoryEnum.UnpaidLeave]: 'Nghỉ không lương',
    [LeaveAprrovalCategoryEnum.Other]: 'Nghỉ khác',
};

export const DayNightLabels: Record<DayNightEnum, string> = {
    [DayNightEnum.Day]: 'Buổi sáng',
    [DayNightEnum.Night]: 'Buổi chiều',
};