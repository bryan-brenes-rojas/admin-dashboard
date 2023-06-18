import { ReactElement } from "react";
import {
  AiOutlineCalendar,
  AiOutlineDollar,
  AiOutlineFile,
  AiOutlineFolder,
  AiOutlineHome,
  AiOutlineUser,
} from "react-icons/ai";
import { BiWalletAlt } from "react-icons/bi";
import { BsGrid } from "react-icons/bs";
import { GoMail } from "react-icons/go";
import { MdOutlineModeEdit } from "react-icons/md";
import classes from "./nav-item.module.scss";

const ICONS: { [name: string]: ReactElement } = {
  dashboard: <AiOutlineHome className={classes.icon} />,
  email: <GoMail className={classes.icon} />,
  contacts: <AiOutlineUser className={classes.icon} />,
  crypto: <AiOutlineDollar className={classes.icon} />,
  kanban: <BsGrid className={classes.icon} />,
  invoicing: <AiOutlineFile className={classes.icon} />,
  banking: <BiWalletAlt className={classes.icon} />,
  fileManager: <AiOutlineFolder className={classes.icon} />,
  calendar: <AiOutlineCalendar className={classes.icon} />,
  todoList: <MdOutlineModeEdit className={classes.icon} />,
};

export interface NavLink {
  title: string;
  icon: keyof typeof ICONS;
  path: string;
}

interface Props extends NavLink {}

export const NavItem = ({ title, icon, path }: Props) => {
  return (
    <div className={classes.container}>
      {ICONS[icon]}
      <span>{title}</span>
    </div>
  );
};
