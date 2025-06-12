import {
    Calendar,
    dateFnsLocalizer,
    Event as RbcEvent,
    EventPropGetter,
    Views,
    View,
    DateLocalizer,
} from "react-big-calendar"
import { format, parse, startOfWeek, getDay, Locale } from "date-fns"
import { vi } from "date-fns/locale/vi"
import "react-big-calendar/lib/css/react-big-calendar.css"
import { FaPlus } from "react-icons/fa"
import { IoPrint } from "react-icons/io5";
import CustomToolbar from "../customs/CustomToolbar"
import { useCallback, useEffect, useMemo, useRef, useState } from "react"
import { bookMeetingRoomsMockList, meetingRoomsMockList } from "../data/BookMeetingRoomMockList"
import { BookMeetingRoomDTO, CreateBookMeetingRoomDTO, RoomDTO, UpdateBookMeetingRoomDTO } from "../DTOs/BookMeetingRoomDTO"
import { BookMeetingRoomStatus, BookMeetingRoomStatusEnum, MeetingRoomCategory, MeetingRoomCategoryEnum } from "../types/BookMeetingRoomEnum"
import { bookMeetingRoomStatusEnumOptions, bookMeetingStatusOptions, meetingRoomCategoryOptions, recurrenceTypeOptions, targetUserOptions } from "../constants/BookMeetingRoomTypeOptions"
import MeetingEvent from "../customs/CustomEventWrapper"
import { Form, Formik, useFormikContext } from "formik"
import InputField from "../../../../components/Form/InputField"
import { bookMeetingRoomFormInitialValues } from "../DTOs/BookMeetingRoomFormInitialValues"
import { useAppSelector } from "../../../../hooks/reduxHooks"

const locales: Record<string, Locale> = { vi }

const localizer: DateLocalizer = dateFnsLocalizer({
    format: (date: Date, formatStr: string, options?: { locale?: Locale }) =>
        format(date, formatStr, { ...options, locale: vi }),

    parse: (
        value: string,
        formatStr: string,
        baseDate: Date,
        options?: { locale?: Locale }
    ) => parse(value, formatStr, baseDate, { ...options, locale: vi }),

    startOfWeek: (date: Date) => startOfWeek(date, { locale: vi }),
    getDay: getDay,
    locales,
})


type MyEvent = {
    id: number,
    title: string,
    start: Date,
    end: Date,
    resource: BookMeetingRoomDTO
}

// const eventColors: Record<BookMeetingRoomStatus, string> = {
//     REGISTERING: "!bg-yellow-400",
//     REGISTERED: "!bg-green-500",
//     RETURNED: "!bg-red-400",
// }

const AutoUpdateFields = () => {
    const { values, setFieldValue } = useFormikContext<any>();

    useEffect(() => {
        const isRecurring = values.category === 'RECURRING';

        if (!isRecurring) {
            setFieldValue('recurrenceType', '');
        }

        const input = document.querySelector('[name="recurrenceType"]') as HTMLSelectElement | null;
        if (input) {
            input.disabled = !isRecurring;
        }
    }, [values.category]);

    return null;
};

const ClearFormOnModalClose = ({ modalId }: { modalId: string }) => {
    const { resetForm } = useFormikContext();

    useEffect(() => {
        const modal = document.getElementById(modalId) as HTMLDialogElement | null;
        if (!modal) return;

        const handleClose = () => {
            resetForm();
        };

        modal.addEventListener('close', handleClose);

        return () => {
            modal.removeEventListener('close', handleClose);
        };
    }, [modalId, resetForm]);

    return null;
};

const getEventColor = (status: BookMeetingRoomStatus, category: MeetingRoomCategory): string => {
    if (status === "REGISTERED") {
        return category === "RECURRING" ? "!bg-blue-500" : "!bg-green-500"
    }

    const statusColors: Record<BookMeetingRoomStatus, string> = {
        REGISTERING: "!bg-yellow-400",
        REGISTERED: "!bg-green-500",
        RETURNED: "!bg-red-400",
        USED: "!bg-pink-500"
    }

    return statusColors[status] || "!bg-gray-400"
}

