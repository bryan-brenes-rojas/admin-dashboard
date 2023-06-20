import classes from "./avatar.module.scss";

interface Props {
  imageUrl: string;
}

export const Avatar = ({ imageUrl }: Props) => {
  return <img className={classes.image} src={imageUrl} />;
};
