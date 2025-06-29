import clsx from "clsx";
import classes from "./Divider.module.css";

export function Divider({ className, text }) {
  return (
    <div className={clsx(classes["diver-wrapper"], className)}>
      <div aria-hidden="true" className={classes["diver-line"]}>
        <div className={classes["divider-fill"]} />
      </div>
      {text && (
        <div className={classes["divider-content"]}>
          <span className={classes["divider-text"]}>{text}</span>
        </div>
      )}
    </div>
  );
}
