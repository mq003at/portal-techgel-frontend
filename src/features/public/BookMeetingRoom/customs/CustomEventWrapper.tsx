import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";
import { Event as RbcEvent } from "react-big-calendar"
import { BookMeetingRoomDTO } from "../DTOs/BookMeetingRoomDTO";
import 'tippy.js/animations/scale.css';
import 'tippy.js/themes/light.css';
import { format } from "date-fns";

export type MyEvent = RbcEvent & {
    id: number;
    title: string;
    start: Date;
    end: Date;
    resource: BookMeetingRoomDTO;
};

interface CustomEventProps {
    event: MyEvent;
}

export default function MeetingEvent({ event }: CustomEventProps) {
    const r = event.resource;

    return (
        <Tippy
            content={
                <div className="text-sm space-y-1">
                    <div><strong>{format(r.startMeetingDate, 'dd/MM/yyyy HH:mm:ss')} - {format(r.endMeetingDate, 'dd/MM/yyyy HH:mm:ss')}</strong></div>
                    <div><strong>👤 Người sử dụng:</strong> {r.userName}</div>
                    <div><strong>🏢 Phòng họp:</strong> {r.room.name}</div>
                    <div><strong>🛠️ Thiết bị:</strong> {r.room.equipments || 'Không có'}</div>
                    <div><strong>📝 Mục đích:</strong> {r.registrationDetails}</div>
                </div>
            }
            placement="top"
            animation="scale"
            theme="light"
            duration={[200, 150]}
            arrow={false}
        >
            <div className="w-full h-full px-2 py-1 truncate cursor-pointer">
                {event.title}
            </div>
        </Tippy>
    );
}
