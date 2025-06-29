import cart from "../../assets/cart.svg";
import { useCart } from "../../store/CartContext";
import { getItemCount } from "../../utility/shoppingCart";
import classes from "./CartToggle.module.css";

export function CartToggle({ ...props }) {
  const { cartItems, toggleCart, CartToggleRef } = useCart();
  const totalCount = getItemCount(cartItems);

  return (
    <button ref={CartToggleRef} id="shopping-button" className={classes.button} onMouseDown={toggleCart} {...props}>
      <div className={classes["button-inner-wrap"]}>
        <div className={classes["image-badge-wrap"]}>
          <img src={cart} className={classes.image} />
          <div className={classes.badge}>{totalCount}</div>
        </div>
        <span>Shopping Cart</span>
      </div>
    </button>
  );
}
