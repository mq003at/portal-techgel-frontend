import { configureStore } from '@reduxjs/toolkit';
import { employeeApi } from '../features/restricted/EmployeeList/api/employeeListApi';
import { divisionApi } from '../features/public/Organization/api/DivisionApi';
import { departmentApi } from '../features/public/Organization/api/DepartmentApi';
import { unitApi } from '../features/public/Organization/api/UnitApi';
import { sectionApi } from '../features/public/Organization/api/SectionApi';
import { teamApi } from '../features/public/Organization/api/TeamApi';
import { selectedOrganizationEntityReducer } from '../features/public/Organization/store/selectedOrganizationEntitySlice';

export const store = configureStore({
  reducer: {
    selectedOrganizationEntity: selectedOrganizationEntityReducer,

    [employeeApi.reducerPath]: employeeApi.reducer,
    [divisionApi.reducerPath]: divisionApi.reducer,
    [departmentApi.reducerPath]: departmentApi.reducer,
    [unitApi.reducerPath]: unitApi.reducer,
    [sectionApi.reducerPath]: sectionApi.reducer,
    [teamApi.reducerPath]: teamApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(
      employeeApi.middleware,
      divisionApi.middleware,
      sectionApi.middleware,
      departmentApi.middleware,
      unitApi.middleware,
      teamApi.middleware
    ),
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
