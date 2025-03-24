export interface BaseModel {
  id: number;
  mainID: string;
  createdAt?: string;
  updatedAt?: string;
}

export type Gender = "Male" | "Female" | "Other";

export type EmploymentStatus =
  | "Active"
  | "Inactive"
  | "OnLeave"
  | "Terminated"
  | "Retired";

export interface Employee extends BaseModel {
  firstName: string;
  lastName: string;
  middleName?: string;
  gender: Gender;
  dateOfBirth: Date;
  personalEmail: string;
  companyEmail?: string;
  phoneNumber: string;
  companyNumber?: string;
  address?: string;
  startDate: Date;
  probationStartDate: Date;
  endDate?: Date;
  probationEndDate: Date;
  status: EmploymentStatus;
  position: string;
  managerId?: number;
  manager?: Employee;
  salary: number;
  divisionIds?: [number];
  teamIds?: [number];
  sectionIds?: [number];
  departmentIds?: [number];
  unitIds?: [number];
  password: string;
}
