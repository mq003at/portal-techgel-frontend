import { BaseOrganizationModel } from "./BaseOrganizationModel";
import { EmployeeDepartment, EmployeeDivision, EmployeeSection, EmployeeTeam, EmployeeUnit } from "./MTMOperationalOrganization";
import { TopLevelOrganization } from "./TopLevelOrganiztion";

export interface OperationalOrganization extends BaseOrganizationModel {
  topLevelOrganizationId: string;
  topLevelOrganization?: TopLevelOrganization; 

  divisions?: Division[]; 
}



export interface Division extends BaseOrganizationModel {
  departments?: Department[];
  departmentIds?: string[];

  employeeIds?: string[];
  employees?: EmployeeDivision[];
}

export interface Department extends BaseOrganizationModel {

  divisionId: string;
  division?: Division;
  sections?: Section[];
  sectionIds?: string[];

  employeeIds?: string[]; 
  employees?: EmployeeDepartment[];
}

export interface Section extends BaseOrganizationModel {
  departmentId: string;
  department?: Department;

  units?: Unit[];
  unitIds?: string[];

  employeeIds?: string[];
  employees?: EmployeeSection[];
}

export interface Unit extends BaseOrganizationModel {
  sectionId: string;
  section?: Section;

  teams?: Team[];
  teamIds?: string[];

  employeeIds?: string[];
  employees?: EmployeeUnit[];
}

export interface Team extends BaseOrganizationModel {
  unitId: string;
  unit?: Unit;

  employeeIds?: string[];
  employees?: EmployeeTeam[];
}

