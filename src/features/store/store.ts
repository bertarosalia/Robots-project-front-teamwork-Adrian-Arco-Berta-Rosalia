import { configureStore, ThunkAction, Action } from "@reduxjs/toolkit";
import robotsReducer from "./robotsSlice";

export const store = configureStore({
  reducer: {
    robotsReducer: robotsReducer,
  },
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
