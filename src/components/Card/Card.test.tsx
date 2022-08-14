import { render, screen } from "@testing-library/react";
import IRobot from "../../features/store/interfaces/interfaces";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it's instantiated with a robot", () => {
    const fakeRobot: IRobot = {
      name: "",
      creationDate: "",
      endurance: 0,
      speed: 0,
      urlImg: "aas",
    };
    test("Then it should show an image with the robot", () => {
      render(
        <Card
          creationDate={fakeRobot.creationDate}
          endurance={fakeRobot.endurance}
          name={fakeRobot.name}
          speed={fakeRobot.speed}
          urlImage={fakeRobot.urlImg}
          key={fakeRobot.name}
        ></Card>
      );

      const cardImage = screen.getByRole("img", {
        name: fakeRobot.name,
      });

      expect((cardImage as HTMLImageElement).alt).toBe(fakeRobot.name);
      expect(cardImage).toBeInTheDocument();
    });
  });
});
