import { Link } from "react-router-dom";

const cssClasses = "text-white hover:text-orange-400 hover:cursor-pointer";
const Nav = () => {
  return (
    <nav className="flex justify-between items-center py-5 px-40 max-sm:px-0">
      <Link to="/" className="max-sm:m-auto">
        <img
          className="w-10"
          src="/nethaji-logo.svg"
          alt="website logo"
          id="nethaji-logo"
        />
      </Link>
      <ul className="flex space-x-4 max-sm:hidden">
        <li className={cssClasses}>
          <Link to="/">Home</Link>
        </li>
        <li className={cssClasses}>
          <Link to="/">Projects</Link>
        </li>
        <li className={cssClasses}>
          <a href="mailto:reachnethajip@gmail.com">Contact</a>
        </li>
        <li className={cssClasses}>
          <Link to="https://github.com/imnethaji" target="_blank">
            GitHub
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
