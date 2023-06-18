import companyLogo from "../../assets/company-logo.svg";
import classes from "./company-header.module.scss";

export const CompanyHeader = () => {
  return (
    <div className={classes.container}>
      <div className={classes.left}>
        <img className={classes.logo} src={companyLogo} />
      </div>
      <div className={classes.right}>
        <h1 className={classes.title}>Geex</h1>
        <span className={classes.subTitle}>Modern admin dashboard</span>
      </div>
    </div>
  );
};
