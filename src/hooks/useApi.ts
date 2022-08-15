import { useCallback } from "react";
import { useDispatch } from "react-redux";
import { ProtoRobot } from "../features/interfaces/interfaces";
import {
  addRobotActionCreator,
  loadAllRobotsActionCreator,
} from "../features/store/slice/robotsSlice";

const useApi = () => {
  const dispatch = useDispatch();
  const apiUrl = process.env.REACT_APP_API_URL;

  const getAll = useCallback(async () => {
    const response: Response = await fetch(apiUrl as string);
    const data = await response.json();
    const { AllRobots } = data;
    dispatch(loadAllRobotsActionCreator(AllRobots));
  }, [apiUrl, dispatch]);

  const createRobot = async (newRobot: ProtoRobot) => {
    const response = await fetch(`${apiUrl}/create`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(newRobot),
    });
    const { robot } = await response.json();

    dispatch(addRobotActionCreator(robot));
  };

  return { getAll, createRobot };
};

export default useApi;
