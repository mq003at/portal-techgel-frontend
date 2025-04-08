import { Employee } from '../../../restricted/EmployeeList/models/EmployeeModels';
import { OrganizationStatus } from '../constants/OrganizationModelOptions';
import { EmployeeTeam } from '../models/MTMOperationalOrganization';
import { BaseOperationalOrganizationDTO } from './BaseOperationalOrganizationDTO';

export interface CreateTeamDTO {
  name: string;
  mainId: string;
  unitId: string;
  employeeIds?: string[];
  description?: string;
  status: OrganizationStatus;
}
export interface UpdateTeamDTO {
  name?: string;
  mainId?: string;
  employeeIds?: string[];
  managerId?: string;
  status?: OrganizationStatus;
  description?: string;
}
export interface TeamDTO extends BaseOperationalOrganizationDTO {
  unitId: string;

  managerId?: string;
  manager?: Employee;

  employeeIds?: string[];
  employees?: EmployeeTeam[];
}
