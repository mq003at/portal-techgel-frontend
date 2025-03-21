import { Employee } from "../components/Types/Models/BaseModels";
import { BaseDTO } from "./BaseDTO";

export class EmployeeDTO extends BaseDTO {
  firstName!: string;
  lastName!: string;
  middleName?: string;
  gender!: "Male" | "Female" | "Other";
  phoneNumber?: string;
  companyNumber?: string;
  dateOfBirth?: string;
  startDate?: string;
  endDate?: string;
  probationStartDate?: string;
  probationEndDate?: string;
  personalEmail?: string;
  companyEmail?: string;
  status!: "Active" | "Inactive" | "OnLeave" | "Terminated" | "Retired";
  position!: string;
  salary?: number;
  address?: string

  constructor(data: Partial<Employee>) {
    super(data);
    Object.assign(this, data);
    this.dateOfBirth = this.convertDateToISO(data.dateOfBirth);
    this.startDate = this.convertDateToISO(data.startDate);
    this.endDate = this.convertDateToISO(data.endDate);
    this.probationStartDate = this.convertDateToISO(data.probationStartDate);
    this.probationEndDate = this.convertDateToISO(data.probationEndDate);
  }

  private convertDateToISO(date?: string | Date | null): string | undefined {
    return date ? new Date(date).toISOString().split("T")[0] : undefined;
  }

  static convertToUTC(employeeDTO: EmployeeDTO): void {
    if (employeeDTO.dateOfBirth) {
      employeeDTO.dateOfBirth = EmployeeDTO.toUTC(employeeDTO.dateOfBirth);
    }
    if (employeeDTO.startDate) {
      employeeDTO.startDate = EmployeeDTO.toUTC(employeeDTO.startDate);
    }
    if (employeeDTO.endDate) {
      employeeDTO.endDate = EmployeeDTO.toUTC(employeeDTO.endDate);
    }
    if (employeeDTO.probationStartDate) {
      employeeDTO.probationStartDate = EmployeeDTO.toUTC(
        employeeDTO.probationStartDate
      );
    }
    if (employeeDTO.probationEndDate) {
      employeeDTO.probationEndDate = EmployeeDTO.toUTC(
        employeeDTO.probationEndDate
      );
    }
  }

  // Helper function to format date into UTC version with 'T00:00:00Z'
  private static toUTC(dateString: string): string {
    const date = new Date(dateString);
    return `${date.toISOString().split("T")[0]}T00:00:00Z`;
  }
}
