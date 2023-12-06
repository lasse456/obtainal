import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "@material-tailwind/react";

import App from "./App";
import Booking from "./pages/Booking";
import Webapps from "./pages/Webapps";
import Websites from "./pages/Websites";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "booking",
    element: <Booking />,
  },
  {
    path: "webapps",
    element: <Webapps />,
  },
  {
    path: "websites",
    element: <Websites />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
