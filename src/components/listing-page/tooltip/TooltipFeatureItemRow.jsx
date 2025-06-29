import { isBool } from "../../../utility/isBool";
import classes from "./TooltipFeatureItemRow.module.css";

export function TooltipFeatureItemRow({ feature }) {
  return (
    <li className={classes.row}>
      <h4 className={classes.title}>{feature.name}</h4>
      <ul className={classes.list}>
        {feature.values.map(v => (
          <li className={classes["list-item"]} key={v.label}>
            <div className={classes.label}>{v.label}</div>
            <div className={classes.value}>{isBool(v.value)}</div>
          </li>
        ))}
      </ul>
    </li>
  );
}
