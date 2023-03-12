import { connect } from "react-redux";
import Question from "./Question";
import Leaderboard from "./Leaderboard";
import Poll from "./Poll";

const Dashboard = (props) => {
  return (
    <div id="page-wrapper">
      {/* Header   */}
      <section id="header">
        {/* Logo */}
        <h1>
          <a href="#">Employee Polls</a>
        </h1>

        {/* Nav */}
        <nav id="nav">
          <ul>
            <li className="current">
              <a href="#">Home</a>
            </li>
            <li>
              <a href="#">Leaderboard</a>
            </li>
            <li>
              <a href="#">New</a>
            </li>
          </ul>
        </nav>
      </section>

      {/* Main */}
      <section id="main">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <Poll question={props.question} user={props.users[props.question.author]}/>
              {/* New Questions */}
              <section>
                <header className="major">
                  <h2>Leaderboard</h2>
                </header>
                <Leaderboard />
                <header className="major">
                  <h2>New Questions</h2>
                </header>
                <div className="row">
                  {props.questions
                    .filter(
                      (question) =>
                        !props.answeredQuestions.includes(question.id)
                    )
                    .map((question) => (
                      <Question question={question} key={question.id} />
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
                      <Question question={question} key={question.id} />
                    ))}
                </div>
              </section>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <section id="footer">
        <div className="container">
          <div className="row">
            <div className="col-12">
              {/* Copyright */}
              <div id="copyright">
                <ul className="links">
                  <li>&copy; Untitled. All rights reserved.</li>
                  <li>
                    Design: <a href="http://html5up.net">HTML5 UP</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

const mapStateToProps = ({ authedUser, users, questions }) => {
  questions = Object.keys(questions).map((k, v) => {
    return questions[k];
  });
  const answeredQuestions = Object.keys(users[authedUser].answers).map((k, v) => {
    return k;
  })

  return {
    questions: questions,
    question: questions[0],
    answeredQuestions: answeredQuestions,
    authedUser: authedUser,
    users: users
  };
};

export default connect(mapStateToProps)(Dashboard);
