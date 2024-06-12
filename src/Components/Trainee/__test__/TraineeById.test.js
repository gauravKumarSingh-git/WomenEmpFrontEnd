import { render } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "../../../store";
import TraineeById from "../TraineeById"

describe("Trainee Tests", () => {
    it("Rendered trainee by Id", () => {
      const { getByTestId } = render(
        <Provider store={store}>
          <BrowserRouter>
            <TraineeById />
          </BrowserRouter>
        </Provider>
      );
      const details = getByTestId("traineeById");
      expect(details).toBeTruthy();
    });
  });