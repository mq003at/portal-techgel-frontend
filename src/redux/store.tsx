import { configureStore } from '@reduxjs/toolkit';
import { employeeApi } from '../features/restricted/EmployeeList/api/employeeListApi';
import { selectedOrganizationEntityReducer } from '../features/public/Organization/store/selectedOrganizationEntitySlice';
import { organizationEntityApi } from '../features/public/Organization/api/OrganizationEntityApi'; // Import the new unified API
import { documentApi } from '../features/public/DocumentsManagement/api/documentApi';
import { generalWorkflowApi } from '../features/public/GeneralWorkflow/api/GeneralWorkflowApi';

export const store = configureStore({
  reducer: {
    selectedOrganizationEntity: selectedOrganizationEntityReducer,

    [employeeApi.reducerPath]: employeeApi.reducer,
    [organizationEntityApi.reducerPath]: organizationEntityApi.reducer, // Add the new API reducer,
    [documentApi.reducerPath]: documentApi.reducer,
    [generalWorkflowApi.reducerPath]: generalWorkflowApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      employeeApi.middleware,
      organizationEntityApi.middleware, // Add the new API middleware
      documentApi.middleware,
      generalWorkflowApi.middleware,
    ),
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
