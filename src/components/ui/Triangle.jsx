import clsx from "clsx";
import classes from "./Triangle.module.css";

export function Triangle({ className }) {
  return <div className={(clsx(classes.triangle), className)}></div>;
}
