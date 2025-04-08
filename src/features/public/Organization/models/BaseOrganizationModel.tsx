import { BaseModel } from "../../../../types/models/BaseModels";
import { Employee } from "../../../restricted/EmployeeList/models/EmployeeModels";
import { OrganizationStatus } from "../constants/OrganizationModelOptions";

export interface BaseOrganizationModel extends BaseModel {
    name: string;

    description?: string;
    status: OrganizationStatus;

    managerId?: string;
    manager?: Employee;
}

