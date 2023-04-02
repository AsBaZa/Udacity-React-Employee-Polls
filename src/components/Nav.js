import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setNav } from "../actions/nav";

const Nav = ({ dispatch, authedUser, nav }) => {
  const handleClick = (name) => {
    authedUser === null ? dispatch(setNav("login")) : dispatch(setNav(name));
  };

  return (
    <nav id="nav">
      <ul>
        <li className={nav === "home" ? "current" : ""}>
          <Link to="/" onClick={() => handleClick("home")}>
            Home
          </Link>
        </li>
        <li className={nav === "leaderboard" ? "current" : ""}>
          <Link to="/leaderboard" onClick={() => handleClick("leaderboard")}>
            Leaderboard
          </Link>
        </li>
        <li className={nav === "new" ? "current" : ""}>
          <Link to="/new" onClick={() => handleClick("new")}>
            New
          </Link>
        </li>
      </ul>
    </nav>
  );
};

const mapStateToProps = ({ nav, authedUser }) => {
  return {
    nav: nav,
    authedUser: authedUser,
  };
};

export default connect(mapStateToProps)(Nav);
