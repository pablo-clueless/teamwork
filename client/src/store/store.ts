import { Action, configureStore, ThunkAction } from "@reduxjs/toolkit";

import auth from "./slices/auth";

export const store = configureStore({
  reducer: {
    auth,
  },
  devTools: import.meta.env.VITE_ENV !== "production",
});

export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<ReturnType, RootState, unknown, Action<string>>;

export type AppDispatch = typeof store.dispatch;
