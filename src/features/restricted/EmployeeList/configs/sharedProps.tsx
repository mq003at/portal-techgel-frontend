import { InputFieldProps } from '../../../../components/form/types/InputFieldProps';
import {
  employmentStatusOptions,
  genderOptions,
  maritalStatusOptions,
} from './employeeFieldOptions';

export const personalInfoFields: InputFieldProps[] = [
  {
    label: 'Giới tính',
    name: 'gender',
    type: 'select',
    options: [
      { value: 'OTHER', label: 'Khác' },

      { value: 'MALE', label: 'Nam' },
      { value: 'FEMALE', label: 'Nữ' },
    ],
  },
  {
    label: 'Ngày sinh',
    name: 'dateOfBirth',
    type: 'date',
  },
  {
    label: 'Tình trạng hôn nhân',
    name: 'maritalStatus',
    type: 'select',
    options: maritalStatusOptions,
  },
  {
    label: 'Quốc tịch',
    name: 'nationality',
  },
  {
    label: 'Email cá nhân',
    name: 'personalEmail',
    type: 'email',
    placeholder: 'abc@gmail.com',
  },
  {
    label: 'Số điện thoại cá nhân',
    name: 'personalPhoneNumber',
    type: 'tel',
  },
  {
    label: 'Số CMND/CCCD',
    name: 'idCardNumber',
  },
  {
    label: 'Ngày cấp',
    name: 'idCardIssueDate',
    type: 'date',
  },
  {
    label: 'Ngày hết hạn',
    name: 'idCardExpiryDate',
    type: 'date',
  },
  {
    label: 'Địa chỉ',
    name: 'address',
  },
];

export const companyInfoFields: InputFieldProps[] = [
  {
    label: 'Email công ty',
    name: 'companyEmail',
    type: 'email',
    placeholder: 'ten@congty.com',
  },
  {
    label: 'Số điện thoại công ty',
    name: 'companyPhoneNumber',
    type: 'tel',
  },
  {
    label: 'Trạng thái lao động',
    name: 'employmentStatus',
    type: 'select',
    options: employmentStatusOptions,
  },
  {
    label: 'Vị trí',
    name: 'position',
  },
  {
    label: 'Ngày bắt đầu',
    name: 'startDate',
    type: 'date',
  },
  {
    label: 'Ngày kết thúc',
    name: 'endDate',
    type: 'date',
  },
  {
    label: 'Ngày bắt đầu thử việc',
    name: 'probationStartDate',
    type: 'date',
  },
  {
    label: 'Ngày kết thúc thử việc',
    name: 'probationEndDate',
    type: 'date',
  },
];
export const careerPathFields: InputFieldProps[] = [
  {
    label: 'Bằng cấp (phân cách bằng dấu phẩy)',
    name: 'degree',
    placeholder: 'Cử nhân CNTT, Thạc sĩ QTKD',
  },
  {
    label: 'Chứng chỉ (phân cách bằng dấu phẩy)',
    name: 'certification',
    placeholder: 'AWS, PMP, IELTS',
  },
  {
    label: 'Chuyên ngành (phân cách bằng dấu phẩy)',
    name: 'specialization',
    placeholder: 'Lập trình, Quản lý dự án',
  },
];
export const taxInfoFields: InputFieldProps[] = [
  { label: 'Mã số thuế', name: 'taxId' },
  { label: 'Tình trạng thuế', name: 'taxStatus' },
  { label: 'Khu vực', name: 'region' },
];
export const insuranceInfoFields: InputFieldProps[] = [
  { label: 'Mã BHXH', name: 'insuranceNumber' },
  { label: 'Nhà cung cấp', name: 'provider' },
  { label: 'Ngày hiệu lực', name: 'effectiveDate', type: 'date' },
  { label: 'Ngày hết hạn', name: 'expiryDate', type: 'date' },
];
export const emergencyContactInfoFields: InputFieldProps[] = [
  { label: 'Người liên hệ khẩn', name: 'emergencyContactName' },
  { label: 'Số điện thoại', name: 'emergencyContactPhone', type: 'tel' },
  { label: 'Quan hệ', name: 'relationship' },
  { label: 'Địa chỉ hiện tại', name: 'emergencyContactCurrentAddress' },
  { label: 'Địa chỉ thường trú', name: 'emergencyContactPermanentAddress' },
];
export const scheduleInfoFields: InputFieldProps[] = [
  { label: 'Lịch làm việc', name: 'workSchedule' },
  {
    label: 'Làm việc từ xa',
    name: 'isRemoteStatus',
    type: 'select',
    options: [
      { value: 'false', label: 'Không' },

      { value: 'true', label: 'Có' },
    ],
  },
  { label: 'Ca làm việc', name: 'shiftType' },
];
export const roleInfoFields: InputFieldProps[] = [
  { label: 'Khối (Divisions)', name: 'divisionNames', type: 'text' },
  { label: 'Phòng (Departments)', name: 'departmentNames', type: 'text' },
  { label: 'Tổ (Sections)', name: 'sectionNames', type: 'text' },
  { label: 'Đơn vị (Units)', name: 'unitNames', type: 'text' },
  { label: 'Nhóm (Teams)', name: 'teamNames', type: 'text' },
  { label: 'Nhóm phân quyền (Groups)', name: 'groupNames', type: 'text' },
  { label: 'Quản lý trực tiếp (Managers)', name: 'managerNames', type: 'text' },
  { label: 'Người dưới quyền (Subordinates)', name: 'subordinateNames', type: 'text' },
];
