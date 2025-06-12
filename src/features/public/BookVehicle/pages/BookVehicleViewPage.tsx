import {
    Calendar,
    dateFnsLocalizer,
    Event as RbcEvent,
    EventPropGetter,
    Views,
    View,
    DateLocalizer,
} from 'react-big-calendar';
import { format, parse, startOfWeek, getDay, Locale } from 'date-fns';
import { vi } from 'date-fns/locale/vi';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import { FaPlus } from 'react-icons/fa';
import { IoPrint } from 'react-icons/io5';
import CustomToolbar from '../customs/CustomToolbar';
import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import { bookVehicleStatusOptions } from '../constants/BookVehicleTypeOptions';
import MeetingEvent from '../customs/CustomEventWrapper';
import { Form, Formik, useFormikContext } from 'formik';
import InputField from '../../../../components/Form/InputField';
import { useAppSelector } from '../../../../hooks/reduxHooks';
import { BookVehicleDTO, CreateBookVehicleDTO, VehicleDTO } from '../DTOs/BookVehicleDTO';
import { BookVehicleStatus, BookVehicleStatusEnum } from '../types/BookVehicleEnum';
import { bookVehiclesMockList, vehicleMockList } from '../data/BookVehicleMockList';
import { bookVehicleFormInitialValues } from '../data/BookVehicleFormInitialValues';

const locales: Record<string, Locale> = { vi };

const localizer: DateLocalizer = dateFnsLocalizer({
    format: (date: Date, formatStr: string, options?: { locale?: Locale }) =>
        format(date, formatStr, { ...options, locale: vi }),

    parse: (value: string, formatStr: string, baseDate: Date, options?: { locale?: Locale }) =>
        parse(value, formatStr, baseDate, { ...options, locale: vi }),

    startOfWeek: (date: Date) => startOfWeek(date, { locale: vi }),
    getDay: getDay,
    locales,
});

