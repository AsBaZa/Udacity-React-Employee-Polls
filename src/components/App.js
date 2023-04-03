import { useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import { setAuthedUser } from "../actions/authedUser";
import { setNav } from "../actions/nav";
import { useState } from "react";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import { Link, Routes, Route, Navigate, useLocation } from "react-router-dom";
import Nav from "./Nav";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import Poll from "./Poll";
import Login from "./Login";
import RequireAuth from "./RequiredAuth";

function App(props) {
  const [progress, setProgress] = useState(0);
  const [modal, showModal] = useState(false);

  useEffect(() => {
    props.dispatch(handleInitialData()).then(() => {
      setProgress(100);
    });
  }, []);

  const showNavPanel = () => {
    const navPanelClassName = "navPanel-visible";
    modal
      ? document.body.classList.remove(navPanelClassName)
      : document.body.classList.add(navPanelClassName);
    showModal(!modal);
  };

  const handleLogout = (e) => {
    e.preventDefault();

    props.dispatch(setNav("login"));
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
                  element={<RequireAuth children={<Dashboard />} nav="home" />}
                />
                <Route
                  path="/new"
                  element={<RequireAuth children={<NewPoll />} nav="new" />}
                />
                <Route
                  path="/leaderboard"
                  element={<RequireAuth children={<Leaderboard />} nav="leaderboard" />}
                />
                <Route
                  path="/poll/:questionId"
                  element={<RequireAuth children={<Poll />} nav="poll" />}
                />
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

      <div id="titleBar">
        <a href="#navPanel" className="toggle" onClick={showNavPanel}></a>
      </div>

      <div id="navPanel">
        <nav>
          <Link
            to="/"
            className="link depth-0"
            style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
            onClick={showNavPanel}
          >
            <span className="indent-0"></span>Home
          </Link>
          <Link
            to="/leaderboard"
            className="link depth-0"
            style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
            onClick={showNavPanel}
          >
            <span className="indent-0"></span>Leaderboard
          </Link>
          <Link
            to="/new"
            className="link depth-0"
            style={{ WebkitTapHighlightColor: "rgba(0, 0, 0, 0)" }}
            onClick={showNavPanel}
          >
            <span className="indent-0"></span>New
          </Link>
        </nav>
      </div>
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loggedIn: authedUser !== null,
});

export default connect(mapStateToProps)(App);
