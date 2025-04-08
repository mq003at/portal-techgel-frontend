import { BaseModel } from "../../../../types/models/BaseModels";


export interface TopLevelOrganization extends BaseModel {
    name: string;
    parentId?: number;
    parentTopLevelOrganization?: TopLevelOrganization;
    childTopLevelOrganizations?: TopLevelOrganization[];
}