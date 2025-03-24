import { InputFieldProps } from "../Form/InputField";
import { employmentStatusOptions, genderOptions } from "./sharedTypes";

export const personalInfoFields: InputFieldProps[] = [
  {
    label: "Mã Nhân Viên",
    name: "mainID",
    placeholder: "TG00001",
  },
  { label: "Mật khẩu", name: "password", type: "password" },
  { label: "Họ", name: "lastName", placeholder: "Nhập họ", required: true },
  { label: "Tên Đệm", name: "middleName", placeholder: "Nhập tên đệm" },
  { label: "Tên", name: "firstName", placeholder: "Nhập tên", required: true },
  {
    label: "Giới tính",
    name: "gender",
    type: "select",
    options: genderOptions,
  },
  { label: "Ngày sinh", name: "dateOfBirth", type: "date", required: true },
  {
    label: "Email cá nhân",
    name: "personalEmail",
    type: "email",
    placeholder: "Nhập email cá nhân",
  },
  {
    label: "Số đt cá nhân",
    name: "phoneNumber",
    placeholder: "Nhập số điện thoại cá nhân",
  },
  {
    label: "Địa chỉ",
    name: "address",
    placeholder: "Nhập địa chỉ",
    type: "text",
  },
];

export const employmentInfoFields: InputFieldProps[] = [
  {
    label: "Email công ty",
    name: "companyEmail",
    type: "email",
    placeholder: "Nhập email công ty",
  },
  {
    label: "Số đt công ty",
    name: "companyNumber",
    placeholder: "Nhập số điện thoại công ty",
  },
  { label: "Ngày bắt đầu thử việc", name: "probationStartDate", type: "date" },
  { label: "Ngày kết thúc thử việc", name: "probationEndDate", type: "date" },
  { label: "Ngày bắt đầu", name: "startDate", type: "date" },
  { label: "Ngày kết thúc", name: "endDate", type: "date" },
  { label: "Vị trí", name: "position", placeholder: "Nhập vị trí" },
  {
    label: "Trạng thái lao động",
    name: "employmentStatus",
    type: "select",
    options: employmentStatusOptions,
  },
  { label: "Lương", name: "salary", type: "number" },
];
