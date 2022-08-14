import RobotsListStyled from "./RobotsListStyled";

const RobotsList = ():JSX.Element => {
  return (
    <>
      <RobotsListStyled>
        <h1 className="robots-list__title">Robots</h1>
        {Robot.map((robot) => (
          <Card />
        ))}
        <section className="robots"></section>
      </RobotsListStyled>
    </>
  );
};

export default RobotsList;
