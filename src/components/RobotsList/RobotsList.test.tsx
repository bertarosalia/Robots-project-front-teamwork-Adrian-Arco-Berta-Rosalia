import { render, screen } from "@testing-library/react";
import { Provider } from "react-redux";
import { store } from "../../features/store/store";
import RobotsList from "./RobotsList";

interface wrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: wrapperProps): JSX.Element => {
  return <Provider store={store}>{children}</Provider>;
};

describe("Given a RobotsList component", () => {
  describe("When it's instantiated", () => {
    test("Then it should show a heading", () => {
      render(
        <>
          <Wrapper>
            <RobotsList />
          </Wrapper>
        </>
      );
      const robotsListWrap = screen.queryByText("Robots");
      expect(robotsListWrap).toBeInTheDocument();
    });
  });
});
