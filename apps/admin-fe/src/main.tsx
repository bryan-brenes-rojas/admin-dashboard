import React from "react";
import ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouteObject,
  RouterProvider,
} from "react-router-dom";
import App from "./App";
import "./index.css";
import { Banking } from "./pages/admin-dashboard/dashboard/banking/banking";
import { Calendar } from "./pages/admin-dashboard/dashboard/calendar/calendar";
import { Contacts } from "./pages/admin-dashboard/dashboard/contacts/contacts";
import { Crypto } from "./pages/admin-dashboard/dashboard/crypto/crypto";
import { Email } from "./pages/admin-dashboard/dashboard/email/email";
import { FileManager } from "./pages/admin-dashboard/dashboard/file-manager/file-manager";
import { Invoicing } from "./pages/admin-dashboard/dashboard/invoicing/invoicing";
import { Kanban } from "./pages/admin-dashboard/dashboard/kanban/kanban";
import { Main } from "./pages/admin-dashboard/dashboard/main/main";
import { TodoList } from "./pages/admin-dashboard/dashboard/todo-list/todo-list";

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
        path: "email",
        element: <Email />,
      },
      {
        path: "contacts",
        element: <Contacts />,
      },
      {
        path: "crypto",
        element: <Crypto />,
      },
      {
        path: "kanban",
        element: <Kanban />,
      },
      {
        path: "invoicing",
        element: <Invoicing />,
      },
      {
        path: "banking",
        element: <Banking />,
      },
      {
        path: "file-manager",
        element: <FileManager />,
      },
      {
        path: "calendar",
        element: <Calendar />,
      },
      {
        path: "todo-list",
        element: <TodoList />,
      },
    ],
  },
] as RouteObject[]);

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
