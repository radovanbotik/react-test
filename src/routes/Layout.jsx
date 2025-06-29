import { Outlet } from "react-router";
import { Navbar } from "../components/navigation/Navbar";
// import { Toaster } from "react-hot-toast";
import bg from "../assets/bg.png";
import Container from "../components/ui/Container";
import classes from "./Layout.module.css";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div className={classes.wrap}>
        <Container className={classes.container}>
          <img src={bg} alt="background image" aria-label="hidden" className={classes["background-image"]} />
        </Container>
        <Outlet />
        {/* <Toaster position="bottom-right" /> */}
      </div>
    </>
  );
}
