import IconWrapper from '../../../../../components/Wrapper/IconWrapper';
import { ServiceGroup } from '../../../../../types/models/Service/ServiceModal';
import { documentServiceGroup } from '../../../DocumentsManagement/data/DocumentMockList';

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
    group: 'Quy Trình Chung',

    items: [
      {
        title: 'Quy Trình Nghỉ Phép',
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/workflow-general.svg"
            title="Quy Trình Nghỉ Phép"
          />
        ),
        navigateTo: '/main/leave-request',
      },
      {
        title: 'Quy Trình Hỗ Trợ Văn Phòng',
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/workflow-general.svg"
            title="Quy trình cốt lõi: mua sắm, bảo trì, sửa chữa csvc, IT Helpdesk,..."
          />
        ),
        navigateTo: '/main/support-workflow',
      },
      {
        title: 'Quy Trình Theo Dõi Chất Lượng',
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/workflow-general.svg"
            title="Quy Trình Đề Xuất CSVC"
          />
        ),
        navigateTo: '/main/general-workflow/facility-proposal',
      },
      {
        title: 'Quy Trình Quản Trị Rủi Ro',
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/workflow-general.svg"
            title="Quy Trình Đề Xuất Mua Sắm"
          />
        ),
        navigateTo: '/main/general-workflow/purchase-proposal',
      },
    ],
  },
  {
    group: 'Quản Lý Chữ Ký',

    items: [
      {
        title: 'Quản Lý Chữ Ký',
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/signature-manager.svg"
            title="Document"
          />
        ),
        navigateTo: '/main/signature-manager',
      },
    ],
  },
  
    // group: 'Hệ Thống Quản Lý Tài Liệu',
    // items: [
    //   {
    //     title: 'Tất cả Tài Liệu',
    //     icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
    //     navigateTo: '/main/documents',
    //   },
    //   {
    //     title: 'Pháp Lý & Doanh Nghiệp',
    //     icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
    //     navigateTo: '/main/documents/legal',
    //   },
    //   {
    //     title: 'Nhân Sự',
    //     icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
    //     navigateTo: '/main/documents/employment',
    //   },
    //   {
    //     title: 'Kế Toán - Tài Chính',
    //     icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
    //     navigateTo: '/main/documents/accounting',
    //   },
    //   {
    //     title: 'Hành Chính - Nội bộ',
    //     icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
    //     navigateTo: '/main/documents/internal',
    //   },
    //   {
    //     title: 'Dự Án & Công trình',
    //     icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
    //     navigateTo: '/main/documents/project',
    //   },
    //   {
    //     title: 'Kỹ Thuật - Bản Vẽ - Thiết Kế',
    //     icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
    //     navigateTo: '/main/documents/design',
    //   },
    //   {
    //     title: 'Vật Tư & Thiết Bị',
    //     icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
    //     navigateTo: '/main/documents/equipment',
    //   },
    //   {
    //     title: 'Huấn Luyện & Kiểm Định',
    //     icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
    //     navigateTo: '/main/documents/guildeline',
    //   },
    //   {
    //     title: 'Khách Hàng & Đối Tác',
    //     icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
    //     navigateTo: '/main/documents/client',
    //   },
    //   {
    //     title: 'PR - Marketing - HSNL',
    //     icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
    //     navigateTo: '/main/documents/pr',
    //   },
    //   {
    //     title: 'Sở Hữu Trí Tuệ',
    //     icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
    //     navigateTo: '/main/documents/copyright',
    //   },
    //   {
    //     title: 'Kho Lưu Trữ',
    //     icon: <IconWrapper src="../assets/icon/serviceBarIcons/document.svg" title="Document" />,
    //     navigateTo: '/main/documents/archive',
    //   },
    // ],
    ...documentServiceGroup
  ,
  {
    group: 'Thăm dò Ý kiến',
    items: [
      {
        title: 'Thăm dò Ý kiến',
        icon: (
          <IconWrapper src="../assets/icon/serviceBarIcons/survey.svg" title="Thăm dò ý kiến" />
        ),
        navigateTo: '/main/survey',
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
  {
    group: 'Kho Công Ty',
    items: [
      {
        title: 'Kho Công Ty',
        icon: (
          <IconWrapper
            src="../assets/icon/serviceBarIcons/company-storage.svg"
            title="Kho Công ty"
          />
        ),
        navigateTo: '/main/company-storage',
      },
    ],
  },
];
