import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { OrganizationEntityDTO } from '../DTOs/OrganizationEntityDTO'; // Import the DTO

interface SelectedOrganizationEntityState {
  selected: OrganizationEntityDTO | undefined; // Use the DTO type
}

const initialState: SelectedOrganizationEntityState = {
  selected: undefined,
};

export const selectedOrganizationEntitySlice = createSlice({
  name: 'selectedOrganizationEntity',
  initialState,
  reducers: {
    setSelectedOrganizationEntity: (state, action: PayloadAction<OrganizationEntityDTO>) => {
      // The payload should be the specific entity object clicked by the user.
      // If this object was fetched using the API handlers we set up,
      // it should already contain the nested 'children' structure.
      // So, simply assigning it here stores the entity and its descendants.
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
