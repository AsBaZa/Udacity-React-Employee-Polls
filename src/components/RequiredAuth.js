import { useLocation, Navigate } from "react-router-dom";
import { connect } from "react-redux";
import { setNav } from "../actions/nav";

const RequireAuth = ({ children, loggedIn, nav, dispatch }) => {
  const location = useLocation();

  if (loggedIn) {
    return children;
  } else {
    // dispatch(setNav(nav));
    return <Navigate to="/login" replace state={{ path: location.pathname }} />;
  }
};

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: authedUser !== null,
});

export default connect(mapStateToProps)(RequireAuth);
