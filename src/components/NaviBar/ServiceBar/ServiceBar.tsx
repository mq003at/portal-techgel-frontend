import IconWrapper from "../../Wrapper/IconWrapper";
import { Link, useNavigate } from "react-router";
import ImageWrapper from "../../Wrapper/ImageWrapper";

const services = [
  {
    title: "Tổng Quan",
    icon: (
      <IconWrapper src="../assets/icon/general.svg" title="Thông báo" />
    ),
    navigateTo: "/main/general",
  },
  {
    title: "Thông Báo",
    icon: (
      <IconWrapper src="../assets/icon/announcement.svg" title="Thông báo" />
    ),
    navigateTo: "/main/announcement",
  },

  // {
  //   title: "Danh Sách Nhân Viên",
  //   icon: (
  //     <IconWrapper
  //       src="../assets/icon/employeecompany.svg"
  //       title="Employee List"
  //     />
  //   ),
  //   navigateTo: "/main/employees",
  // },
  {
    title: "Phòng Ban",
    icon: <IconWrapper src="../assets/icon/department.svg" title="Phòng Ban" />,
    navigateTo: "/main/organization",
  },
  {
    title: "Danh Bạ",
    icon: <IconWrapper src="../assets/icon/phonebook.svg" title="Danh Bạ" />,
    navigateTo: "/main/phonebook",
  },
  {
    title: "Văn Bản",
    icon: <IconWrapper src="../assets/icon/document.svg" title="Document" />,
    navigateTo: "",
  },
  {
    title: "Cần duyệt",
    icon: <IconWrapper src="../assets/icon/stamp.svg" title="Cần Duyệt" />,
    navigateTo: "/main/stamp",
  },
  {
    title: "Quy Trình",
    icon: <IconWrapper src="../assets/icon/procedure.svg" title="Quy trình" />,
    navigateTo: "/main/procedure",
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
    title: "Lịch Công Tác",
    icon: (
      <IconWrapper src="../assets/icon/business-trip.svg" title="Công tác" />
    ),
    navigateTo: "",
  },
  {
    title: "Bảng Lương",
    icon: <IconWrapper src="../assets/icon/salary.svg" title="Bảng lương" />,
    navigateTo: "/main/announcement",
  },
  {
    title: "Đặt Phòng Họp",
    icon: (
      <IconWrapper src="../assets/icon/meeting.svg" title="Meeting Schedule" />
    ),
    navigateTo: "",
  },
  {
    title: "Đặt Xe",
    icon: <IconWrapper src="../assets/icon/companycar.svg" title="Cần xe" />,
    navigateTo: "/main/companycar",
  },
];

interface ServiceBarProps {
  isExpanded: boolean;
  setIsExpanded: (isExpanded: boolean) => void;
}

export default function ServiceBar({
  isExpanded,
  setIsExpanded,
}: ServiceBarProps) {
  const navigate = useNavigate();

  return (
    <div
      className={`fixed top-0 left-0${
        isExpanded ? "w-50" : "w-20"
      } bg-base-200 p-4 h-screen shadow-md flex flex-col items-center transition-all duration-300`}
    >
      {/* Logo */}
      <div
        onClick={() => navigate("/main/announcement")}
        className="cursor-pointer flex justify-center"
      >
        {isExpanded ? (
          <ImageWrapper
            src={"../assets/logo-main-600-150-transparent.png"}
            alt="Logo-Techgel"
            title="Logo Techgel"
            height={50}
            width={175}
          />
        ) : (
          <IconWrapper
            src={"../assets/icon/techgel-logo-small.svg"}
            title="Logo"
            width={65}
            height={65}
          />
        )}
      </div>

      {/* Navigation Menu */}
      <ul className="menu menu-compact flex-grow mt-4 p-0">
        {services.map((service, index) => (
          <li key={index}>
            <Link
              to={service.navigateTo}
              className="flex items-center gap-3 p-3 rounded-lg hover:bg-base-300 transition-all"
            >
              {service.icon}
              {isExpanded && <span>{service.title}</span>}
            </Link>
          </li>
        ))}
      </ul>

      {/* Expand/Collapse Toggle */}
      <ExpandCollapseButtonServiceBar
        iconName={isExpanded ? "turnleft" : "turnright"}
        title={isExpanded ? "Mở rộng" : "Thu gọn"}
        onClick={() => setIsExpanded(!isExpanded)}
      />
    </div>
  );
}

interface ExpandCollapseButtonProps {
  iconName: string;
  onClick: () => void;
  title: string;
}

const ExpandCollapseButtonServiceBar: React.FC<ExpandCollapseButtonProps> = ({
  iconName,
  onClick,
  title = "Expand",
}) => {
  return (
    <div
      className="self-center mt-auto cursor-pointer"
      onClick={onClick}
      title={title}
    >
      <IconWrapper src={`../assets/icon/${iconName}.svg`} title={title} />
    </div>
  );
};
