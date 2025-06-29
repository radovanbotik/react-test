import { Link } from "react-router";
import classes from "./Logo.module.css";

export function Logo() {
  return (
    <Link to="/" className={classes.logo}>
      HALLO WORLD
    </Link>
  );
}
