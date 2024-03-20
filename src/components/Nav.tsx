import { Link } from "react-router-dom";

const cssClasses = "text-white hover:text-orange-400 hover:cursor-pointer";
const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-40">
      <Link to="/">
        <img
          className="w-10"
          src="/nethaji-logo.svg"
          alt=""
          id="nethaji-logo"
        />
      </Link>
      <ul className="flex space-x-4">
        <li className={cssClasses}>
          <Link to="/">Home</Link>
        </li>
        <li className={cssClasses}>
          <Link to="/">Photography</Link>
        </li>
        <li className={cssClasses}>
          <Link to="/">Web Design</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
