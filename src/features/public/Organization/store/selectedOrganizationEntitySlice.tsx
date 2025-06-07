import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrganizationEntitySummaryDTO } from '../DTOs/OrganizationEntityDTO';

interface SelectedOrganizationEntityState {
  selected: OrganizationEntitySummaryDTO | undefined; // Use the DTO type
}

const initialState: SelectedOrganizationEntityState = {
  selected: undefined,
};

export const selectedOrganizationEntitySlice = createSlice({
  name: 'selectedOrganizationEntity',
  initialState,
  reducers: {
    setSelectedOrganizationEntity: (state, action: PayloadAction<OrganizationEntitySummaryDTO>) => {
      state.selected = action.payload;
    },
    clearSelectedOrganizationEntity: (state) => {
      state.selected = undefined;
    },
  },
});
export const { setSelectedOrganizationEntity, clearSelectedOrganizationEntity } =
  selectedOrganizationEntitySlice.actions;

export const selectedOrganizationEntityReducer = selectedOrganizationEntitySlice.reducer;



