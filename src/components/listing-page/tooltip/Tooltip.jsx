import { Card } from "../../ui/Card";
import { TooltipDescriptionSection } from "./TooltipDescriptionSection";
import { TooltipFeatureSection } from "./TooltipFeatureSection";
import { TooltipImage } from "./TooltipImage";
import classes from "./Tooltip.module.css";
import clsx from "clsx";

export function Tooltip({ item, isShown, isLeft }) {
  const { description, features } = item;

  return (
    <Card className={clsx(classes.card, isShown ? classes.show : classes.hide, isLeft ? classes.left : classes.right)}>
      <div className={classes["translucent-background"]}></div>
      <div className={classes["two-column"]}>
        <div className={classes.col1}>
          <TooltipImage imageSrc={item.imageUrl} alt={`Previewing ${item.name}`} />
        </div>
        <div className={classes.col2}>
          <TooltipDescriptionSection description={description} />
          <TooltipFeatureSection features={features} />
        </div>
      </div>
    </Card>
  );
}
