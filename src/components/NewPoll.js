import { useState } from "react";
import { connect } from "react-redux";
import { handleAddQuestion } from "../actions/questions";
import { setNav } from "../actions/nav";
import { useNavigate } from "react-router-dom";

const NewPoll = ({ dispatch, id }) => {
  const navigate = useNavigate();
  const [optionOneText, setOptionOneText] = useState("");
  const [optionTwoText, setOptionTwoText] = useState("");

  const handleChangeOptionOne = (e) => {
    const optionOneText = e.target.value;
    setOptionOneText(optionOneText);
  };

  const handleChangeOptionTwo = (e) => {
    const optionTwoText = e.target.value;
    setOptionTwoText(optionTwoText);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestion(optionOneText, optionTwoText));
    setOptionOneText("");
    setOptionTwoText("");
    dispatch(setNav("home"));
    navigate("/");
  };

  return (
    <div>
      <header className="major">
        <h2>Would You Rather</h2>
        <h3>Create Your Own Poll</h3>
      </header>
      <form onSubmit={handleSubmit}>
        {/* TODO: Redirect to / if submitted */}
        <div className="row">
          <div className="col-6 col-12-small center">
            <label name="foption">First Option</label>
            <input
              placeholder="Option One"
              value={optionOneText}
              onChange={handleChangeOptionOne}
              type="text"
            />
          </div>
          <div className="col-6 col-12-small center">
            <label name="soption">Second Option</label>
            <input
              placeholder="Option Two"
              value={optionTwoText}
              onChange={handleChangeOptionTwo}
              type="text"
            />
          </div>
          <div className="col-4 col-12-small center"></div>
          <div className="col-4 col-12-small center">
            <button
              className="center"
              type="submit"
              disabled={optionOneText === "" || optionTwoText === ""}
            >
              Submit
            </button>
          </div>
          <div className="col-4 col-12-small center"></div>
        </div>
      </form>
    </div>
  );
};

export default connect()(NewPoll);
