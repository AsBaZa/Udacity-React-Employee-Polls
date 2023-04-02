import { connect } from "react-redux";
import Question from "./Question";

const Dashboard = (props) => {
  return (
    <div className="row">
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
              ))}
          </div>
        </section>
      </div>

      {/* Done */}
      <div className="col-12">
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
              ))}
          </div>
        </section>
      </div>
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
