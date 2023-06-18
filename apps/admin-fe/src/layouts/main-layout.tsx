import { ReactNode } from "react";
import classes from "./main-layout.module.scss";

interface Props {
  title: string;
  description: string;
  side?: ReactNode;
  children?: ReactNode;
}

export const MainLayout = ({ children, side, title, description }: Props) => {
  return (
    <div
      className={`${classes.container} ${
        side ? classes.gridLayout : classes.flexLayout
      }`}
    >
      <div className={classes.headerMain}>
        <h1 className={classes.title}>{title}</h1>
        <span className={classes.description}>{description}</span>
      </div>
      {side ? <div className={classes.headerSide}>side header</div> : null}
      <div className={classes.mainContent}>{children}</div>
      {side ? <div className={classes.sideContent}>{side}</div> : null}
    </div>
  );
};
