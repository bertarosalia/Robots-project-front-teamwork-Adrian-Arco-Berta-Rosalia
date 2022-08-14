import { useDispatch } from "react-redux";
import IRobot from "../features/store/interfaces/interfaces";
import { loadAllRobots } from "../features/store/slice/robotsSlice";

const useApi = () => {
  const dispatch = useDispatch();

  const getAll = async () => {
    const response: Response = await fetch(
      process.env.REACT_APP_API_URL as string
    );
    const data: IRobot[] = await response.json();

    const dataRobots: IRobot[] = data.map((robot: IRobot) => {
      return {
        name: robot.name,
        urlImg: robot.urlImg,
        speed: robot.speed,
        endurance: robot.endurance,
        creationDate: robot.creationDate,
      };
    });
    dispatch(loadAllRobots(dataRobots));
  };

  return getAll;
};

export default useApi;
