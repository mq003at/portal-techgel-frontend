export enum LeaveApprovalStepEnum {
    ManagerApproval = 0,
    CBApproval = 1,
    SummaryTracking = 2,
    HRHeadApproval = 3,
    ExecutiveApproval = 4,
    FinalizeToPayroll = 5
}

export enum LeaveAprrovalCategoryEnum
{
    // Nghỉ phép
    // 0: Nghỉ phép hàng năm
    // 1: Nghỉ ốm
    // 2: Nghỉ thai sản
    // 3: Nghỉ tang / cưới
    // 4: Nghỉ không lương
    // 5: Nghỉ khác
    AnnualLeave = "AnnualLeave",
    SickLeave = "SickLeave",
    MaternityLeave = "MaternityLeave",
    PaternityLeave = "PaternityLeave",
    UnpaidLeave = "UnpaidLeave",
    Other = "Other",
}

export enum DayNightEnum
{
    Day = 0,
    Night = 1,
}

export type LeaveApprovalStepType = keyof typeof LeaveApprovalStepEnum;
export type LeaveAprrovalCategoryType = keyof typeof LeaveApprovalStepEnum;
export type DayNightType = keyof typeof DayNightEnum;
