import clsx from "clsx";
import classes from "./Divider.module.css";

export function Divider({ className, text }) {
  return (
    <div className={clsx(classes["divider-wrapper"], className)}>
      <div aria-hidden="true" className={classes["divider-line"]}>
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
