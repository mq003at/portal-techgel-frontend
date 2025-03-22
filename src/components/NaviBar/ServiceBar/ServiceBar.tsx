import IconWrapper from "../../Wrapper/IconWrapper";
import { Link } from "react-router";
import ImageWrapper from "../../Wrapper/ImageWrapper";

const services = [
  {
    title: "Thông Báo",
    icon: (
      <IconWrapper src="../assets/icon/announcement.svg" title="Thông báo" />
    ),
    navigateTo: "/main/announcement",
  },
  {
    title: "Danh Sách Nhân Viên",
    icon: (
      <IconWrapper
        src="../assets/icon/employeecompany.svg"
        title="Employee List"
      />
    ),
    navigateTo: "/main/employees",
  },
  {
    title: "Phân Ban",
    icon: (
      <IconWrapper src="../assets/icon/humanresources.svg" title="Phân Ban" />
    ),
    navigateTo: "/main/organization",
  },
  {
    title: "Văn Bản",
    icon: <IconWrapper src="../assets/icon/document.svg" title="Document" />,
    navigateTo: "",
  },
  {
    title: "Nghỉ Phép",
    icon: <IconWrapper src="../assets/icon/onleave.svg" title="On Leave" />,
    navigateTo: "",
  },
  {
    title: "Lịch Làm Việc",
    icon: (
      <IconWrapper src="../assets/icon/calendar.svg" title="Work Schedule" />
    ),
    navigateTo: "",
  },
  {
    title: "Đặt Phòng Họp",
    icon: (
      <IconWrapper src="../assets/icon/meeting.svg" title="Meeting Schedule" />
    ),
    navigateTo: "",
  },
];

export default function ServiceBar() {
  return (
    <div className="w-64 bg-base-200 p-4 h-screen shadow-md">
      <ImageWrapper
        src={"../assets/logo-main-600-150-transparent.png"}
        alt="Logo-Techgel"
        title="Logo Techgel"
        height={60}
        width={250}
      />
      <ul className="menu menu-compact">
        {services.map((service, index) => (
          <li key={index}>
            <Link
              to={service.navigateTo}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-300 transition-all"
            >
              {service.icon}
              <span>{service.title}</span>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
