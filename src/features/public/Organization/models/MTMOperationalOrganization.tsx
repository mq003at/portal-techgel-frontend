import { BaseJoinModel } from "../../../../types/models/BaseModels";
import { Employee } from "../../../restricted/EmployeeList/models/EmployeeModels";
import { Department, Division, Section, Team, Unit } from "./OperatonalOrganization";

export interface EmployeeDivision extends BaseJoinModel {
    divisionId: string;
    employeeId: string;
  
    division?: Division;
    employee?: Employee;
  }

export interface EmployeeDepartment extends BaseJoinModel {
    departmentId: string;
    employeeId: string;

    department?: Department;
    employee?: Employee[];
}

export interface EmployeeSection extends BaseJoinModel {
    sectionId: string;
    employeeId: string;
  
    section?: Section;
    employee?: Employee;
  }

  export interface EmployeeUnit extends BaseJoinModel {
    unitId: string;
    employeeId: string;
  
    unit?: Unit;
    employee?: Employee;
  }

  export interface EmployeeTeam extends BaseJoinModel {
    teamId: string;
    employeeId: string;
  
    team?: Team;
    employee?: Employee;
  }