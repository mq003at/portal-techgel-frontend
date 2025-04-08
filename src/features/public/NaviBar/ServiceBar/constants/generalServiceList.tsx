import IconWrapper from '../../../../../components/wrapper/IconWrapper';
import { ServiceGroup } from '../../../../../types/models/Service/ServiceModal';

export const allGeneralServices: ServiceGroup[] = [
  {
    group: 'Tổng Quan',
    items: [
      {
        title: 'Tổng Quan',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/general.svg" title="Tổng Quan" />,
        navigateTo: '/main/general',
      },
    ],
  },
  {
    group: 'Phòng Ban',
    items: [
      {
        title: 'Phòng Ban',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/department.svg" title="Phòng Ban" />,
        navigateTo: '/main/organization',
      },
    ],
  },
  {
    group: 'Công việc',
    icon: <IconWrapper src="../assets/icon/serviceBarIcons/workingman.svg" title="Công việc" />,
    items: [
      {
        title: 'Dach Sách Công Việc',
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/to-do-list.svg"
            title="Dach Sách Công Việc"
          />
        ),
        navigateTo: '/main/to-do-list',
      },
      {
        title: 'Lịch Làm Việc',
        icon: (
          <IconWrapper src="../assets/icon/serviceBarIcons/calendar.svg" title="Lịch Làm Việc" />
        ),
        navigateTo: '/main/roles',
      },
      {
        title: 'Bảng Quản Lý Dự Án',
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/project.svg"
            title="Bảng Quản Lý Dự Án"
          />
        ),
        navigateTo: '/main/roles',
      },
      {
        title: 'Bảng Chấm Công',
        icon: (
          <IconWrapper src="../assets/icon/serviceBarIcons/attendance.svg" title="Bảng Chấm Công" />
        ),
        navigateTo: '/main/roles',
      },
      {
        title: 'Lịch Công Tác',
        icon: (
          <IconWrapper src="../assets/icon/serviceBarIcons/business-trip.svg" title="Công tác" />
        ),
        navigateTo: '',
      },
    ],
  },
  {
    group: 'Hệ Thống Quản Lý Tài Liệu',
    items: [
      {
        title: 'Tất cả Tài Liệu',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
        navigateTo: '',
      },
      {
        title: 'Pháp Lý & Doanh Nghiệp',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
        navigateTo: '',
      },
      {
        title: 'Nhân Sự',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
        navigateTo: 'Báo Cáo & Biên Bản',
      },
      {
        title: 'Kế Toán - Tài Chính',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
        navigateTo: '',
      },
      {
        title: 'Hành Chính - Nội bộ',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
        navigateTo: '',
      },
      {
        title: 'Dự Án & Công trình',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
        navigateTo: '',
      },
      {
        title: 'Kỹ Thuật - Bản Vẽ - Thiết Kế',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
        navigateTo: '',
      },
      {
        title: 'Vật Tư & Thiết Bị',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
        navigateTo: '',
      },
      {
        title: 'Huấn Luyện & Kiểm Định',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
        navigateTo: '',
      },
      {
        title: 'Khách Hàng & Đối Tác',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
        navigateTo: '',
      },
      {
        title: 'PR - Marketing - HSNL',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
        navigateTo: '',
      },
      {
        title: 'Sở Hữu Trí Tuệ',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
        navigateTo: '',
      },
      {
        title: 'Kho Lưu Trữ',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
        navigateTo: '',
      },
    ],
  },
  {
    group: 'Tài Sản',
    items: [
      {
        title: 'Bảng Lương',
        icon: <IconWrapper src="../assets/icon/serviceBarIcons/salary.svg" title="Bảng lương" />,
        navigateTo: '/main/salary',
      },
    ],
  },
  {
    group: 'Đặt Xe Và Phòng Họp',
    items: [
      {
        title: 'Đặt Xe Và Phòng Họp',
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/booking.svg"
            title="Đặt Xe Và Phòng Họp"
          />
        ),
        navigateTo: '/main/booking',
      },
    ],
  },
];
