export enum MeetingRoomCategoryEnum {
    ALL = "ALL",
    ADHOC = "ADHOC", // theo nhu cầu
    RECURRING = "RECURRING", // định kỳ
}

export enum BookMeetingRoomStatusEnum {
    REGISTERING = "REGISTERING", // đang đăng ký
    REGISTERED = "REGISTERED", // đã đăng ký
    RETURNED = "RETURNED", // trả lại
    USED = "USED"
}

export enum RecurrenceTypeEnum {
    DAY = "DAY",
    WEEK = "WEEK",
}

export enum RecurrenceScheduleEnum {
    MONDAY = "MONDAY",
    TUESDAY = "TUESDAY",
    WEDNESDAY = "WEDNESDAY",
    THURSDAY = "THURSDAY",
    FRIDAY = "FRIDAY",
    SATURDAY = "SATURDAY",
    SUNDAY = "SUNDAY",
}

export enum TargetUserEnum {
    PARTNER = "PARTNER", // đối tác
    INVESTOR = "INVESTOR", // chủ đầu tư
    INTERNAL = "INTERNAL", // nội bộ
}

export type MeetingRoomCategory = keyof typeof MeetingRoomCategoryEnum;
export type BookMeetingRoomStatus = keyof typeof BookMeetingRoomStatusEnum;
export type RecurrenceType = keyof typeof RecurrenceTypeEnum;
export type RecurrenceSchedule = keyof typeof RecurrenceScheduleEnum;
export type TargetUser = keyof typeof TargetUserEnum;