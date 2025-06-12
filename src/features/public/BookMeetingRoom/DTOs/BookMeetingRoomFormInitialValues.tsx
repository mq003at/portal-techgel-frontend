import { BookMeetingRoomStatusEnum, MeetingRoomCategoryEnum, RecurrenceScheduleEnum, RecurrenceTypeEnum, TargetUserEnum } from "../types/BookMeetingRoomEnum";
import { CreateBookMeetingRoomDTO } from "./BookMeetingRoomDTO";

export const bookMeetingRoomFormInitialValues: CreateBookMeetingRoomDTO = {
  category: MeetingRoomCategoryEnum.ADHOC,
  room: {
    id: 0,
    mainId: "",
    createdAt: "",
    updatedAt: "",
    name: "",
    location: "",
    seats: 0,
    equipments: ""
  },
  startMeetingDate: new Date(),
  endMeetingDate: new Date(), 
  status: BookMeetingRoomStatusEnum.REGISTERING, 
  targetUser: TargetUserEnum.INTERNAL, 
  registrantUserId: 0, 
  registrantUserName: '',
  userId: 0,
  userName: '',
  cancellationReason: '',
  registrationDetails: '',
  note: ''
};
