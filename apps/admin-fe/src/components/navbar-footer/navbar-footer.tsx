import { FaHeart } from "react-icons/fa";
import classes from "./navbar-footer.module.scss";

export const NavbarFooter = () => {
  return (
    <div className={classes.container}>
      <span className={classes.title}>Geex Modern Dashboard</span>
      <span className={classes.copyRight}>© 2021 All rights reserved</span>
      <span className={classes.author}>
        Made with <FaHeart className={classes.heart} /> by{" "}
        <a
          className={classes.name}
          href="https://dribbble.com/shots/21187380-Colorful-Admin-Dashboard"
          target="_blank"
        >
          Peterdraw
        </a>
      </span>
    </div>
  );
};
