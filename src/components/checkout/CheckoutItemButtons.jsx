import { useCart } from "../../store/CartContext";
import classes from "./CheckoutItemButtons.module.css";

export function CheckoutItemButtons({ item }) {
  const { removeFromCart, addToCart, destroyCartItem } = useCart();

  return (
    <div className={classes.wrap}>
      <div className={classes["button-group"]}>
        <button className={classes.button} onClick={() => addToCart(item)}>
          +
        </button>
        <span>{item.count}</span>
        <button className={classes.button} onClick={() => removeFromCart(item)}>
          -
        </button>
      </div>
      <button className={classes["remove-button"]} onClick={() => destroyCartItem(item)}>
        Remove
      </button>
    </div>
  );
}
