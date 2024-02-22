import "./Nav.sass";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src="../../public/nethaji-logo.svg" alt="" id="nethaji-logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/dev">Development</Link>
        </li>
        <li>
          <Link to="/photo">Photography</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
