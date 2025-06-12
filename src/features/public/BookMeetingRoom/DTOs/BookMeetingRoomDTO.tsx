import { BaseReadDTO } from "../../../../types/DTOs/BaseDTO";
import { BookMeetingRoomStatus, MeetingRoomCategory, RecurrenceSchedule, RecurrenceType, TargetUser } from "../types/BookMeetingRoomEnum";

export interface BookMeetingRoomDTO extends BaseReadDTO {
    category: MeetingRoomCategory,
    room: RoomDTO, // phòng
    startMeetingDate: Date, // ngày giờ bắt đầu
    endMeetingDate: Date, // ngày giờ kết thúc
    status: BookMeetingRoomStatus, // trạng thái
    recurrenceType?: RecurrenceType, // loại định kỳ
    recurrenceSchedule?: RecurrenceSchedule, // lịch định kỳ
    targetUser: TargetUser, // đối tượng sử dụng
    registrantUserId: number, // id người đăng ký
    registrantUserName: string, // tên người đăng ký
    userId: number, // id người sử dụng
    userName: string, // tên người sử dụng
    cancellationReason?: string, // lý do hủy
    registrationDetails: string, // lý do đăng ký
    note?: string // ghi chú
}

export interface RoomDTO extends BaseReadDTO {
    name: string,
    location: string,
    seats: number, // số ghế
    equipments: string, // thiết bị phụ trợ
}


export interface CreateBookMeetingRoomDTO {
    category: MeetingRoomCategory,
    room: RoomDTO, // phòng
    startMeetingDate: Date, // ngày giờ bắt đầu
    endMeetingDate: Date, // ngày giờ kết thúc
    status: BookMeetingRoomStatus, // trạng thái
    recurrenceType?: RecurrenceType, // loại định kỳ
    recurrenceSchedule?: RecurrenceSchedule, // lịch định kỳ
    targetUser: TargetUser, // đối tượng sử dụng
    registrantUserId: number, // id người đăng ký
    registrantUserName: string, // tên người đăng ký
    userId: number, // id người sử dụng
    userName: string, // tên người sử dụng
    cancellationReason?: string, // lý do hủy
    registrationDetails: string, // lý do đăng ký
    note?: string // ghi chú
}

export interface UpdateBookMeetingRoomDTO {
    category: MeetingRoomCategory,
    room: RoomDTO, // phòng
    startMeetingDate: Date, // ngày giờ bắt đầu
    endMeetingDate: Date, // ngày giờ kết thúc
    status: BookMeetingRoomStatus, // trạng thái
    recurrenceType?: RecurrenceType, // loại định kỳ
    recurrenceSchedule?: RecurrenceSchedule, // lịch định kỳ
    targetUser: TargetUser, // đối tượng sử dụng
    registrantUserId: number, // id người đăng ký
    registrantUserName: string, // tên người đăng ký
    userId: number, // id người sử dụng
    userName: string, // tên người sử dụng
    cancellationReason?: string, // lý do hủy
    registrationDetails: string, // lý do đăng ký
    note?: string // ghi chú
}

