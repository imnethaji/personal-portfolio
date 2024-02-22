import React from "react";
import ReactDOM from "react-dom/client";
import "./index.sass";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

import Home from "./pages/Home.jsx";
import Development from "./pages/Development.jsx";
import Photography from "./pages/Photography.jsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home />,
  },
  {
    path: "/dev",
    element: <Development />,
  },
  {
    path: "/photo",
    element: <Photography />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
