import { TooltipFeatureItemRow } from "./TooltipFeatureItemRow";
import classes from "./TooltipFeatureSection.module.css";

export function TooltipFeatureSection({ features }) {
  return (
    <div className={classes.section}>
      <h3 className={classes.title}>Key Features</h3>
      <ul className={classes.list}>
        {features.map(feature => (
          <TooltipFeatureItemRow feature={feature} key={feature.name} />
        ))}
      </ul>
    </div>
  );
}
