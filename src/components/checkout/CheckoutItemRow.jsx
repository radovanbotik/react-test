import { formatPrice } from "../../utility/formatPrice";
import { CheckoutItemButtons } from "./CheckoutItemButtons";
import classes from "./CheckoutItemRow.module.css";

export function CheckoutItemRow({ item }) {
  return (
    <li key={item.id} className={classes.wrap}>
      <img alt={item.imageAlt} src={item.imageUrl} className={classes.image} />

      <div className={classes.content}>
        <div className={classes["name-price-wrap"]}>
          <p>{item.name}</p>
          <p>{formatPrice({ price: item.price * item.count })}</p>
        </div>
        <CheckoutItemButtons item={item} />
      </div>
    </li>
  );
}
