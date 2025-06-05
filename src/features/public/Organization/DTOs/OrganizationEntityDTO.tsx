import { BaseDTO } from '../../../../types/DTOs/BaseDTO';
import { EmployeeDTO } from '../../../restricted/EmployeeList/DTOs/EmployeeDTO';
import { OrganizationStatus } from '../configs/OrganizationModelOptions';


export interface OrganizationEntitySummaryDTO extends BaseDTO {
  name: string;
  description: string;

  layerId: string;
  level: number; 
  layerName: string;

  managerId?: string;
  managerName?: string;

  status: OrganizationStatus;

  parent: OrganizationEntitySummaryDTO;

  childrenIds?: string[];
  childrenNames?: string[];

  employeeIds?: string[];
  employeeNames?: string[];

  sortOrder?: number;

  fullPathName?: string;

  documentCounts: number;
}

export interface CreateOrganizationEntityDTO extends BaseDTO{
  name: string;
  description: string;
  level: number;

  managerId?: string;
  status: OrganizationStatus;

  parentId?: string;
  sortOrder?: number;
  childrenIds: number[];
  employeeIds?: string[];
}

export interface UpdateOrganizationEntityDTO extends BaseDTO{
  name?: string;
  description?: string;
  level?: number;

  managerId?: string;
  status?: OrganizationStatus;

  parentId?: string;
  parent: OrganizationEntitySummaryDTO;
  sortOrder?: number;
  childrenIds: number[];
  employeeIds?: string[];
}
