import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import IRobot from "../interfaces/interfaces";

const initialStateRobots: IRobot[] = [];

export const robotsSlice = createSlice({
  name: "robots",
  initialState: initialStateRobots,
  reducers: {
    loadAllRobots: (_state, action: PayloadAction<IRobot[]>) => action.payload,
  },
});

export const { loadAllRobots } = robotsSlice.actions;
const robotsReducer = robotsSlice.reducer;

export default robotsReducer;
