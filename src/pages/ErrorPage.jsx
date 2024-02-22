import { Link } from "react-router-dom";
import "./ErrorPage.sass";

const ErrorPage = () => {
  return (
    <div className="container">
      <h1>Uh oh! You are lost, aren&apos;t ya?</h1>
      <button>
        <Link>Click me to go home</Link>
      </button>
    </div>
  );
};

export default ErrorPage;
