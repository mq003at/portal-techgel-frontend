import { configureStore } from '@reduxjs/toolkit';
import { employeeApi } from '../features/restricted/EmployeeList/api/employeeListApi';
import { selectedOrganizationEntityReducer } from '../features/public/Organization/store/selectedOrganizationEntitySlice';
import { organizationEntityApi } from '../features/public/Organization/api/OrganizationEntityApi';
import { documentApi } from '../features/public/DocumentsManagement/api/documentApi';
import { authReducer } from '../features/public/Organization/store/loginSlice';
import { signatureApi } from '../features/public/SignatureManager/api/SignatureApi';
import { phoneBookReducer } from '../features/restricted/EmployeeList/store/EmployeesSlice';
import { leaveRequestWorkflowApi } from '../features/public/GeneralWorkflow/api/LeaveRequestWorkflowApi';

export const store = configureStore({
  reducer: {
    selectedOrganizationEntity: selectedOrganizationEntityReducer,
    auth: authReducer,
    phoneBook: phoneBookReducer,

    [employeeApi.reducerPath]: employeeApi.reducer,
    [signatureApi.reducerPath]: signatureApi.reducer,
    [organizationEntityApi.reducerPath]: organizationEntityApi.reducer, // Add the new API reducer,
    [documentApi.reducerPath]: documentApi.reducer,
    [leaveRequestWorkflowApi.reducerPath]: leaveRequestWorkflowApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      employeeApi.middleware,
      signatureApi.middleware,
      organizationEntityApi.middleware, // Add the new API middleware
      documentApi.middleware,
      leaveRequestWorkflowApi.middleware,
    ),
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
