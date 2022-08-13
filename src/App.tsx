import { useSelector } from "react-redux";
import { RootState } from "./features/store/store";

function App() {
  const robots = useSelector((state: RootState) => state.robotsReducer);
  console.log(robots);
  return <div className="App"></div>;
}

export default App;
