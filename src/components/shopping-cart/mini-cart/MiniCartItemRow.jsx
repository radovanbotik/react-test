import { formatPrice } from "../../../utility/formatPrice";
import clsx from "clsx";
import classes from "./MiniCartItemRow.module.css";

export function MiniCartItemRow({ item }) {
  return (
    <tr>
      <td className={clsx(classes.cell, classes["cell-left"])}>{item.name}</td>
      <td className={clsx(classes.cell, classes["cell-middle"])}>{item.count}</td>
      <td className={clsx(classes.cell, classes["cell-right"])}>{formatPrice({ price: item.price * item.count })}</td>
    </tr>
  );
}
