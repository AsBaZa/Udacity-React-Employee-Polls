import { useEffect, Fragment } from "react";
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
    props.dispatch(handleInitialData()).then(() => {
      const script1 = document.createElement("script");
      script1.src = "assets/js/util.js";
      script1.async = true;
      document.body.appendChild(script1);

      const script2 = document.createElement("script");
      script2.src = "assets/js/main.js";
      script2.async = true;
      document.body.appendChild(script2);

      return () => {
        // clean up the script when the component in unmounted
        document.body.removeChild(script1);
        document.body.removeChild(script2);
      };
    });
  }, []);

  return (
    <Fragment>
      <LoadingBar />

      {props.loading === true ? null : (
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
              <Routes>
                <Route path="/" exact element={<Dashboard />} />
                <Route path="/new" exact element={<NewPoll />} />
                <Route path="/leaderboard" exact element={<Leaderboard />} />
                <Route path="/poll/:questionId" element={<Poll />} />
              </Routes>
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
      )}
    </Fragment>
  );
}

const mapStateToProps = ({ authedUser }) => ({
  loading: authedUser === null,
});

export default connect(mapStateToProps)(App);
