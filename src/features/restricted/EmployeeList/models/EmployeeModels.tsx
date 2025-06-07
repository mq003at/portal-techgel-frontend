import { Gender, EmploymentStatus } from '../../../../types/constants/EmployeeConstants';
import { BaseModel } from '../../../../types/Models/BaseModels';

export interface Employee extends BaseModel {
  userName: string; // same as mainId as string
  phoneNumber?: string;

  // Personal Info
  firstName: string;
  lastName: string;
  middleName?: string;
  gender: Gender;
  dateOfBirth: string;
  personalEmail: string;

  // Employment Info
  companyEmail: string;
  companyNumber: string;
  address?: string;
  salary: number;
  startDate?: string;
  endDate?: string;
  probationStartDate?: string;
  probationEndDate?: string;
  employmentStatus: EmploymentStatus;
  position?: string;

  // Relationships
  managerId?: string;
  manager?: Employee;

  // Hierarchy
  roleId: string;
  roles: [];
}
