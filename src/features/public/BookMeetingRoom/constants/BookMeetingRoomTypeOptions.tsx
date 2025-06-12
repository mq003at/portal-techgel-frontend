import { BookMeetingRoomStatusEnum, MeetingRoomCategoryEnum, RecurrenceScheduleEnum, RecurrenceTypeEnum, TargetUserEnum } from "../types/BookMeetingRoomEnum";

export const meetingRoomCategoryOptions = [
    { value: MeetingRoomCategoryEnum.ALL, label: 'Tất cả' },
    { value: MeetingRoomCategoryEnum.ADHOC, label: 'Đặt phòng theo nhu cầu' },
    { value: MeetingRoomCategoryEnum.RECURRING, label: 'Đặt phòng định kỳ' },
];

export const bookMeetingRoomStatusEnumOptions = [
    { value: BookMeetingRoomStatusEnum.REGISTERING, label: 'Đang đăng ký' },
    { value: BookMeetingRoomStatusEnum.REGISTERED, label: 'Đã đăng ký' },
    { value: BookMeetingRoomStatusEnum.RETURNED, label: 'Trả lại' },
];

export const recurrenceTypeOptions = [
    { value: RecurrenceTypeEnum.DAY, label: 'Ngày' },
    { value: RecurrenceTypeEnum.WEEK, label: 'Tuần' },
];

export const recurrenceScheduleOptions = [
    { value: RecurrenceScheduleEnum.MONDAY, label: 'Thứ hai' },
    { value: RecurrenceScheduleEnum.TUESDAY, label: 'Thứ ba' },
    { value: RecurrenceScheduleEnum.WEDNESDAY, label: 'Thứ tư' },
    { value: RecurrenceScheduleEnum.THURSDAY, label: 'Thứ năm' },
    { value: RecurrenceScheduleEnum.FRIDAY, label: 'Thứ sáu' },
    { value: RecurrenceScheduleEnum.SATURDAY, label: 'Thứ bảy' },
    { value: RecurrenceScheduleEnum.SUNDAY, label: 'Chủ nhật' }
];

export const bookMeetingStatusOptions = [
    { value: BookMeetingRoomStatusEnum.REGISTERED, label: 'Đã đăng ký' },
    { value: BookMeetingRoomStatusEnum.REGISTERING, label: 'Đang đăng ký' },
    { value: BookMeetingRoomStatusEnum.RETURNED, label: 'Trả lại' },
    { value: BookMeetingRoomStatusEnum.USED, label: 'Đã sử dụng' },
];

export const targetUserOptions = [
    { value: TargetUserEnum.INTERNAL, label: 'Nội bộ' },
    { value: TargetUserEnum.INVESTOR, label: 'Chủ đầu tư' },
    { value: TargetUserEnum.PARTNER, label: 'Đối tác' },
];