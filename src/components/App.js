import { useState, useEffect, Fragment } from "react";
import { connect } from "react-redux";
import { handleInitialData } from "../actions/shared";
import Dashboard from "./Dashboard";
import LoadingBar from "react-redux-loading-bar";
import { Link, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import NewPoll from "./NewPoll";
import Leaderboard from "./Leaderboard";
import Poll from "./Poll";

function App(props) {
  useEffect(() => {
    props.dispatch(handleInitialData());
  }, []);

  return (
    <Fragment>
      <LoadingBar />

      {props.loading === true ? null : (
        <div id="page-wrapper">
          {/* Header   */}
          <section id="header">
            {/* Logo */}
            <h1><Link to="/">Employee Polls</Link></h1>

            {/* Nav */}
            <Nav />
          </section>
          <section id="main">
            <Routes>
              <Route path="/" exact element={<Dashboard />} />
              <Route path="/new" exact element={<NewPoll />} />
              <Route path="/leaderboard" exact element={<Leaderboard />} />
              <Route path="/poll/:questionId" element={<Poll />} />
            </Routes>
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
      )}
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
