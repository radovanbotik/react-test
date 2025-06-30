import { Outlet } from "react-router";
import { Navbar } from "../components/navigation/Navbar";
import bg from "../assets/bg.png";
import classes from "./Layout.module.css";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div className={classes.wrap}>
        <div className={classes.container}>
          <img src={bg} alt="background image" aria-label="hidden" className={classes["background-image"]} />
        </div>
        <Outlet />
      </div>
    </>
  );
}
