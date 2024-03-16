import { Link } from "react-router-dom";
import "./ErrorPage.css";

const ErrorPage = () => {
  return (
    <div className="error-container flex flex-col">
      <img src="/tech-stack/error404.svg" alt="" id="error-image" />

      <Link className="error-btn-txt">
        <button className="error-btn">Take me to home</button>
      </Link>
    </div>
  );
};

export default ErrorPage;
