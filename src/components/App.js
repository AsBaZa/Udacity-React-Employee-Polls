import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { setAuthedUser } from "../actions/authedUser";
import { useState } from "react";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import { Link, Routes, Route, Navigate } from "react-router-dom";
import Nav from "./Nav";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import Poll from "./Poll";
import Login from "./Login";

function App(props) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    props.dispatch(handleInitialData()).then(() => {
      setProgress(100);
    });
  }, []);

  // if (progress === 100) {
  //   const script1 = document.createElement("script");
  //   script1.src = "assets/js/util.js";
  //   script1.async = true;
  //   document.body.appendChild(script1);

  //   const script2 = document.createElement("script");
  //   script2.src = "assets/js/main.js";
  //   script2.async = true;
  //   document.body.appendChild(script2);
  // }

  const handleLogout = (e) => {
    e.preventDefault();

    props.dispatch(setAuthedUser(null));
  };

  return (
    <Fragment>
      <LoadingBar onLoaderFinished={() => setProgress(100)} />

      <div id="page-wrapper">
        {/* Header   */}
        <section id="header">
          {/* Logo */}
          <h1>
            <Link to="/">Employee Polls</Link>
          </h1>

          {/* Nav */}
          <Nav />
        </section>
        <section id="main">
          <div className="container">
            {progress !== 100 ? null : (
              <Routes>
                <Route
                  path="/"
                  element={
                    props.loggedIn ? (
                      <Dashboard />
                    ) : (
                      <Navigate replace to="/login" />
                    )
                  }
                />
                <Route
                  path="/new"
                  element={
                    props.loggedIn ? (
                      <NewPoll />
                    ) : (
                      <Navigate replace to="/login" />
                    )
                  }
                />
                <Route
                  path="/leaderboard"
                  element={
                    props.loggedIn ? (
                      <Leaderboard />
                    ) : (
                      <Navigate replace to="/login" />
                    )
                  }
                />
                <Route
                  path="/poll/:questionId"
                  element={
                    props.loggedIn ? <Poll /> : <Navigate replace to="/login" />
                  }
                />{" "}
                <Route
                  path="/login"
                  exact
                  element={
                    props.loggedIn ? <Navigate replace to="/" /> : <Login />
                  }
                />
              </Routes>
            )}
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
                    {progress === 100 && props.loggedIn ? (
                      <li>
                        <a href="#" onClick={handleLogout}>
                          Logout
                        </a>
                      </li>
                    ) : null}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: authedUser !== null,
});

export default connect(mapStateToProps)(App);
