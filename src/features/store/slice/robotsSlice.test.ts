import IRobot from "../interfaces/interfaces";
import robotsReducer, { loadAllRobots } from "./robotsSlice";

describe("Given a robotsReducer function", () => {
  const initialState: IRobot[] = [];
  describe("When it's instantiated with an unkown action and the wrong state", () => {
    test("Then it should return the initial state", () => {
      const wrongState = undefined;
      const unknownAction = { type: "" };

      const robotsReducerreturn = robotsReducer(wrongState, unknownAction);

      expect(robotsReducerreturn).toEqual(initialState);
    });
  });

  describe("When its instantiated with a loadallRobots action and a new robot state", () => {
    test("Then it should return the new state with the robots", () => {
      const newRobots: IRobot[] = [
        {
          id: "",
          name: "",
          creationDate: "",
          endurance: 0,
          speed: 0,
          urlImg: "",
        },
      ];

      const returnfromReducer = robotsReducer(
        initialState,
        loadAllRobots(newRobots)
      );

      expect(returnfromReducer).toStrictEqual(newRobots);
    });
  });
});
