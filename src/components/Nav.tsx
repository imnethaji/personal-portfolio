import { Link } from "react-router-dom";

const cssClasses = "text-white hover:text-orange-400 hover:cursor-pointer";
const Nav = () => {
  return (
    <nav className="flex items-center justify-center w-screen py-5 max-sm:px-0 top-8 max-sm:top-0 absolute backdrop-blur-sm">
      <div className="container w-[60%] rounded-full bg-opacity-60 py-5 px-24 max-sm:px-0 max-sm:h-auto max-sm:rounded-xl flex max-sm:flex-col justify-between items-center">
        <Link to="/" className="max-sm:m-auto">
          <img
            className="w-10"
            src="/nethaji-logo.svg"
            alt="website logo"
            id="nethaji-logo"
          />
        </Link>
        <ul className="flex space-x-4 max-sm:flex-col max-sm:items-center max-sm:space-y-4 max-sm:hidden max-sm:space-x-0">
          <li className={cssClasses}>
            <Link to="/">Home</Link>
          </li>
          <li className={cssClasses}>
            <a target="projects">Projects</a>
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
      </div>
    </nav>
  );
};

export default Nav;
