import { ReactNode } from "react";
import classes from "./section.module.scss";

interface Props {
  title: string;
  subTitle?: string;
  children?: ReactNode;
}
export const Section = ({ title, subTitle, children }: Props) => {
  return (
    <div className={classes.container}>
      <h2 className={classes.title}>{title}</h2>
      {subTitle ? <p className={classes.subTitle}>{subTitle}</p> : null}
      {children}
    </div>
  );
};
