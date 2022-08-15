import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IRobot } from "../../interfaces/interfaces";

const initialStateRobots: IRobot[] = [];

export const robotsSlice = createSlice({
  name: "robots",
  initialState: initialStateRobots,
  reducers: {
    loadAllRobots: (state, action: PayloadAction<IRobot[]>) => [
      ...action.payload,
    ],
    addRobot: (state, action: PayloadAction<IRobot>) => [
      ...state,
      action.payload,
    ],
  },
});

const robotsReducer = robotsSlice.reducer;
export const {
  loadAllRobots: loadAllRobotsActionCreator,
  addRobot: addRobotActionCreator,
} = robotsSlice.actions;

export default robotsReducer;
