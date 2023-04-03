import { connect } from "react-redux";
import Question from "./Question";
import { useState } from "react";

const Dashboard = (props) => {
  const [polls, setPolls] = useState("unanswered");
  const [title, setTitle] = useState("View Done Polls");

  const handlePolls = () => {
    setPolls(polls === "unanswered" ? "answered" : "unanswered");
    setTitle(polls === "unanswered" ? "View New Polls" : "View Done Polls");
  };

  return (
    <div className="row">
      <section id="intro" className="container">
        <footer>
          <ul className="actions">
            <li>
              <a href="#" className="button" onClick={handlePolls}>
                {title}
              </a>
            </li>
          </ul>
        </footer>
      </section>
      {polls === "unanswered" ? (
        <div className="col-12">
          {/* New Questions */}
          <section>
            <header className="major">
              <h2>New Questions</h2>
            </header>
            <div className="row">
              {props.questions
                .filter(
                  (question) => !props.answeredQuestions.includes(question.id)
                )
                .map((question) => (
                  <Question
                    question={question}
                    key={question.id}
                    questionId={question.id}
                  />
                ))
                .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))}
            </div>
          </section>
        </div>
      ) : (
        <div className="col-12">
          {/* Done */}
          <section>
            <header className="major">
              <h2>Done</h2>
            </header>
            <div className="row">
              {" "}
              {props.questions
                .filter((question) =>
                  props.answeredQuestions.includes(question.id)
                )
                .map((question) => (
                  <Question
                    question={question}
                    key={question.id}
                    questionId={question.id}
                  />
                ))
                .sort((a, b) => (a.timestamp < b.timestamp ? 1 : -1))}
            </div>
          </section>
        </div>
      )}
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  questions = Object.keys(questions).map((k, v) => {
    return questions[k];
  });
  const answeredQuestions = Object.keys(users[authedUser].answers).map(
    (k, v) => {
      return k;
    }
  );

  return {
    questions: questions,
    question: questions[0],
    answeredQuestions: answeredQuestions,
    authedUser: authedUser,
    users: users,
  };
};

export default connect(mapStateToProps)(Dashboard);
