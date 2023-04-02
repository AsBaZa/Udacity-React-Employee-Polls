import { useState } from "react";
import { connect } from "react-redux";
import { useNavigate } from "react-router-dom";
import { handleLogin } from "../actions/authedUser";
import { setNav } from "../actions/nav";

const Login = ({ dispatch, users }) => {
  const navigate = useNavigate();
  const [user, setUser] = useState("");
  const [password, setPassword] = useState("");

  const handleChangeUser = (e) => {
    setUser(e.target.value);
  };

  const handleChangePassword = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (users[user] === undefined) {
      alert("The User/Password is not correct!");
    } else {
      if (users[user].password !== password) {
        alert("The User/Password is not correct!");
      } else {
        dispatch(handleLogin(user));
        dispatch(setNav("home"));
        navigate("/");
      }
    }

    setUser("");
    setPassword("");
  };

  return (
    <div>
      <header className="major">
        <h2>Login</h2>
      </header>
      <form onSubmit={handleSubmit}>
        {/* TODO: Redirect to / if submitted */}
        <div className="row">
          <div className="col-6 col-12-small center">
            <label name="username">User</label>
            <input
              placeholder="User"
              value={user}
              onChange={handleChangeUser}
              type="text"
              data-testid="username"
            />
          </div>
          <div className="col-6 col-12-small center">
            <label name="password">Password</label>
            <input
              placeholder="Password"
              value={password}
              onChange={handleChangePassword}
              type="password"
              data-testid="password"
            />
          </div>
          <div className="col-4 col-12-small center"></div>
          <div className="col-4 col-12-small center">
            <button
              className="center"
              type="submit"
              disabled={user === "" || password === ""}
              data-testid="submit-button"
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

const mapStateToProps = ({ users }) => {
  return {
    users: users,
  };
};

export default connect(mapStateToProps)(Login);
