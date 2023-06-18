import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import { Crypto } from "./pages/admin-dashboard/dashboard/crypto/crypto";
import { Main } from "./pages/admin-dashboard/dashboard/main/main";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "",
        element: <Main />,
      },
      {
        path: "crypto",
        element: <Crypto />,
      },
      ,
    ],
  },
] as RouteObject[]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
