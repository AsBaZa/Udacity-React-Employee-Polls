import { render } from "@testing-library/react";
import Nav from "./Nav";
import { MemoryRouter } from "react-router-dom";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { Provider } from "react-redux";

describe("Nav", () => {
  it("will match snapshot", async () => {
    const store = createStore(reducer, middleware);

    const component = render(
      <MemoryRouter>
        <Provider store={store}>
          <Nav />
        </Provider>
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
