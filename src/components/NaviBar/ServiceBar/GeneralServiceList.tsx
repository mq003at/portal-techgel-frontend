import IconWrapper from "../../Wrapper/IconWrapper";
import { ServiceGroup } from "../../Types/Models/Service/ServiceModal";

export const allGeneralServices: ServiceGroup[] = [
  {
    group: "Tổng Quan",
    items: [
      {
        title: "Tổng Quan",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/general.svg"
            title="Thông báo"
          />
        ),
        navigateTo: "/main/general",
      },
    ],
  },
  {
    group: "Thông Báo",
    items: [
      {
        title: "Thông Báo",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/announcement.svg"
            title="Thông báo"
          />
        ),
        navigateTo: "/main/announcement",
      },
    ],
  },
  {
    group: "Phòng Ban",
    items: [
      {
        title: "Phòng Ban",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/department.svg"
            title="Phòng Ban"
          />
        ),
        navigateTo: "/main/organization",
      },
    ],
  },
  {
    group: "Công việc",
    icon: (
      <IconWrapper
        src="../assets/icon/serviceBarIcons/workingman.svg"
        title="Công việc"
      />
    ),
    items: [
      {
        title: "Dach Sách Công Việc",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/to-do-list.svg"
            title="Dach Sách Công Việc"
          />
        ),
        navigateTo: "/main/employees",
      },
      {
        title: "Lịch Làm Việc",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/calendar.svg"
            title="Lịch Làm Việc"
          />
        ),
        navigateTo: "/main/roles",
      },
      {
        title: "Bảng Quản Lý Dự Án",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/project.svg"
            title="Bảng Quản Lý Dự Án"
          />
        ),
        navigateTo: "/main/roles",
      },
      {
        title: "Bảng Chấm Công",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/attendance.svg"
            title="Bảng Chấm Công"
          />
        ),
        navigateTo: "/main/roles",
      },
      {
        title: "Lịch Công Tác",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/business-trip.svg"
            title="Công tác"
          />
        ),
        navigateTo: "",
      },
    ],
  },
  {
    group: "Văn Bản & Tài Liệu",
    items: [
      {
        title: "Đề Xuất & Kiến Nghị",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/document.svg"
            title="Document"
          />
        ),
        navigateTo: "",
      },
      {
        title: "Hướng Dẫn & Quy Trình",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/document.svg"
            title="Document"
          />
        ),
        navigateTo: "Báo Cáo & Biên Bản",
      },
      {
        title: "Phiếu Báo",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/document.svg"
            title="Document"
          />
        ),
        navigateTo: "",
      },
      {
        title: "Văn Bản Khác",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/document.svg"
            title="Document"
          />
        ),
        navigateTo: "",
      },
    ],
  },
  {
    group: "Tài Sản",
    items: [
      {
        title: "Bảng Lương",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/salary.svg"
            title="Bảng lương"
          />
        ),
        navigateTo: "/main/announcement",
      },
    ],
  },
  {
    group: "Đặt Xe Và Phòng Họp",
    items: [
      {
        title: "Đặt Xe Và Phòng Họp",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/booking.svg"
            title="Đặt Xe Và Phòng Họp"
          />
        ),
        navigateTo: "/main/booking",
      },
    ],
  },
];


