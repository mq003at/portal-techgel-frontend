import { BaseDTO } from '../../../../types/DTOs/BaseDTO';
import { EmployeeDTO } from '../../../restricted/EmployeeList/DTOs/EmployeeDTO';
import { OrganizationStatus } from '../configs/OrganizationModelOptions';

export interface OrganizationEntitySummaryDTO extends BaseDTO {
  name: string;
  description: string;
  level: number;

  managerId?: string;
  managerName?: string;

  status: OrganizationStatus;

  parentId: string;
  parentName: string;

  childrenIds: string[];
  childrenNames: string[];

  employeeIds?: string[];
  employeeNames?: string[];

  // manual sorting between entity within the same parent
  sortOrder?: number;

  // breadcrumb path
  fullPathName?: string;
}

export interface OrganizationEntityDTO extends OrganizationEntitySummaryDTO {
  children?: OrganizationEntityDTO[];
  parent?: OrganizationEntityDTO;
  employees?: EmployeeDTO[];
  manager?: EmployeeDTO;
}

export interface CreateOrganizationEntityDTO {
  mainId: string;
  name: string;
  description: string;
  level: number;

  managerId?: string;
  status: OrganizationStatus;

  parentId: string;
  sortOrder?: number;

  employeeIds?: string[];
}

export interface UpdateOrganizationEntityDTO {
  mainId?: string;
  name?: string;
  description?: string;
  level?: number;

  managerId?: string;
  status?: OrganizationStatus;

  parentId?: string;
  sortOrder?: number;

  employeeIds?: string[];
}
