import classes from "./Card.module.css";
import clsx from "clsx";

export function Card({ children, className, ...props }) {
  return (
    <div className={clsx(classes.card, className)} {...props}>
      {children}
    </div>
  );
}
