import { formatPrice } from "../../utility/formatPrice";
import classes from "./CheckoutSummary.module.css";

export function CheckoutSummary({ totalPrice }) {
  return (
    <dl className={classes.wrap}>
      <div className={classes["inner-wrap"]}>
        <dt className={classes.term}>Total Order Value</dt>
        <dd className={classes.definition}>{formatPrice({ price: totalPrice })}</dd>
      </div>
    </dl>
  );
}
