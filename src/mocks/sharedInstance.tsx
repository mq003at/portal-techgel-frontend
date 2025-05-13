import axios from 'axios';
import { setupWorker } from 'msw/browser';
import { employeeListHandlers } from '../features/restricted/EmployeeList/handlers/employeeListHandlers';
import { organizationEntityHandlers } from '../features/public/Organization/handlers/OrganizationEntityHandlers';
import { documentHandlers } from '../features/public/DocumentsManagement/handlers/DocumentHandlers';

export const worker = setupWorker(...employeeListHandlers, ...organizationEntityHandlers, ...documentHandlers);
const sharedInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL || '/api',
  headers: {
    'Content-Type': 'application/json',
  },
  withCredentials: false, // set to true if you need cookies or auth sessions
});

export default sharedInstance;
