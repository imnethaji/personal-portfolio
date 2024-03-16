import "./Nav.css";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav>
      <Link to="/">
        <img src=".././../public/nethaji-logo.svg" alt="" id="nethaji-logo" />
      </Link>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/">Photography</Link>
        </li>
        <li>
          <Link to="/">Web Design</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
