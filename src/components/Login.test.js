import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Login from "./Login";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { BrowserRouter as Router } from "react-router-dom";

describe("Login", () => {
  it("will have all expected fields", async () => {
    const store = createStore(reducer, middleware);

    const component = render(
      <Router>
        <Provider store={store}>
          <Login />
        </Provider>
      </Router>
    );

    const username = component.getByTestId("username");
    const password = component.getByTestId("password");
    expect(username).toBeInTheDocument();
    expect(password).toBeInTheDocument();
  });
});
