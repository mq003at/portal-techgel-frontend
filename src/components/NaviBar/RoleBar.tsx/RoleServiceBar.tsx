import IconWrapper from "../../Wrapper/IconWrapper";
import { useLocation, useNavigate } from "react-router";

const roleServices = [
  {
    title: "Thông báo",
    icon: <IconWrapper src="../assets/icon/announcement.svg" title="Thông Báo" />,
    navigateTo: "/main/announcement",
  },
  {
    title: "Hành chính",
    icon: <IconWrapper src="../assets/icon/folder.svg" title="Hành Chính" />,
    navigateTo: "/main/folder",
  },
  {
    title: "Nhân sự",
    icon: (
      <IconWrapper src="../assets/icon/human-resources.svg" title="Nhân sự" />
    ),
    navigateTo: "/main/employees",
  },
  {
    title: "Dự án",
    icon: <IconWrapper src="../assets/icon/project.svg" title="Dự án" />,
    navigateTo: "/main/projects",
  },
  {
    title: "Cần duyệt",
    icon: <IconWrapper src="../assets/icon/stamp.svg" title="Cần duyệt" />,
    navigateTo: "/main/stamp",
  },
  {
    title: "Tài chính Kế toán",
    icon: (
      <IconWrapper
        src="../assets/icon/accounting.svg"
        title="Tài Chính Kế Toán"
      />
    ),
    navigateTo: "/main/accountings",
  },
  {
    title: "Báo cáo",
    icon: <IconWrapper src="../assets/icon/reportform.svg" title="Báo cáo" />,
    navigateTo: "/main/companyreports",
  },
  {
    title: "IT",
    icon: <IconWrapper src="../assets/icon/it.svg" title="IT" />,
    navigateTo: "/main/it",
  },
  {
    title: "Hệ thống",
    icon: (
      <IconWrapper src="../assets/icon/systemmanagement.svg" title="Hệ thống" />
    ),
    navigateTo: "/main/systemanagement",
  },
];

export default function RoleServiceBar() {
  const navigate = useNavigate();
  const location = useLocation();

  return (
    <div className="w-full p-3 flex gap-2 bg-base-100 shadow-inner ">
      {roleServices.map((service, index) => {
        const isActive = location.pathname === service.navigateTo;

        return (
          <button
            key={index}
            onClick={() => navigate(service.navigateTo)}
            style={{ borderRadius: "6px" }}
            className={`flex items-center gap-2 px-4 py-2  border cursor-pointer rounded-3xl
              ${
                isActive
                  ? "bg-orange-50 font-semibold border-orange-300"
                  : "bg-base-200 hover:bg-base-300 border-transparent"
              } transition-all`}
          >
            {service.icon}
            <span>{service.title}</span>
          </button>
        );
      })}
    </div>
  );
}
