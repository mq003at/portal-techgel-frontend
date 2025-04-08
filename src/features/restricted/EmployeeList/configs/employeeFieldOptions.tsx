export enum EmploymentStatusEnum {
  ACTIVE = 'ACTIVE',
  INACTIVE = 'INACTIVE',
  ON_LEAVE = 'ON_LEAVE',
  TERMINATED = 'TERMINATED',
  GUEST = 'GUEST',
}

export enum GenderStatusEnum {
  MALE = 'MALE',
  FEMALE = 'FEMALE',
  OTHER = 'OTHER',
}

export enum MaritalStatusEnum {
  SINGLE = 'SINGLE',
  MARRIED = 'MARRIED',
  DIVORCED = 'DIVORCED',
}

export const employmentStatusOptions = [
  { value: EmploymentStatusEnum.ACTIVE, label: 'Đang làm việc', color: 'success' },
  { value: EmploymentStatusEnum.INACTIVE, label: 'Không hoạt động', color: 'neutral' },
  { value: EmploymentStatusEnum.ON_LEAVE, label: 'Đang nghỉ', color: 'warning' },
  { value: EmploymentStatusEnum.TERMINATED, label: 'Đã thôi việc', color: 'error' },
  { value: EmploymentStatusEnum.GUEST, label: 'Khách', color: 'info' },
];

export const genderOptions = [
  { value: GenderStatusEnum.MALE, label: 'Nam' },
  { value: GenderStatusEnum.MALE, label: 'Nữ' },
  { value: GenderStatusEnum.MALE, label: 'Khác' },
];

export const maritalStatusOptions = [
  { value: MaritalStatusEnum.SINGLE, label: 'Độc thân' },
  { value: MaritalStatusEnum.DIVORCED, label: 'Đã li dị' },
  { value: MaritalStatusEnum.MARRIED, label: 'Đã kết hôn' },
];
