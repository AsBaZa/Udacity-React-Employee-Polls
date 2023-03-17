import { connect } from "react-redux";
import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import { formatDate } from "../utils/helpers";

const withRouter = (Component) => {
  const ComponentWithRouterProp = (props) => {
    let location = useLocation();
    let navigate = useNavigate();
    let params = useParams();
    return <Component {...props} router={{ location, navigate, params }} />;
  };

  return ComponentWithRouterProp;
};

const Question = (props) => {
  const { author, timestamp } = props.question;

  return (
    <div className="col-4 col-6-medium col-12-small">
      <section className="box">
        <header>
          <h3>{author}</h3>
        </header>
        <p>{formatDate(timestamp)}</p>
        <footer>
          <ul className="actions">
            <li>
              <Link to={`/poll/${props.questionId}`} className="button alt">
                Show
              </Link>
            </li>
          </ul>
        </footer>
      </section>
    </div>
  );
};

export default withRouter(connect()(Question));
