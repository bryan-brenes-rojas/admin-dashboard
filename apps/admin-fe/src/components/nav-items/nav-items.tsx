import { NavItem, NavLink } from "./nav-item/nav-item";
import classes from "./nav-items.module.scss";

const ITEMS: NavLink[] = [
  { title: "Dashboard", icon: "dashboard", path: "/" },
  { title: "Email", icon: "email", path: "/email" },
  { title: "Contacts", icon: "contacts", path: "/contacts" },
  { title: "Crypto", icon: "crypto", path: "/crypto" },
  { title: "Kanban", icon: "kanban", path: "/kanban" },
  { title: "Invoicing", icon: "invoicing", path: "/invoicing" },
  { title: "Banking", icon: "banking", path: "/banking" },
  { title: "File Manager", icon: "fileManager", path: "file-manager" },
  { title: "Calendar", icon: "calendar", path: "calendar" },
  { title: "Todo List", icon: "todoList", path: "todo-list" },
];

export const NavItems = () => {
  return (
    <div className={classes.container}>
      {ITEMS.map((item, i) => (
        <NavItem key={i} {...item} />
      ))}
    </div>
  );
};
