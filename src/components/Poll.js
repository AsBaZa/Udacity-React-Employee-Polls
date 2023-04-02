import { useLocation, useNavigate, useParams } from "react-router-dom";
import { connect } from "react-redux";
import Option from "./Option";
import { setNav } from "../actions/nav";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const Poll = (props) => {
  const { id, author, timestamp, optionOne, optionTwo } =
    props.questions[props.questionId];
  const user = props.users[author];
  props.dispatch(setNav("poll"));

  return (
    <div className="row">
      <div className="col-12">
        <section>
          <header className="major">
            <h2>Poll by {author}</h2>
          </header>

          <section id="intro" className="container">
            <div className="row">
              <div className="col-4 col-12-medium"></div>
              <div className="col-4 col-12-medium">
                <section className="middle">
                  <img
                    src={`${process.env.PUBLIC_URL}/avatars/${user.avatarURL}`}
                    alt={`Avatar of ${user.name}`}
                    width="50%"
                    height="50%"
                  />
                </section>
              </div>
              <div className="col-4 col-12-medium"></div>
            </div>
          </section>

          <header className="major">
            <h2>Would you rather</h2>
          </header>
          <div className="row">
            <Option
              id={id}
              text={optionOne.text}
              timestamp={timestamp}
              option={"optionOne"}
            />
            <Option
              id={id}
              text={optionTwo.text}
              timestamp={timestamp}
              option={"optionTwo"}
            />
          </div>
        </section>
      </div>
    </div>
  );
};

const mapStateToProps = ({ authedUser, questions, users }, props) => {
  const { questionId } = props.router.params;

  return {
    questions: questions,
    users: users,
    authedUser: authedUser,
    questionId: questionId,
  };
};

export default withRouter(connect(mapStateToProps)(Poll));
