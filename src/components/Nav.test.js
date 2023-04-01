import { render } from "@testing-library/react";
import * as React from "react";
import Nav from "./Nav";
import { BrowserRouter as Router } from "react-router-dom";


describe("Nav", () => {
  it("will match snapshot", async () => {
    const component = render(<Router><Nav /></Router>);
    expect(component).toMatchSnapshot();
  });
});
