import { Button } from "../../components/ui/Button";
import { Header } from "../../components/ui/Header";
import classes from "./HomePage.module.css";

export default function HomePage() {
  return (
    <>
      <Header title={"Welcome to our store"}></Header>
      <Button href={"/listing-page"} className={classes.button}>
        Continue to store
      </Button>
    </>
  );
}
