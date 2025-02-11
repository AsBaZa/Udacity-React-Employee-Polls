import { connect } from "react-redux";
import { formatDate } from "../utils/helpers";
import { handleAddQuestionAnswer } from "../actions/questions";
import { handleAddUserAnswer } from "../actions/users";

const Option = ({
  dispatch,
  id,
  option,
  text,
  timestamp,
  questions,
  authedUser,
}) => {
  const oppositeOption = option === "optionOne" ? "optionTwo" : "optionOne";

  const totalVotes = questions[id][option].votes.length;
  const totalOppositeVotes = questions[id][oppositeOption].votes.length;
  const votes = questions[id][option].votes.join(", ");

  const handleSelectOption = (e) => {
    e.preventDefault();

    dispatch(handleAddQuestionAnswer(id, option));
    dispatch(handleAddUserAnswer(id, option));
  };

  return (
    <div className="col-6 col-12-small">
      <section className="box">
        <header>
          <h3>{text}</h3>
          <p>{formatDate(timestamp)}</p>
          <p style={{ color: "#d52349" }}>
            {questions[id][option].votes.includes(authedUser)
              ? "(Your current answer)"
              : null}
          </p>
        </header>
        {questions[id][option].votes.includes(authedUser) ||
        questions[id][oppositeOption].votes.includes(authedUser) ? (
          <p>
            Total votes: {totalVotes} ({votes})
          </p>
        ) : (
          <p>Total votes: {totalVotes}</p>
        )}

        <p>
          Percentage of votes:{" "}
          {Math.round(
            (10000 * totalVotes) / (totalVotes + totalOppositeVotes)
          ) / 100}
          %
        </p>
        {questions[id][option].votes.includes(authedUser) ||
        questions[id][oppositeOption].votes.includes(authedUser) ? null : (
          <footer>
            <ul className="actions">
              <li>
                <a
                  href="#"
                  className="button icon solid fa-file-alt"
                  onClick={handleSelectOption}
                >
                  Select
                </a>
              </li>
            </ul>
          </footer>
        )}
      </section>
    </div>
  );
};

const mapStateToProps = ({ questions, authedUser }) => {
  return {
    questions: questions,
    authedUser: authedUser,
  };
};

export default connect(mapStateToProps)(Option);
