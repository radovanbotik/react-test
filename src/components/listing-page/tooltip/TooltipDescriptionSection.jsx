import classes from "./TooltipDescriptionSection.module.css";

export function TooltipDescriptionSection({ description }) {
  return (
    <div className={classes.container}>
      <h3 className={classes.title}>Description</h3>
      <p className={classes.description}>{description}</p>
    </div>
  );
}
