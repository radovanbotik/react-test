import clsx from "clsx";
import Container from "./Container";
import classes from "./Header.module.css";

export function Header({ className, title }) {
  return (
    <Container>
      <div className={clsx(classes.header, className)}>
        <h1 className={classes.heading}>{title}</h1>
      </div>
    </Container>
  );
}
