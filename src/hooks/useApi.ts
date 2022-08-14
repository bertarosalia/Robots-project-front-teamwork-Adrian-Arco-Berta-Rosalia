import { useDispatch } from "react-redux";
import { loadAllRobots } from "../features/store/slice/robotsSlice";

const useApi = () => {
  const dispatch = useDispatch();
  const apiUrl = process.env.REACT_APP_API_URL;

  const getAll = async () => {
    const response: Response = await fetch(apiUrl as string);
    const data = await response.json();
    const { AllRobots } = data;
    dispatch(loadAllRobots(AllRobots));
  };

  return { getAll };
};

export default useApi;
