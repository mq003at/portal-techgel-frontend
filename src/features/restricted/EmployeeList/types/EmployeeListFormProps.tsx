import { EmployeeDTO } from "../DTOs/EmployeeDTO";

export interface EmployeeEditFormProps {
    employeeId: string;
    employee: EmployeeDTO;
    onClose: () => void;
  }