import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <main className="bg-slate-200 w-full h-screen">
      <div className="h-screen flex flex-col justify-center items-center">
        <img className="w-[40%]" src="/error404.svg" alt="" id="error-image" />

        <Link to="/" className="mt-40">
          <button className="border-2 border-blue-600 p-4 font-bold text-blue-600 rounded">
            Take me to home
          </button>
        </Link>
      </div>
    </main>
  );
};

export default ErrorPage;
