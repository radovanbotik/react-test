import classes from "./Container.module.css";
import clsx from "clsx";

export default function Container({ children, className, ...props }) {
  return (
    <div className={clsx(classes.container, className)} {...props}>
      {children}
    </div>
  );
}
