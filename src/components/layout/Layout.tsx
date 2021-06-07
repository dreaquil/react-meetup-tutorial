import MainNavigation from "./MainNavigation";
import classes from "./Layout.module.css";

interface Props{
    children: any;
}

function Layout(props: Props): JSX.Element {
  return (
    <div>
      <MainNavigation />
      <main className={classes.main}>{props.children}</main>
    </div>
  );
}

export default Layout;
