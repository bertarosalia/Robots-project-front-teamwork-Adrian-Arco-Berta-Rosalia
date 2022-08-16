import { fireEvent, render, screen, waitFor } from "@testing-library/react";
import Form from "./Form";
import * as reactRedux from "react-redux";
import { store } from "../../features/store/store";
import userEvent from "@testing-library/user-event";
interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}
const Wrapper = ({ children }: WrapperProps) => {
  return <reactRedux.Provider store={store}>{children}</reactRedux.Provider>;
};
// jest.mock("../../hooks/useApi");
// useApi as jest.Mock;
// useApi.prototype.createRobot = jest.fn().mockReturnValue(3);

describe("Given a form component", () => {
  describe("When it's renderer", () => {
    test("Then it should show a header with the tittle New Robot", () => {
      render(
        <Wrapper>
          <Form />
        </Wrapper>
      );

      const titleOnScreen = screen.getByRole("heading");

      expect(titleOnScreen).toBeInTheDocument();
    });

    test("Then it should show all the inputs", () => {
      render(
        <Wrapper>
          <Form />
        </Wrapper>
      );
      const form = screen.getByTestId("form");

      expect(form).toBeInTheDocument();
    });

    test("and when the user write on the name input it should render the letters", async () => {
      const text = "Hola test";

      render(
        <Wrapper>
          <Form />
        </Wrapper>
      );
      const inputName = screen.getByTestId("inputName");
      await userEvent.type(inputName, text);

      await waitFor(() => {
        expect(inputName).toHaveValue(text);
      });
    });

    test("Then if u write in the urlimage element it should render the new letters writed", async () => {
      const text = "url";

      render(
        <Wrapper>
          <Form />
        </Wrapper>
      );
      const inputUrl = screen.getByTestId("inputUrl");
      await userEvent.type(inputUrl, text);

      await waitFor(() => {
        expect(inputUrl).toHaveValue(text);
      });
    });

    test("Then if u write in the creationDate input it should render the new letters writed", async () => {
      const text = "date";

      render(
        <Wrapper>
          <Form />
        </Wrapper>
      );
      const inputDate = screen.getByTestId("inputDate");

      await userEvent.type(inputDate, text);

      await waitFor(() => {
        expect(inputDate).toHaveValue(text);
      });
    });

    test("Then if the user write in the speed input it should render what he types", async () => {
      const numberSpeed = "4";

      render(
        <Wrapper>
          <Form />
        </Wrapper>
      );
      const inputSpeed = screen.getByTestId("inputSpeed");

      await userEvent.type(inputSpeed, numberSpeed);

      await waitFor(() => {
        expect(inputSpeed).toHaveValue(+numberSpeed);
      });
    });

    test("Then if the user write in the endurance input it should render what he types", async () => {
      const numberEndurance = "6";

      render(
        <Wrapper>
          <Form />
        </Wrapper>
      );
      const inputEndurance = screen.getByTestId("inputEndurance");

      await userEvent.type(inputEndurance, numberEndurance);

      await waitFor(() => {
        expect(inputEndurance).toHaveValue(+numberEndurance);
      });
    });
  });
});
