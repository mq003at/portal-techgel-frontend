import { createAsyncThunk, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AnnouncementCategory } from "../../types/Models/Announcement";
import sharedInstance from "../../mocks/sharedInstance";

export interface AnnouncementState {
  announcementData: AnnouncementCategory[];
  loading: boolean;
  error: string | null;
}

const initialState: AnnouncementState = {
  announcementData: [],
  loading: false,
  error: null,
};

export const fetchAnnouncements = createAsyncThunk(
  "announcement/fetchAll",
  async (_, thunkAPI) => {
    try {
      const response = await sharedInstance.get("/announcements");
      console.log('res', response.data)
      return response.data as AnnouncementCategory[];
    } catch (error: any) {
      return thunkAPI.rejectWithValue(
        error.message || "Failed to fetch announcements"
      );
    }
  }
);

const announcementSlice = createSlice({
  name: "announcement",
  initialState,
  reducers: {
    setCategories(state, action: PayloadAction<AnnouncementCategory[]>) {
      state.announcementData = action.payload;
    },
    addCategory(state, action: PayloadAction<AnnouncementCategory>) {
      state.announcementData.push(action.payload);
    },
    addAnnouncementToCategory(
      state,
      action: PayloadAction<{
        categoryId: number;
        announcement: AnnouncementCategory["announcements"][number];
      }>
    ) {
      const category = state.announcementData.find(
        (c) => c.id === action.payload.categoryId
      );
      if (category) {
        category.announcements.push(action.payload.announcement);
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAnnouncements.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAnnouncements.fulfilled, (state, action) => {
        state.loading = false;
        state.announcementData = action.payload;
      })
      .addCase(fetchAnnouncements.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload as string;
      });
  },
});
export const { setCategories, addCategory, addAnnouncementToCategory } =
  announcementSlice.actions;

export const announcementReducer = announcementSlice.reducer;
