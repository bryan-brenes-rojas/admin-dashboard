import { CompanyHeader } from "../../components/company-header/company-header";
import { NavbarFooter } from "../../components/navbar-footer/navbar-footer";
import classes from "./admin-dashboard.module.scss";

export const AdminDashboard = () => {
  return (
    <div className={classes.container}>
      <nav className={classes.container__side}>
        <div className={classes.panel}>
          <CompanyHeader />
          <NavbarFooter />
        </div>
      </nav>
      <main className={classes.container__main}></main>
    </div>
  );
};
