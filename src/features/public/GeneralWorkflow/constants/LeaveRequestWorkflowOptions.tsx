import { LeaveAprrovalCategoryEnum } from "../config/LeaveRequestWorkflowTypes";

export const LeaveApprovalCategoryOptions = [
    { value: LeaveAprrovalCategoryEnum.AnnualLeave, color: 'warning', label: 'Nghỉ phép hàng năm' },
    { value: LeaveAprrovalCategoryEnum.SickLeave, color: 'warning', label: 'Nghỉ ốm' },
    { value: LeaveAprrovalCategoryEnum.MaternityLeave, color: 'warning', label: 'Nghỉ thai sản' },
    { value: LeaveAprrovalCategoryEnum.PaternityLeave, color: 'warning', label: 'Nghỉ tang / cưới' },
    { value: LeaveAprrovalCategoryEnum.UnpaidLeave, color: 'danger', label: 'Nghỉ không lương' },
    { value: LeaveAprrovalCategoryEnum.Other, color: 'neutral', label: 'Nghỉ khác' },
];