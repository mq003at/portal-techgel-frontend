import {
  PersonalInfoDTO,
  CompanyInfoDTO,
  CareerPathInfoDTO,
  TaxInfoDTO,
  InsuranceInfoDTO,
  EmergencyContactInfoDTO,
  ScheduleInfoDTO,
  RoleInfoDTO,
} from '../DTOs/EmployeeDTO';

export type EmployeeTabKey =
  | 'personalInfo'
  | 'companyInfo'
  | 'careerPathInfo'
  | 'taxInfo'
  | 'insuranceInfo'
  | 'emergencyContactInfo'
  | 'scheduleInfo'
  | 'roleInfo';

export interface EmployeeTab<T extends EmployeeTabKey = EmployeeTabKey> {
  name: T;
  label: string;
}

export interface TabToDTOMap {
  personalInfo: PersonalInfoDTO;
  companyInfo: CompanyInfoDTO;
  careerPathInfo: CareerPathInfoDTO;
  taxInfo: TaxInfoDTO;
  insuranceInfo: InsuranceInfoDTO;
  emergencyContactInfo: EmergencyContactInfoDTO;
  scheduleInfo: ScheduleInfoDTO;
  roleInfo: RoleInfoDTO;
}

export const employeeTabs: EmployeeTab[] = [
  { name: 'personalInfo', label: 'Thông tin cá nhân' },
  { name: 'companyInfo', label: 'Thông tin công ty' },
  { name: 'careerPathInfo', label: 'Lộ trình nghề nghiệp' },
  { name: 'taxInfo', label: 'Thuế' },
  { name: 'insuranceInfo', label: 'Bảo hiểm' },
  { name: 'emergencyContactInfo', label: 'Liên hệ khẩn cấp' },
  { name: 'scheduleInfo', label: 'Lịch trình' },
  { name: 'roleInfo', label: 'Vai trò' },
];
