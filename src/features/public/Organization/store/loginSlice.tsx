import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeDTO } from "../../../restricted/EmployeeList/DTOs/EmployeeDTO";

interface AuthState {
  user: EmployeeDTO | null;
}

const initialState: AuthState = {
  user: null,
};

const authSlice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    loginSuccess: (
      state,
      action: PayloadAction<{ user: EmployeeDTO; }>
    ) => {
      state.user = action.payload.user;
    },
    logout: (state) => {
      state.user = null;
    },
  },
});

export const { loginSuccess, logout } = authSlice.actions;
export const authReducer = authSlice.reducer;
