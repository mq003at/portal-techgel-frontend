import { OrganizationStatus } from '../constants/OrganizationModelOptions';
import { EmployeeDivision } from '../models/MTMOperationalOrganization';
import { BaseOperationalOrganizationDTO } from './BaseOperationalOrganizationDTO';
import { DepartmentDTO } from './DepartmentDTO';

export interface DivisionDTO extends BaseOperationalOrganizationDTO {
  departmentIds?: string[];
  departments?: DepartmentDTO[];

  employeeIds?: string[];
  employees?: EmployeeDivision[];
}

export interface CreateDivisionDTO {
  name: string;
  mainId: string;
  employeeIds?: string[];
  description?: string;

  status?: OrganizationStatus;
}

export interface UpdateDivisionDTO {
  name?: string;
  mainId?: string;
  employeeIds?: string[];
  managerId?: string;
  status?: OrganizationStatus;
  description?: string;
}
