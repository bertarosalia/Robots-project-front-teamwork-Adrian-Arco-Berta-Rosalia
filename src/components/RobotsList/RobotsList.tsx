import { useEffect } from "react";
import { useSelector } from "react-redux";
import IRobot from "../../features/store/interfaces/interfaces";
import { RootState } from "../../features/store/store";
import useApi from "../../hooks/useApi";
import Card from "../Card/Card";
import RobotsListStyled from "./RobotsListStyled";

const RobotsList = (): JSX.Element => {
  const { getAll } = useApi();
  const robots = useSelector((state: RootState) => state.robots);

  useEffect(() => {
    getAll();
  }, [getAll]);

  return (
    <>
      <RobotsListStyled>
        <h1 className="robots-list__title">Robots</h1>
        <section className="robots-list">
          {robots.map((robot: IRobot) => (
            <Card
              urlImg={robot.urlImg}
              name={robot.name}
              speed={robot.speed}
              endurance={robot.endurance}
              creationDate={robot.creationDate}
              key={robot.id}
            />
          ))}
        </section>
      </RobotsListStyled>
    </>
  );
};

export default RobotsList;
