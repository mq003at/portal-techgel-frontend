import { configureStore } from "@reduxjs/toolkit";
import { announcementReducer } from "./slices/announcementSlice";

export const store = configureStore({
  reducer: {
    announcement: announcementReducer,
  },
});

// Infer types
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
