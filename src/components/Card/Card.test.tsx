import { render, screen } from "@testing-library/react";
import { IRobot } from "../../features/interfaces/interfaces";
import Card from "./Card";

describe("Given a Card component", () => {
  describe("When it's instantiated with a robot", () => {
    const fakeRobot: IRobot = {
      id: "",
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
          urlImg={fakeRobot.urlImg}
          key={fakeRobot.id}
        ></Card>
      );

      const cardImage = screen.getByRole("img", {
        name: fakeRobot.name,
      });

      expect((cardImage as HTMLImageElement).alt).toBe(fakeRobot.name);
      expect(cardImage).toBeInTheDocument();
    });

    test("And it should show a header with the robot name", () => {
      render(
        <Card
          creationDate={fakeRobot.creationDate}
          endurance={fakeRobot.endurance}
          name={fakeRobot.name}
          speed={fakeRobot.speed}
          urlImg={fakeRobot.urlImg}
          key={fakeRobot.id}
        ></Card>
      );
      const title = screen.getByRole("heading");

      expect(title).toHaveTextContent(fakeRobot.name);
    });

    test("And it should show a list with the robot stats", () => {
      render(
        <Card
          creationDate={fakeRobot.creationDate}
          endurance={fakeRobot.endurance}
          name={fakeRobot.name}
          speed={fakeRobot.speed}
          urlImg={fakeRobot.urlImg}
          key={fakeRobot.id}
        ></Card>
      );
      const list = screen.getByRole("list");

      expect(list).toBeInTheDocument();
    });

    test("And it should show the stats of the robot", () => {
      const lengthExpected = 3;
      render(
        <Card
          creationDate={fakeRobot.creationDate}
          endurance={fakeRobot.endurance}
          name={fakeRobot.name}
          speed={fakeRobot.speed}
          urlImg={fakeRobot.urlImg}
          key={fakeRobot.id}
        ></Card>
      );

      const listItem = screen.getAllByRole("listitem");

      expect(listItem).toHaveLength(lengthExpected);
    });
  });
});
