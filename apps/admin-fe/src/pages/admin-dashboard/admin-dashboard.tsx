import classes from "./admin-dashboard.module.scss";

export function AdminDashboard() {
  return (
    <div className={classes.container}>
      <nav className={[classes.container__side]}>
        <div className={classes.panel}></div>
      </nav>
      <main className={classes.container__main}></main>
    </div>
  );
}
