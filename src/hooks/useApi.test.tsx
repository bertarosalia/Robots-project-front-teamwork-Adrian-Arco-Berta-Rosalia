import { renderHook, waitFor } from "@testing-library/react";
import * as reactRedux from "react-redux";
import { robotsSlice } from "../features/store/slice/robotsSlice";
import { store } from "../features/store/store";
import useApi from "./useApi";

interface WrapperProps {
  children: JSX.Element | JSX.Element[];
}

const Wrapper = ({ children }: WrapperProps): JSX.Element => {
  return <reactRedux.Provider store={store}>{children}</reactRedux.Provider>;
};

const mockDispatch = jest.fn();
jest.mock("react-redux", () => ({
  ...jest.requireActual("react-redux"),
  useDispatch: () => mockDispatch,
}));

describe("Given a useApi custom hook", () => {
  describe("When it's invoked with his method getAll", () => {
    test("Then it should call the fetch method", async () => {
      const mockedFetchValue = {
        AllRobots: [
          {
            id: "",
            name: "",
            creationDate: "",
            endurance: 0,
            speed: 0,
            urlImg: "",
          },
        ],
      };

      const {
        result: {
          current: { getAll },
        },
      } = renderHook(useApi, { wrapper: Wrapper });

      global.fetch = jest.fn().mockResolvedValueOnce({
        json: jest.fn().mockResolvedValue(mockedFetchValue),
      });

      await waitFor(() => {
        getAll();
      });

      await waitFor(() => {
        expect(mockDispatch).toHaveBeenCalledWith(
          robotsSlice.actions.loadAllRobots(mockedFetchValue.AllRobots)
        );
      });
    });
  });
});