type MyEvent = {
    id: number;
    title: string;
    start: Date;
    end: Date;
    resource: BookVehicleDTO;
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

const getEventColor = (status: BookVehicleStatus): string => {
    const statusColors: Record<BookVehicleStatus, string> = {
        REGISTERING: '!bg-yellow-400',
        REGISTERED: '!bg-green-500',
        RETURNED: '!bg-red-400',
        USED: '!bg-pink-500',
        USING: '!bg-orange-500',
    };

    return statusColors[status] || '!bg-gray-400';
};

export default function BookVehicleCalendar() {
    // Custom style cho sự kiện
    const eventStyleGetter: EventPropGetter<RbcEvent> = (event) => {
        const booking = event.resource as BookVehicleDTO;
        const bgColor = getEventColor(booking.status);

        return {
            className: `rounded-lg shadow-md text-white px-2 py-1 font-medium ${bgColor} hover:scale-[1.02] transition-transform duration-200`,
            style: {},
        };
    };

    const handlePrint = () => {
        window.print();
    };

    const handleRegister = (formData: CreateBookVehicleDTO) => {
        const vehicleObj = vehicles.find(r => r.id === Number(formData.vehicle));
        if (!vehicleObj) {
            alert("Xe không hợp lệ.");
            return;
        }

        const registrantUser = employees?.find((emp) => emp.id === formData.registrantUserId) ?? undefined;
        const user = employees?.find((emp) => emp.id === formData.userId) ?? undefined;
        const driver = employees?.find((emp) => emp.id === formData.driverId) ?? undefined;

        const newBooking: BookVehicleDTO = {
            ...formData,
            mainId: '',
            createdAt: '',
            updatedAt: '',
            id: Math.floor(Math.random() * 100000),
            startDate: new Date(formData.startDate),
            endDate: new Date(formData.endDate),
            registrantUserName: registrantUser ? `${registrantUser.firstName} ${registrantUser.middleName} ${registrantUser.lastName}` : '',
            userName: user ? `${user.firstName} ${user.middleName} ${user.lastName}` : '',
            driverName: driver ? `${driver.firstName} ${driver.middleName} ${driver.lastName}` : '',
            vehicle: vehicleObj,
            status: BookVehicleStatusEnum.REGISTERED,
        };

        setBookVehicles(prev => [...prev, newBooking]);

        const modal = document.getElementById('registerModal') as HTMLDialogElement | null;
        if (modal) modal.close();
    };

    const [date, setDate] = useState<Date>(new Date());
    const [view, setView] = useState<View>(Views.MONTH);
    const [vehicles, setVehicles] = useState<VehicleDTO[]>(vehicleMockList);
    const [bookVehicles, setBookVehicles] = useState<BookVehicleDTO[]>(bookVehiclesMockList);
    const [selectedVehicleId, setSelectedVehicleId] = useState<number>(-1);
    const [selectedStatuses, setSelectedStatuses] = useState<BookVehicleStatus[]>(
        bookVehicleStatusOptions.map((opt) => opt.value)
    );
    const [selectedEvent, setSelectedEvent] = useState<BookVehicleDTO | null>(null);
    const { employees } = useAppSelector((state) => state.phoneBook);

    const events: MyEvent[] = useMemo(() => {
        return bookVehicles.map((bookVehicle) => ({
            id: bookVehicle.id,
            title: `📌 ${bookVehicle.content}`,
            start: new Date(bookVehicle.startDate),
            end: new Date(bookVehicle.endDate),
            resource: bookVehicle,
        }));
    }, [bookVehicles]);

    const selectedVehicle = useMemo(() => {
        return vehicles.find((vehicle) => vehicle.id === selectedVehicleId);
    }, [selectedVehicleId, vehicles]);

    const handleStatusChange = (status: BookVehicleStatus) => {
        setSelectedStatuses((prev) =>
            prev.includes(status) ? prev.filter((s) => s !== status) : [...prev, status]
        );
    };

    const filteredEvents = useMemo(() => {
        return events.filter((event) => {
            const r = event.resource;
            return (
                r.vehicle &&
                (selectedVehicleId === -1 ? true : r.vehicle?.id === selectedVehicleId) &&
                selectedStatuses.includes(r.status)
            );
        });
    }, [events, selectedVehicleId, selectedStatuses]);

    const onNavigate = useCallback((newDate: Date) => setDate(newDate), [setDate]);
    const onView = useCallback((newView: View) => setView(newView), [setView]);

    return (
        <div className="p-6 from-blue-50 to-purple-100 rounded-2xl shadow-lg">
            <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-700">Lịch đăng ký sử dụng xe</h2>
                <div className="flex gap-4">
                    <button
                        className="btn btn-outline btn-warning flex items-center gap-2 shadow-sm hover:scale-105 transition"
                        onClick={handlePrint}
                    >
                        <IoPrint /> In lịch đăng ký
                    </button>
                    <button
                        className="btn btn-primary flex items-center gap-2 shadow-sm hover:scale-105 transition"
                        onClick={() => {
                            const modal = document.getElementById('registerModal') as HTMLDialogElement | null;
                            if (modal) modal.showModal();
                        }}
                    >
                        <FaPlus /> Đăng ký xe
                    </button>
                </div>
            </div>

            <div className="flex flex-col gap-5 rounded-xl shadow-inner border-2 border-gray-200 p-4">
                <div className="flex items-center justify-between gap-10">
                    <div className="flex gap-3">
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Xe</legend>
                            <select
                                className="select"
                                onChange={(e) => setSelectedVehicleId(Number(e.target.value))}
                            >
                                <option value="-1">Tất cả</option>
                                {vehicles.map((vehicle) => (
                                    <option value={vehicle?.id}>{vehicle?.name}</option>
                                ))}
                            </select>
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Biển số</legend>
                            <input
                                type="text"
                                className="input w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 cursor-not-allowed"
                                value={selectedVehicle?.licensePlate ?? ''}
                                readOnly
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Tên xe</legend>
                            <input
                                type="text"
                                className="input w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 cursor-not-allowed"
                                value={selectedVehicle?.name ?? ''}
                                readOnly
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Số ghế</legend>
                            <input
                                type="text"
                                className="input w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 cursor-not-allowed"
                                value={selectedVehicle?.seats ?? ''}
                                readOnly
                            />
                        </fieldset>
                        <fieldset className="fieldset">
                            <legend className="fieldset-legend">Vị trí</legend>
                            <input
                                type="text"
                                className="input w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-100 text-gray-700 cursor-not-allowed"
                                value={selectedVehicle?.location ?? ''}
                                readOnly
                            />
                        </fieldset>
                    </div>

                    <div className="flex flex-col gap-5">
                        <label className="label text-xs">
                            <input type="checkbox" className="checkbox checkbox-xs checkbox-secondary" />
                            Xem của tôi
                        </label>
                        <div className="flex gap-2">
                            {bookVehicleStatusOptions.map((status) => (
                                <label className="label text-xs">
                                    <input
                                        value={status.value}
                                        type="checkbox"
                                        defaultChecked
                                        className="checkbox checkbox-xs checkbox-accent"
                                        onChange={(e) => handleStatusChange(status.value)}
                                    />
                                    {status.label}
                                </label>
                            ))}
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
                        const booking = event.resource as BookVehicleDTO;
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
                        next: '→',
                        previous: '←',
                        today: 'Hôm nay',
                        yesterday: 'Hôm qua',
                        tomorrow: 'Ngày mai',
                        month: 'Tháng',
                        week: 'Tuần',
                        day: 'Ngày',
                        work_week: 'Tuần làm việc',
                        agenda: 'Danh sách',
                        date: 'Ngày',
                        time: 'Giờ',
                        event: 'Sự kiện',
                        showMore: (total: number) => `+${total} sự kiện khác`,
                        noEventsInRange: 'Không có sự kiện trong khoảng thời gian này',
                    }}
                    eventPropGetter={eventStyleGetter}
                />
            </div>
            <div className="mt-6 bg-white p-4 rounded-xl shadow-md">
                <h3 className="text-lg font-bold text-gray-700 mb-3">🗂️ Chú thích trạng thái đăng ký xe</h3>
                <div className="flex justify-around gap-4 text-sm">
                    <div className="flex items-center gap-3">
                        <span className="w-4 h-4 rounded-full bg-yellow-400 ring-1 ring-yellow-500 shadow-sm"></span>
                        <span className="text-gray-700">Đang đăng ký</span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-4 h-4 rounded-full bg-green-500 ring-1 ring-green-600 shadow-sm"></span>
                        <span className="text-gray-700">
                            Đã đăng ký (<span className="italic text-gray-500">Theo nhu cầu</span>)
                        </span>
                    </div>
                    <div className="flex items-center gap-3">
                        <span className="w-4 h-4 rounded-full bg-blue-500 ring-1 ring-green-600 shadow-sm"></span>
                        <span className="text-gray-700">
                            Đã đăng ký (<span className="italic text-gray-500">Theo định kỳ</span>)
                        </span>
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
                    <h3 className="font-bold text-lg">Đăng ký sử dụng xe</h3>
                    <Formik<CreateBookVehicleDTO>
                        initialValues={bookVehicleFormInitialValues}
                        // validationSchema={documentFormValidationSchema}
                        onSubmit={handleRegister}
                        enableReinitialize
                    >
                        {() => (
                            <Form
                                className="space-y-6"
                                onKeyDown={(e) => {
                                    if (e.key === 'Enter' && (e.target as HTMLElement).closest('.react-tags')) {
                                        e.preventDefault();
                                    }
                                }}
                            >
                                <ClearFormOnModalClose modalId="registerModal" />
                                <div className="grid grid-cols-2 md:grid-cols-2 gap-6">
                                    <InputField
                                        name="vehicle"
                                        type="select-input"
                                        options={vehicles.map((vehicle) => ({label: vehicle.name, value: vehicle.id}))}
                                        label="Xe"
                                        required
                                    />
                                    <InputField
                                        name="driverId"
                                        type="select-input"
                                        options={employees?.map((emp) => ({label: `${emp.mainId} - ${emp.firstName} ${emp.middleName} ${emp.lastName}`, value: emp.id}))}
                                        label="Người lái"
                                        required
                                    />
                                    <InputField
                                        name="registrantUserId"
                                        type="select-input"
                                        options={employees?.map((emp) => ({label: `${emp.mainId} - ${emp.firstName} ${emp.middleName} ${emp.lastName}`, value: emp.id}))}
                                        label="Người đăng ký"
                                        required
                                    />
                                    <InputField
                                        name="userId"
                                        type="select-input"
                                        options={employees?.map((emp) => ({label: `${emp.mainId} - ${emp.firstName} ${emp.middleName} ${emp.lastName}`, value: emp.id}))}
                                        label="Người sử dụng"
                                        required
                                    />
                                    <InputField
                                        name="status"
                                        type="select"
                                        options={bookVehicleStatusOptions}
                                        label="Trạng thái"
                                        disabled
                                    />
                                    <InputField name="userCount" label="Số người sử dụng" type="number" />
                                    <InputField name="startDate" type="datetime" label="Ngày bắt đầu" />
                                    <InputField name="endDate" type="datetime" label="Ngày kết thúc" />
                                    <InputField name="departureLocation" label="Nơi khởi hành" />
                                    <InputField name="arrivalLocation" label="Nơi đến" />
                                    <InputField name="content" type="textarea" label="Nội dung" />
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
        </div>
    );
}
