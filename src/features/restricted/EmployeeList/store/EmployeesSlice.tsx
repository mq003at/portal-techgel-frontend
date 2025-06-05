import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { EmployeeDTO } from "../DTOs/EmployeeDTO";
import { PhoneBookDTO } from "../DTOs/PhoneBookDTO";

interface EmployeesState {
  employees: PhoneBookDTO[] | null;
}

const initialState: EmployeesState = {
  employees: null,
};

const phoneBookSlice = createSlice({
  name: 'phonebook',
  initialState,
  reducers: {
    createPhoneBook: (
      state,
      action: PayloadAction<{ employees: PhoneBookDTO[]; }>
    ) => {
      state.employees = action.payload.employees;
    },
    clearPhoneBook: (state) => {
      state.employees = null;
    },
  },
});

export const { createPhoneBook, clearPhoneBook } = phoneBookSlice.actions;
export const phoneBookReducer = phoneBookSlice.reducer;
