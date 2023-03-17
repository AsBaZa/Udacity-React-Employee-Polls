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
        <li className={navState === "home" ? "current" : ""}>
          <Link to="/" onClick={() => handleClick("home")}>
            Home
          </Link>
        </li>
        <li className={navState === "leaderboard" ? "current" : ""}>
          <Link to="/leaderboard" onClick={() => handleClick("leaderboard")}>
            Leaderboard
          </Link>
        </li>
        <li className={navState === "new" ? "current" : ""}>
          <Link to="/new" onClick={() => handleClick("new")}>
            New
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
