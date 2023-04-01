import { render } from "@testing-library/react";
import Nav from "./Nav";
import { MemoryRouter } from "react-router-dom";

describe("Nav", () => {
  it("will match snapshot", async () => {
    const component = render(
      <MemoryRouter>
        <Nav />
      </MemoryRouter>
    );
    expect(component).toMatchSnapshot();
  });
});
