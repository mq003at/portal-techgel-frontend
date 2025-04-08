import { OrganizationStatus } from '../constants/OrganizationModelOptions';
import { EmployeeUnit } from '../models/MTMOperationalOrganization';
import { BaseOperationalOrganizationDTO } from './BaseOperationalOrganizationDTO';
import { TeamDTO } from './TeamDTO';

export interface CreateUnitDTO {
  name: string;
  mainId: string;
  sectionId: string;
  employeeIds?: string[];
  description?: string;
  status: OrganizationStatus;
}
export interface UpdateUnitDTO {
  name?: string;
  mainId?: string;
  employeeIds?: string[];
  managerId?: string;
  description?: string;
  status?: OrganizationStatus;
}
export interface UnitDTO extends BaseOperationalOrganizationDTO {
  sectionId: string;
  createdAt?: string;
  updatedAt?: string;

  teamIds?: string[];
  teams?: TeamDTO[];

  employeeIds?: string[];
  employees?: EmployeeUnit[];
}
