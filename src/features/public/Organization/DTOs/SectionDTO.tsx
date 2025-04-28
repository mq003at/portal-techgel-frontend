import { OrganizationStatus } from '../constants/OrganizationModelOptions';
import { EmployeeSection } from '../models/MTMOperationalOrganization';
import { BaseOperationalOrganizationDTO } from './BaseOperationalOrganizationDTO';
import { UnitDTO } from './UnitDTO';

export interface CreateSectionDTO {
  name: string;
  mainId: string;
  departmentId: string;
  employeeIds?: string[];
  description?: string;

  status: OrganizationStatus;
}
export interface UpdateSectionDTO {
  name?: string;
  mainId?: string;
  employeeIds?: string[];
  managerId?: string;
  status?: OrganizationStatus;
  description?: string;
}
export interface SectionDTO extends BaseOperationalOrganizationDTO {
  departmentId: string;
  unitIds?: string[];
  units?: UnitDTO[];

  employeeIds?: string[];
  employees?: EmployeeSection[];
}
