import { NavigateAction, ToolbarProps, View } from "react-big-calendar"
import { FaChevronLeft, FaChevronRight } from "react-icons/fa"

export default function CustomToolbar({
    label,
    onNavigate,
    onView,
    view,
}: ToolbarProps<any>) {
    const handleNavigate = (action: NavigateAction) => {
        onNavigate(action);
    }

    const handleViewChange = (newView: View) => {
        onView(newView);
    }

    return (
        <div className="flex justify-between items-center mb-4 px-2">
            {/* Bên trái: nút chuyển ngày */}
            <div className="flex items-center gap-2">
                <button
                    className="btn btn-sm btn-outline btn-secondary"
                    onClick={() => handleNavigate("PREV")}
                >
                    <FaChevronLeft />
                </button>
                <button
                    className="btn btn-sm btn-outline btn-secondary"
                    onClick={() => handleNavigate("TODAY")}
                >
                    Hôm nay
                </button>
                <button
                    className="btn btn-sm btn-outline btn-secondary"
                    onClick={() => handleNavigate("NEXT")}
                >
                    <FaChevronRight />
                </button>
            </div>

            {/* Ở giữa: tiêu đề tháng hiện tại */}
            <div className="text-lg font-semibold text-gray-700">{label}</div>

            {/* Bên phải: lựa chọn chế độ xem */}
            <div className="flex gap-1">
                {[
                    { key: "month" as View, label: "Tháng" },
                    { key: "week" as View, label: "Tuần" },
                    { key: "day" as View, label: "Ngày" },
                    { key: "agenda" as View, label: "Danh sách"}
                ].map(({ key, label }) => (
                    <button
                        key={key}
                        onClick={() => handleViewChange(key)}
                        className={`btn btn-sm ${view === key ? "btn-primary" : "btn-outline"
                            }`}
                    >
                        {label}
                    </button>
                ))}
            </div>
        </div>
    )
}
