import { ColumnDef } from '@tanstack/react-table';
import { EmployeeTabKey } from '../../configs/EmployeeTabs';
import {
  employeeCompanyInfoColumns,
  employeeCareerPathColumns,
  employeeTaxColumns,
  employeeInsuranceColumns,
  employeeEmergencyContactColumns,
  employeeScheduleColumns,
  employeeRoleColumns,
  employeePersonalInfoListColumns,
} from '../columns';

export interface BasicEmployeeInfo {
  mainId: string;
  firstName: string;
  middleName?: string;
  lastName: string;
}

export type TableColumnDef<T> = ColumnDef<T, any>;

export const employeeColumnMap: Record<EmployeeTabKey, ColumnDef<any, any>[]> = {
  personalInfo: employeePersonalInfoListColumns,
  companyInfo: employeeCompanyInfoColumns,
  careerPathInfo: employeeCareerPathColumns,
  taxInfo: employeeTaxColumns,
  insuranceInfo: employeeInsuranceColumns,
  emergencyContactInfo: employeeEmergencyContactColumns,
  scheduleInfo: employeeScheduleColumns,
  roleInfo: employeeRoleColumns,
};
