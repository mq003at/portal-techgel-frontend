import { OrganizationStatus } from '../constants/OrganizationModelOptions';
import { EmployeeDepartment } from '../models/MTMOperationalOrganization';
import { BaseOperationalOrganizationDTO } from './BaseOperationalOrganizationDTO';
import { SectionDTO } from './SectionDTO';

export interface DepartmentDTO extends BaseOperationalOrganizationDTO {
  divisionId: string;

  sectionIds?: string[];
  sections?: SectionDTO[];

  employeeIds?: string[];
  employees?: EmployeeDepartment[];
}

export interface CreateDepartmentDTO {
  status: OrganizationStatus;
  name: string;
  mainId: string;
  divisionId: string;
  employeeIds?: string[];
  description?: string;
}

export interface UpdateDepartmentDTO {
  name?: string;
  mainId?: string;
  employeeIds?: string[];
  managerId?: string;
  description?: string;
  status?: OrganizationStatus;
}
