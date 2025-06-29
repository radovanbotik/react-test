import classes from "./MiniCartTotal.module.css";
import { formatPrice } from "../../../utility/formatPrice";

export function MiniCartTotal({ totalPrice }) {
  const price = formatPrice({ price: totalPrice });

  return (
    <div className={classes.container}>
      <div className={classes.header}>Total Order Value</div>
      <div className={classes.cell}>{price}</div>
    </div>
  );
}
