import { BaseDTO } from '../../../../types/DTOs/BaseDTO';
import { Employee } from '../../../restricted/EmployeeList/models/EmployeeModels';
import { OrganizationStatus } from '../constants/OrganizationModelOptions';

export interface BaseOperationalOrganizationDTO extends BaseDTO {
  name: string;
  description?: string;

  managerId?: string;
  managerName?: string;
  manager?: Employee;

  status: OrganizationStatus;
}
