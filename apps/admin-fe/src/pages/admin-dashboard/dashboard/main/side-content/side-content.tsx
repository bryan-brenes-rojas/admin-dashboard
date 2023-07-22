import { Section } from "../../../../../components/section/section";
import classes from "./side-content.module.scss";

export const SideContent = () => {
  return (
    <div className={classes.container}>
      <Section
        title="Server status"
        subTitle="Overall week average up time"
      ></Section>
      <Section
        title="Recent Problems"
        subTitle="Status from the most used apps"
      ></Section>
    </div>
  );
};
