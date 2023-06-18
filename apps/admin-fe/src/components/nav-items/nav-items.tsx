import { NavItem, NavLink } from "./nav-item/nav-item";
import classes from "./nav-items.module.scss";

const ITEMS: NavLink[] = [
  { title: "Dashboard", icon: "dashboard", path: "#" },
  { title: "Email", icon: "email", path: "#" },
  { title: "Contacts", icon: "contacts", path: "#" },
  { title: "Crypto", icon: "crypto", path: "#" },
  { title: "Kanban", icon: "kanban", path: "#" },
  { title: "Invoicing", icon: "invoicing", path: "#" },
  { title: "Banking", icon: "banking", path: "#" },
  { title: "File Manager", icon: "fileManager", path: "#" },
  { title: "Calendar", icon: "calendar", path: "#" },
  { title: "Todo List", icon: "todoList", path: "#" },
];

export const NavItems = () => {
  return (
    <div className={classes.container}>
      {ITEMS.map((item) => (
        <NavItem {...item} />
      ))}
    </div>
  );
};
