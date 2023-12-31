import { Outlet } from "react-router-dom";
import { CompanyHeader } from "../../components/company-header/company-header";
import { NavItems } from "../../components/nav-items/nav-items";
import { NavbarFooter } from "../../components/navbar-footer/navbar-footer";
import classes from "./admin-dashboard.module.scss";

export const AdminDashboard = () => {
  return (
    <div className={classes.container}>
      <nav className={classes.container__side}>
        <div className={classes.panel}>
          <div className={classes.top}>
            <CompanyHeader />
            <NavItems />
          </div>
          <NavbarFooter />
        </div>
      </nav>
      <main className={classes.container__main}>
        <Outlet />
      </main>
    </div>
  );
};
