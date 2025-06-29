import { formatPrice } from "../../../utility/formatPrice";
import clsx from "clsx";
import classes from "./MiniCartItemRow.module.css";

export function MiniCartItemRow({ item }) {
  return (
    <tr>
      <td className={clsx(classes.cell, classes.cell1)}>{item.name}</td>
      <td className={clsx(classes.cell, classes.cell2)}>{item.count}</td>
      <td className={clsx(classes.cell, classes.cell3)}>{formatPrice({ price: item.price * item.count })}</td>
    </tr>
  );
}
