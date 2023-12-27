import { configureStore } from "@reduxjs/toolkit";
// import commonSlice from "components/commonSlice";
import userReducer from "./slices/userSlice";

export const store = configureStore({
  reducer: {
    user: userReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
