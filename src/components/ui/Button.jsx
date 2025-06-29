import { Link } from "react-router";
import classes from "./Button.module.css";
import clsx from "clsx";

export function Button({ children, onClick, href, className, ...props }) {
  if (href) {
    return (
      <Link to={href} className={clsx(classes.button, className)} {...props}>
        {children}
      </Link>
    );
  }

  return (
    <button type="button" onClick={onClick} className={clsx(classes.button, className)} {...props}>
      {children}
    </button>
  );
}
