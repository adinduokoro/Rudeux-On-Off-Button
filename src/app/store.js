import { configureStore } from "@reduxjs/toolkit";
import toggleReducer from "../features/toggle/toggleSlice";

export const store = configureStore({
  reducer: {
    plug: toggleReducer,
  },
});
