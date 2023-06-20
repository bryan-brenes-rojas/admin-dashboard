import { BsBell } from "react-icons/bs";
import { TbMessageDots } from "react-icons/tb";
import classes from "./icon-batch.module.scss";

const COLORS = {
  warning: classes.warning,
  info: classes.info,
};
type Icon = "bell" | "message";
type Color = keyof typeof COLORS;

interface Props {
  icon: Icon;
  color?: Color;
  count?: number;
}

export const IconBatch = ({ icon, count, color }: Props) => {
  const getIcon = (iconType: Icon) => {
    switch (iconType) {
      case "bell":
        return <BsBell className={classes.icon} />;
      case "message":
        return <TbMessageDots className={classes.icon} />;
    }
  };
  return (
    <div
      data-count={count}
      className={`${classes.container} ${
        color ? COLORS[color] : classes.warning
      } ${count ? "" : classes.hiddenBatch}`}
    >
      {getIcon(icon)}
    </div>
  );
};