export default function MeetingRoomCalendar() {
    // Custom style cho sự kiện
    const eventStyleGetter: EventPropGetter<RbcEvent> = (event) => {
        const booking = event.resource as BookMeetingRoomDTO
        const bgColor = getEventColor(booking.status, booking.category) // eventColors[booking.status] || "bg-gray-400"

        return {
            className: `rounded-lg shadow-md text-white px-2 py-1 font-medium ${bgColor} hover:scale-[1.02] transition-transform duration-200`,
            style: {},
        }
    }

    const handlePrint = () => {
        window.print()
    }

    const handleRegister = (formData: CreateBookMeetingRoomDTO) => {
        const roomObj = meetingRooms.find(r => r.id === Number(formData.room));
        if (!roomObj) {
            alert("Phòng họp không hợp lệ.");
            return;
        }

        const user = employees?.find((emp) => emp.id === formData.userId) ?? undefined;

        const newBooking: BookMeetingRoomDTO = {
            ...formData,
            mainId: '',
            createdAt: '',
            updatedAt: '',
            id: Math.floor(Math.random() * 100000),
            startMeetingDate: new Date(formData.startMeetingDate),
            endMeetingDate: new Date(formData.endMeetingDate),
            userName: user ? `${user.firstName} ${user.middleName} ${user.lastName}` : '',
            room: roomObj,
            status: BookMeetingRoomStatusEnum.REGISTERED,
            category: formData.category,
        };

        setBookMeetingRooms(prev => [...prev, newBooking]);

        const modal = document.getElementById('registerModal') as HTMLDialogElement | null;
        if (modal) modal.close();
    }

    const ALL_CATEGORIES: MeetingRoomCategory[] = meetingRoomCategoryOptions.map(opt => opt.value)

    const [date, setDate] = useState<Date>(new Date());
    const [view, setView] = useState<View>(Views.MONTH);
    const [meetingRooms, setMeetingRooms] = useState<RoomDTO[]>(meetingRoomsMockList);
    const [bookMeetingRooms, setBookMeetingRooms] = useState<BookMeetingRoomDTO[]>(bookMeetingRoomsMockList);
    const [selectedRoomId, setSelectedRoomId] = useState<number>(meetingRooms[0]?.id ?? 0)
    const [selectedStatuses, setSelectedStatuses] = useState<BookMeetingRoomStatus[]>(
        bookMeetingRoomStatusEnumOptions.map(opt => opt.value)
    );
    const [selectedEvent, setSelectedEvent] = useState<BookMeetingRoomDTO | null>(null);
    const [selectedCategories, setSelectedCategories] = useState<MeetingRoomCategory[]>(ALL_CATEGORIES);
    const { employees } = useAppSelector((state) => state.phoneBook);

    const registerRecurrenceTypeRef = useRef<any>(null);


    const events: MyEvent[] = useMemo(() => {
        return bookMeetingRooms.map((meeting) => ({
            id: meeting.id,
            title: `📌 ${meeting.registrationDetails}`,
            start: new Date(meeting.startMeetingDate),
            end: new Date(meeting.endMeetingDate),
            resource: meeting,
        }))
    }, [bookMeetingRooms]);

    const selectedRoom = useMemo(() => {
        return meetingRooms.find((room) => room.id === selectedRoomId)
    }, [selectedRoomId, meetingRooms])

    const handleStatusChange = (status: BookMeetingRoomStatus) => {
        setSelectedStatuses((prev) =>
            prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
        );
    };
    const handleCategoryChange = (cate: MeetingRoomCategory) => {
        setSelectedCategories(prev => {
            const next = prev.includes(cate)
                ? prev.filter(c => c !== cate)
                : [...prev, cate];

            return cate === MeetingRoomCategoryEnum.ALL ? ALL_CATEGORIES : next;
        });
    };

    const filteredEvents = useMemo(() => {
        return events.filter((event) => {
            const r = event.resource;
            return (
                r.room.id === selectedRoomId &&
                selectedStatuses.includes(r.status) &&
                selectedCategories.includes(r.category)
            );
        });
    }, [events, selectedRoomId, selectedStatuses, selectedCategories]);

    const onNavigate = useCallback((newDate: Date) => setDate(newDate), [setDate]);
    const onView = useCallback((newView: View) => setView(newView), [setView]);

    return (
        <div className="p-6 from-blue-50 to-purple-100 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-700">Lịch đăng ký phòng họp</h2>
                <div className="flex gap-4">
                    <button
                        className="btn btn-outline btn-warning flex items-center gap-2 shadow-sm hover:scale-105 transition"
                        onClick={handlePrint}
                    >
                        <IoPrint /> In lịch họp
                    </button>
                    <button
                        className="btn btn-primary flex items-center gap-2 shadow-sm hover:scale-105 transition"
                        onClick={() => {
                            const modal = document.getElementById('registerModal') as HTMLDialogElement | null;
                            if (modal) modal.showModal();
                        }}
                    >
                        <FaPlus /> Đăng ký lịch họp
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-5 rounded-xl shadow-inner border-2 border-gray-200 p-4">
                <div className="flex items-center justify-between gap-10">
                    <div className="flex gap-3">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Loại</legend>
                            <select className="select" onChange={(e) => handleCategoryChange(e.target.value as MeetingRoomCategory)}>
                                {
                                    meetingRoomCategoryOptions.map((cate) => (
                                        <option value={cate.value}>{cate.label}</option>
                                    ))
                                }
                            </select>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Phòng họp</legend>
                            <select className="select" onChange={(e) => setSelectedRoomId(Number(e.target.value))}>
                                {
                                    meetingRooms.map((room) => (
                                        <option value={room?.id}>{room?.name}</option>
                                    ))
                                }
                            </select>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Địa điểm</legend>
                            <input type="text" className="input w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 cursor-not-allowed" value={selectedRoom?.location ?? ""} readOnly />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Số ghế</legend>
                            <input type="text" className="input w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 cursor-not-allowed" value={selectedRoom?.seats ?? ""} readOnly />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Thiết bị phụ trợ</legend>
                            <input type="text" className="input w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 cursor-not-allowed" value={selectedRoom?.equipments ?? ""} readOnly />
                        </fieldset>
                    </div>

                    <div className="flex flex-col gap-5">
                        <label className="label text-xs">
                            <input type="checkbox" className="checkbox checkbox-xs checkbox-secondary" />
                            Xem của tôi
                        </label>
                        <div className="flex gap-2">
                            {
                                bookMeetingRoomStatusEnumOptions.map((status) => (
                                    <label className="label text-xs">
                                        <input value={status.value} type="checkbox" defaultChecked className="checkbox checkbox-xs checkbox-accent"
                                            onChange={(e) => handleStatusChange(status.value)} />
                                        {status.label}
                                    </label>
                                ))
                            }
                        </div>
                    </div>

                </div>

                <Calendar<MyEvent>
                    localizer={localizer}
                    events={filteredEvents}
                    startAccessor={(event) => event.start}
                    endAccessor={(event) => event.end}
                    views={[Views.MONTH, Views.WEEK, Views.DAY, Views.AGENDA]}
                    popup={true}
                    style={{ height: 600 }}
                    defaultDate={new Date()}
                    defaultView="month"
                    tooltipAccessor={null}
                    selectable={true}
                    onSelectEvent={(event) => {
                        const booking = event.resource as BookMeetingRoomDTO;
                        booking.note = booking.note == undefined ? '' : booking.note;
                        setSelectedEvent(booking);
                        const modal = document.getElementById('updateModal') as HTMLDialogElement | null;
                        if (modal) modal.showModal();
                    }}
                    components={{
                        toolbar: CustomToolbar,
                        event: MeetingEvent,
                    }}
                    date={date}
                    view={view}
                    onNavigate={onNavigate}
                    onView={onView}
                    messages={{
                        next: "→",
                        previous: "←",
                        today: "Hôm nay",
                        yesterday: "Hôm qua",
                        tomorrow: "Ngày mai",
                        month: "Tháng",
                        week: "Tuần",
                        day: "Ngày",
                        work_week: "Tuần làm việc",
                        agenda: "Danh sách",
                        date: "Ngày",
                        time: "Giờ",
                        event: "Sự kiện",
                        showMore: (total: number) => `+${total} sự kiện khác`,
                        noEventsInRange: "Không có sự kiện trong khoảng thời gian này",
                    }}
                    // tooltipAccessor={(event) => {
                    //     const r = event.resource as BookMeetingRoomDTO
                    //     return `👤 Người sử dụng: ${r.userName}\n🏢 Phòng: ${r.room.name}\n🛠️ Thiết bị: ${r.room.equipments}`
                    // }}
                    eventPropGetter={eventStyleGetter}
                />
            </div>
            <div className="mt-6 bg-white p-4 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-700 mb-3">🗂️ Chú thích trạng thái lịch họp</h3>
                <div className="flex justify-around gap-4 text-sm">
                    <div className="flex items-center gap-3">
                        <span className="w-4 h-4 rounded-full bg-yellow-400 ring-1 ring-yellow-500 shadow-sm"></span>
                        <span className="text-gray-700">Đang đăng ký</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-4 h-4 rounded-full bg-green-500 ring-1 ring-green-600 shadow-sm"></span>
                        <span className="text-gray-700">Đã đăng ký (<span className="italic text-gray-500">Theo nhu cầu</span>)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-4 h-4 rounded-full bg-blue-500 ring-1 ring-green-600 shadow-sm"></span>
                        <span className="text-gray-700">Đã đăng ký (<span className="italic text-gray-500">Theo định kỳ</span>)</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-4 h-4 rounded-full bg-red-400 ring-1 ring-red-500 shadow-sm"></span>
                        <span className="text-gray-700">Trả lại</span>
                    </div>
                </div>
            </div>


            <dialog id="registerModal" className="modal">
                <div className="modal-box resize overflow-auto max-w-full max-h-full">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Đăng ký sử dụng phòng họp</h3>
                    <Formik<CreateBookMeetingRoomDTO>
                        initialValues={bookMeetingRoomFormInitialValues}
                        // validationSchema={documentFormValidationSchema}
                        onSubmit={handleRegister} enableReinitialize>
                        {() => (
                            <Form className="space-y-6"
                                onKeyDown={(e) => {
                                    if (
                                        e.key === 'Enter' &&
                                        (e.target as HTMLElement).closest('.react-tags')
                                    ) {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                <AutoUpdateFields />
                                <ClearFormOnModalClose modalId="registerModal"/>
                                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                                    <InputField name="category" type="select"
                                        options={meetingRoomCategoryOptions.filter((cate) => cate.value.toUpperCase() !== MeetingRoomCategoryEnum.ALL)} label="Loại" required />
                                    <InputField name="room" type="select-input" options={meetingRooms.map((room) => ({ label: room.name, value: room.id }))} label="Phòng họp" required />
                                    <InputField name="recurrenceType" type="select" options={[{ label: '', value: '' }, ...recurrenceTypeOptions]} label="Loại định kỳ" disabled required />
                                    <InputField name="status" type="select" options={bookMeetingStatusOptions} label="Trạng thái" disabled />
                                    <InputField name="startMeetingDate" type="datetime" label="Ngày bắt đầu" />
                                    <InputField name="endMeetingDate" type="datetime" label="Ngày kết thúc" />
                                    <InputField name="targetUser" type="select" options={targetUserOptions} label="Đối tượng SD" />
                                    <InputField name="registrantUserId" type="select-input" options={
                                        employees?.map((emp) => ({ label: `${emp.mainId} - ${emp.firstName} ${emp.middleName} ${emp.lastName}`, value: emp.id }))}
                                        label="Người đăng ký" required />
                                    <InputField name="userId" type="select-input" options={
                                        employees?.map((emp) => ({ label: `${emp.mainId} - ${emp.firstName} ${emp.middleName} ${emp.lastName}`, value: emp.id }))}
                                        label="Người sử dụng" required />
                                    <InputField name="registrationDetails" type="textarea" label="Nội dung đăng ký" required />
                                    <InputField name="note" type="textarea" label="Ghi chú" />
                                </div>
                                <div className="pt-4 text-right">
                                    <button type="submit" className="btn btn-primary">
                                        Đăng ký
                                    </button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>


            <dialog id="updateModal" className="modal">
                <div className="modal-box resize overflow-auto max-w-full max-h-full">
                    <form method="dialog">
                        <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
                    </form>
                    <h3 className="font-bold text-lg">Đăng ký sử dụng phòng họp</h3>
                    <Formik<UpdateBookMeetingRoomDTO>
                        initialValues={selectedEvent as UpdateBookMeetingRoomDTO}
                        // validationSchema={documentFormValidationSchema}
                        onSubmit={() => { }} enableReinitialize>
                        {(formData) => (
                            <Form className="space-y-6"
                                onKeyDown={(e) => {
                                    if (
                                        e.key === 'Enter' &&
                                        (e.target as HTMLElement).closest('.react-tags')
                                    ) {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                <ClearFormOnModalClose modalId="updateModal"/>
                                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                                    <InputField name="category" type="select" options={meetingRoomCategoryOptions} label="Loại" disabled />
                                    <InputField name="room.id" type="select-input" options={meetingRooms.map((room) => ({ label: room.name, value: room.id }))} label="Phòng họp" disabled />
                                    <InputField name="recurrenceType" type="select" options={[{ label: '', value: '' }, ...recurrenceTypeOptions]} label="Loại định kỳ" disabled />
                                    <InputField name="status" type="select" options={bookMeetingStatusOptions} label="Trạng thái" disabled />
                                    <InputField name="startMeetingDate" type="datetime" label="Ngày bắt đầu" disabled />
                                    <InputField name="endMeetingDate" type="datetime" label="Ngày kết thúc" disabled />
                                    <InputField name="targetUser" type="select" options={targetUserOptions} label="Đối tượng SD" disabled />
                                    <InputField name="registrantUserId" type="select-input" options={
                                        employees?.map((emp) => ({ label: `${emp.mainId} - ${emp.firstName} ${emp.middleName} ${emp.lastName}`, value: emp.id }))}
                                        label="Người đăng ký" disabled />
                                    <InputField name="userId" type="select-input" options={
                                        employees?.map((emp) => ({ label: `${emp.mainId} - ${emp.firstName} ${emp.middleName} ${emp.lastName}`, value: emp.id }))}
                                        label="Người sử dụng" disabled />
                                    <InputField name="registrationDetails" type="textarea" label="Nội dung đăng ký" disabled />
                                    <InputField name="note" type="textarea" label="Ghi chú" disabled />
                                </div>
                                <div className="pt-4 text-right">
                                    {formData.values?.status === BookMeetingRoomStatusEnum.REGISTERED ? 
                                        <button type="submit" className="btn btn-error">
                                            Hủy đăng ký
                                        </button>
                                        : undefined
                                    }
                                    
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
                <form method="dialog" className="modal-backdrop">
                    <button>close</button>
                </form>
            </dialog>

        </div>
    )
}
