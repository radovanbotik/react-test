import { Card } from "../../ui/Card";
import { useCart } from "../../../store/CartContext";
import { getItemCount, getTotal } from "../../../utility/shoppingCart";
import { Triangle } from "../../ui/Triangle";
import { MiniCartWithItems } from "./MiniCartWithItems";
import { MiniCartNoItems } from "./MiniCartNoItems";
import classes from "./MiniCart.module.css";
import clsx from "clsx";

export function MiniCart() {
  const { cartItems, showCart, anchorCoordinates } = useCart();
  const totalPrice = getTotal(cartItems);
  const totalCount = getItemCount(cartItems);
  const hasItems = cartItems.length !== 0;

  return (
    <Card
      id="cart"
      className={clsx(classes["mini-cart"], showCart ? classes.show : classes.hide)}
      onMouseDown={e => e.stopPropagation()}
      style={{ right: anchorCoordinates.right, top: "3.5rem" }}
    >
      <Triangle />
      {hasItems ? (
        <MiniCartWithItems totalCount={totalCount} totalPrice={totalPrice} cartItems={cartItems} />
      ) : (
        <MiniCartNoItems />
      )}
    </Card>
  );
}
