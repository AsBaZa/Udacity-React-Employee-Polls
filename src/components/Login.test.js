import { fireEvent, render } from "@testing-library/react";
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
  it("will check if submit button is disabled by default", async () => {
    const store = createStore(reducer, middleware);

    const component = render(
      <Router>
        <Provider store={store}>
          <Login />
        </Provider>
      </Router>
    );

    const submitButton = component.getByTestId("submit-button");
    expect(submitButton.disabled).toEqual(true);
  });
  it("will chevk if submit button is enabled when input fields are filled in", async () => {
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

    fireEvent.change(username, {target: {value: 'Test'}})
    fireEvent.change(password, {target: {value: ''}})

    let submitButton = component.getByTestId("submit-button");
    expect(submitButton.disabled).toEqual(true);

    fireEvent.change(username, {target: {value: ''}})
    fireEvent.change(password, {target: {value: 'Test'}})

    submitButton = component.getByTestId("submit-button");
    expect(submitButton.disabled).toEqual(true);

    fireEvent.change(username, {target: {value: 'Test'}})
    fireEvent.change(password, {target: {value: 'Test'}})

    submitButton = component.getByTestId("submit-button");
    expect(submitButton.disabled).toEqual(false);
  });
});
