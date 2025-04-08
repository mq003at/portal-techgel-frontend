import axios from "axios";
import { setupWorker } from "msw/browser";
import { employeeListHandlers } from "../features/restricted/EmployeeList/handlers/employeeListHandlers";
import { departmentHandlers } from "../features/public/Organization/handlers/DepartmentHandlers";
import { divisionHandlers } from "../features/public/Organization/handlers/DivisionHandlers";
import { sectionHandlers } from "../features/public/Organization/handlers/SectionHandlers";
import { teamHandlers } from "../features/public/Organization/handlers/TeamHandlers";
import { unitHandlers } from "../features/public/Organization/handlers/UnitHandlers";

export const worker = setupWorker(
  ...employeeListHandlers,
  ...divisionHandlers,
  ...departmentHandlers,
  ...sectionHandlers,
  ...unitHandlers,
  ...teamHandlers
);
const sharedInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || "/api",
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: false, // set to true if you need cookies or auth sessions
});

export default sharedInstance;
