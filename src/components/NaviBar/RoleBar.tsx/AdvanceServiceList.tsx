import { ServiceGroup } from "../../Types/Models/Service/ServiceModal";
import IconWrapper from "../../Wrapper/IconWrapper";

export const advancedServicesList: ServiceGroup[] = [
  {
    group: "Hệ Thống",
    items: [
      {
        title: "Hệ Thống",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/systemmanagement.svg"
            title="Hệ Thống"
          />
        ),
        navigateTo: "/main/systemmanagement",
      },
    ],
  },
  {
    group: "Hành Chính",
    icon: (
      <IconWrapper
        src="../assets/icon/serviceBarIcons/admin.svg"
        title="DS Nhân Viên"
      />
    ),
    items: [
      {
        title: "DS Nhân Viên",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/human-planning.svg"
            title="DS Nhân Viên"
          />
        ),
        navigateTo: "/main/employees",
      },
      {
        title: "Kích Hoạt Người Dùng",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/switch.svg"
            title="Kích Hoạt Người Dùng"
          />
        ),
        navigateTo: "/main/activation",
      },
      {
        title: "Phân Quyền Dịch Vụ",
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/human-lock.svg"
            title="Phân Quyền Dịch Vụ"
          />
        ),
        navigateTo: "/main/permissions",
      },
    ],
  },
  {
    group: "Dự Án",
    items: [
      {
        title: "Dự Án",
        icon: (
          <IconWrapper
            src="../assets/icon/project.svg"
            title="Tài Chính Kế Toán"
          />
        ),
        navigateTo: "/main/accountings",
      },
      {
        title: "Biên Bản Thầu",
        icon: (
          <IconWrapper
            src="../assets/icon/project.svg"
            title="Biên Bản Thầu"
          />
        ),
        navigateTo: "/main/reports",
      },
    ],
  },

  {
    group: "Tài chính Kế toán",
    items: [
      {
        title: "Kế Toán",
        icon: (
          <IconWrapper src="../assets/icon/accounting.svg" title="Kế Toán" />
        ),
        navigateTo: "/main/accountings",
      },
    ],
  },
];
