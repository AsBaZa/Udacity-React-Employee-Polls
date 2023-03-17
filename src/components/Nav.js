import { Link } from "react-router-dom";
import { useState } from "react";

const Nav = () => {
  const [navState, setNavState] = useState("home");

  const handleClick = (name) => {
    setNavState(name);
  };

  return (
    <nav id="nav">
      <ul>
        <li
          className={navState === "home" ? "current" : ""}
          onClick={() => handleClick("home")}
        >
          <Link to="/">Home</Link>
        </li>
        <li
          className={navState === "leaderboard" ? "current" : ""}
          onClick={() => handleClick("leaderboard")}
        >
          <Link to="/leaderboard">Leaderboard</Link>
        </li>
        <li
          className={navState === "new" ? "current" : ""}
          onClick={() => handleClick("new")}
        >
          <Link to="/new">New</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
