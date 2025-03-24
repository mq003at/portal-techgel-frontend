import { AnnouncementCategory } from "../components/Types/Models/Announcement";

export const announcementMockData: AnnouncementCategory[] = [
    {
      "id": 1,
      "mainID": "CAT001",
      "createdAt": "2025-03-01T10:00:00Z",
      "updatedAt": "2025-03-10T12:00:00Z",
      "name": "Hệ thống",
      "description": "Thông báo chính về hệ thống công ty Techgel",
      "level": 1,
      "announcements": [
        {
          "id": 101,
          "mainID": "ANN001",
          "createdAt": "2025-03-05T09:00:00Z",
          "updatedAt": "2025-03-05T09:30:00Z",
          "name": "Nghỉ lễ 30/4 và 1/5",
          "content": "Công ty sẽ đóng cửa vào ngày 30/4 và 1/5. Xin quý anh/chị lưu ý không để lại tư trang trong thời gian nghỉ lễ",
          "issuer": "Phòng Hành Chính"
        },
        {
          "id": 102,
          "mainID": "ANN002",
          "createdAt": "2025-03-06T14:00:00Z",
          "updatedAt": "2025-03-06T14:30:00Z",
          "name": "Hệ thống cập nhật vào 29/04 - 01/05",
          "content": "Hệ thống Techgel Portal sẽ được cập nhật vào ngày 29/04 - 01/05. Xin quý anh/chị lưu ý xử lý xong các công việc trước thời gian cập nhật",
          "issuer": "Phòng IT"
        }
      ]
    },
    {
      "id": 2,
      "mainID": "CAT002",
      "createdAt": "2025-03-01T11:00:00Z",
      "updatedAt": "2025-03-08T15:00:00Z",
      "name": "Quy trình",
      "description": "Ban bổ Quy trình công việc",
      "level": 2,
      "announcements": [
        {
          "id": 201,
          "mainID": "ANN003",
          "createdAt": "2025-03-08T13:00:00Z",
          "updatedAt": "2025-03-08T13:00:00Z",
          "name": "Quy trình Họp Xem xét của Lãnh đạo",
          "content": "Kính gửi Anh Chị,\n Phòng HC-NS gửi Thông báo Ban hành Quy trình Họp xem xét Lãnh đạo. \nAnh Chị truy cập mục Quy trình hoặc nhấp vào đường dẫn dưới đây để xem thông tin chi tiết.",
          "issuer": "Phòng Hành Chính"
        },
        {
            "id": 202,
            "mainID": "ANN003",
            "createdAt": "2025-03-08T13:00:00Z",
            "updatedAt": "2025-03-08T13:00:00Z",
            "name": "Quy trình Quản lý sự thay đổi",
            "content": "Kính gửi Anh Chị,\n Phòng HC-NS gửi Thông báo Ban hànhQuản lý sự thay đổi. \nAnh Chị truy cập mục Quy trình hoặc nhấp vào đường dẫn dưới đây để xem thông tin chi tiết.",
            "issuer": "Phòng Hành Chính"
          },
          {
            "id": 203,
            "mainID": "ANN003",
            "createdAt": "2025-03-08T13:00:00Z",
            "updatedAt": "2025-03-08T13:00:00Z",
            "name": "Quy trình Trao đổi thông tin",
            "content": "Kính gửi Anh Chị,\n Phòng HC-NS gửi Thông báo Ban hành Trao đổi thông tin. \nAnh Chị truy cập mục Quy trình hoặc nhấp vào đường dẫn dưới đây để xem thông tin chi tiết.",
            "issuer": "Phòng Hành Chính"
          }
      ]
    },
    {
      "id": 3,
      "mainID": "CAT002",
      "createdAt": "2025-03-01T11:00:00Z",
      "updatedAt": "2025-03-08T15:00:00Z",
      "name": "Sự kiện",
      "description": "Các sự kiện mừng lễ và sinh nhật",
      "level": 3,
      "announcements": [
        {
          "id": 301,
          "mainID": "ANN003",
          "createdAt": "2025-03-08T13:00:00Z",
          "updatedAt": "2025-03-08T13:00:00Z",
          "name": "Sự kiện Mừng lễ 30/4 và 1/5",
          "content": "Kính gửi Anh Chị,\n Phòng Nhân Sự xin được tổ chức sự kiện cầu lông tại Sân Nơ Trang Long. \nQuý Anh Chị nào muốn đăng kí xin liên hệ với anh Khoa để được hướng dẫn.",
          "issuer": "Phòng Nhân Sự"
        }
    ],
    },
    {
        "id": 4,
      "mainID": "CAT002",
      "createdAt": "2025-03-01T11:00:00Z",
      "updatedAt": "2025-03-08T15:00:00Z",
      "name": "Công việc",
      "description": "Gửi Hồ sơ Quy trình Khảo sát cho Dự án T3",
      "level": 4,
      "announcements": [
        {
          "id": 401,
          "mainID": "ANN003",
          "createdAt": "2025-03-08T13:00:00Z",
          "updatedAt": "2025-03-08T13:00:00Z",
          "name": "Sự kiện Mừng lễ 30/4 và 1/5",
          "content": "Anh Hiếu gửi lẹ giùm em bản quy trình khảo sát để em đưa cho sếp duyệt.",
          "issuer": "Nguyễn Hoàng Minh Quân"
        },
      ]
    }
  ]
  