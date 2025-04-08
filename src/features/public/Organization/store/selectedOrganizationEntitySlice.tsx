import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrgEntity } from '../types/OrganizationTypes';

interface SelectedOrganizationEntityState {
  selected: OrgEntity | undefined;
}

const initialState: SelectedOrganizationEntityState = {
  selected: undefined,
};

export const selectedOrganizationEntitySlice = createSlice({
  name: 'selectedOrganizationEntity',
  initialState,
  reducers: {
    setSelectedOrganizationEntity: (state, action: PayloadAction<OrgEntity>) => {
      console.log('payload', action.payload);
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
