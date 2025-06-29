import tooltipStatic from "../../../assets/tooltip-static.svg";
import tooltipHover from "../../../assets/tooltip-hover.svg";
import classes from "./TooltipTrigger.module.css";

export function TooltipTrigger({ onMouseEnter, onMouseLeave }) {
  return (
    <button role="button" className={classes.button} onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave}>
      <img src={tooltipStatic} alt="tooltip" aria-hidden={true} className={classes["image-static"]} />
      <img src={tooltipHover} alt="tooltip" aria-hidden={true} className={classes["image-hover"]} />
    </button>
  );
}
