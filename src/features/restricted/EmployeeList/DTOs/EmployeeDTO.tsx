import { EmploymentStatus, Gender } from '../../../../types/constants/EmployeeConstants';
import { BaseDTO, BaseReadDTO } from '../../../../types/DTOs/BaseDTO';
import { MaritalStatus } from '../types/EmployeeTypes';

export interface EmployeeDTO extends BaseReadDTO {
  firstName: string;
  middleName?: string;
  lastName: string;
  avatar?: string;

  personalInfo: PersonalInfoDTO;
  companyInfo: CompanyInfoDTO;
  careerPathInfo: CareerPathInfoDTO;
  taxInfo: TaxInfoDTO;
  insuranceInfo: InsuranceInfoDTO;
  emergencyContactInfo: EmergencyContactInfoDTO;
  scheduleInfo: ScheduleInfoDTO;
  roleInfo: RoleInfoDTO;
}

export interface UpdateEmployeeDTO extends BaseDTO {
  firstName: string;
  middleName?: string;
  lastName: string;
  avatar?: string;

  personalInfo?: PersonalInfoDTO;
  companyInfo?: CompanyInfoDTO;
  careerPathInfo?: CareerPathInfoDTO;
  taxInfo?: TaxInfoDTO;
  insuranceInfo?: InsuranceInfoDTO;
  emergencyContactInfo?: EmergencyContactInfoDTO;
  scheduleInfo?: ScheduleInfoDTO;
  roleInfo?: RoleInfoDTO;
}

export interface CreateEmployeeDTO extends BaseDTO {
  firstName: string;
  middleName?: string;
  lastName: string;
  avatar?: string;

  personalInfo: PersonalInfoDTO;
  companyInfo: CompanyInfoDTO;
  careerPathInfo: CareerPathInfoDTO;
  taxInfo: TaxInfoDTO;
  insuranceInfo: InsuranceInfoDTO;
  emergencyContactInfo: EmergencyContactInfoDTO;
  scheduleInfo?: ScheduleInfoDTO;
  roleInfo: RoleInfoDTO;
}

///////////////////////////////////////////////////
//
// Sub Field DTO
//
///////////////////////////////////////////////////

export interface PersonalInfoDTO {
  gender: Gender;
  address: string;
  dateOfBirth: string; // ISO string
  maritalStatus: MaritalStatus;
  nationality: string;
  personalEmail?: string;
  personalPhoneNumber?: string;

  idCardNumber?: string;
  idCardExpiryDate?: string;
  idCardIssueDate?: string;
}

export interface CompanyInfoDTO {
  companyEmail?: string;
  companyPhoneNumber?: string;
  employmentStatus: EmploymentStatus;
  position?: string;
  department?: string;
  startDate?: string; // ISO
  endDate?: string;
  probationStartDate?: string;
  probationEndDate?: string;
}

export interface CareerPathInfoDTO {
  degree?: string[];
  certification?: string[];
  specialization?: string[];
}

export interface TaxInfoDTO {
  taxId?: string;
  taxStatus?: string;
  region?: string;
}

export interface InsuranceInfoDTO {
  insuranceNumber?: string;
  provider?: string;
  effectiveDate?: string;
  expiryDate?: string;
}

export interface EmergencyContactInfoDTO {
  emergencyContactName?: string;
  emergencyContactPhone?: string;
  relationship?: string;
  emergencyContactCurrentAddress?: string;
  emergencyContactPermanentAddress?: string;
}

export interface ScheduleInfoDTO {
  workSchedule?: string;
  isRemoteStatus?: boolean;
  shiftType?: string;
}

export interface RoleInfoDTO {
  // Org structure
  organizationEntityIds?: string[];
  organizationEntityNames?: string[];

  // Manager
  managesOrganizationEntityIds?: string[];
  managesOrganizationEntityNames?: string[];

  // Direct Supervisor
  supervisorId?: string;
  supervisorName?: string;

  // Direct Subordinates
  subordinateIds?: string[];
  subordinateNames?: string[];

  // Special Permission
  groupIds?: string[];
}
