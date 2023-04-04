import { render } from "@testing-library/react";
import "@testing-library/jest-dom";
import Summary from "./Summary";
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducer from "../reducers";
import middleware from "../middleware";
import { BrowserRouter as Router } from "react-router-dom";

describe("Summary", () => {
  it("will have all elements with expected data", async () => {
    const store = createStore(reducer, middleware);

    const user = {
      id: "sarahedo",
      name: "Sarah Edo",
      avatarURL: "avatar-2.jpg",
      answers: {
        "8xf0y6ziyjabvozdd253nd": "optionOne",
        "6ni6ok3ym7mf1p33lnez": "optionOne",
        am8ehyc8byjqgar0jgpub9: "optionTwo",
        loxhs1bqm25b708cmbf3g: "optionTwo",
      },
      questions: ["8xf0y6ziyjabvozdd253nd", "am8ehyc8byjqgar0jgpub9"],
    };

    const component = render(
      <Router>
        <Provider store={store}>
          <div>
            <table>
              <tbody>
                <tr>
                  <th>Users</th>
                  <th>Answered</th>
                  <th>Created</th>
                </tr>
                <Summary user={user} />
              </tbody>
            </table>
          </div>
        </Provider>
      </Router>
    );

    const username = component.getByTestId("username");
    const answers = component.getByTestId("answers");
    const questions = component.getByTestId("questions");

    expect(username.innerHTML).toEqual(user.id);
    expect(parseInt(answers.innerHTML)).toEqual(
      Object.keys(user.answers).length
    );
    expect(parseInt(questions.innerHTML)).toEqual(user.questions.length);
  });
});
