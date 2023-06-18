import { AiOutlineSearch } from "react-icons/ai";
import classes from "./input.module.scss";

interface Props {
  placeholder?: string;
}

export const Input = (props: Props) => {
  return (
    <div className={classes.container}>
      <input className={classes.input} placeholder={props.placeholder} />
      <AiOutlineSearch className={classes.icon} />
    </div>
  );
};
