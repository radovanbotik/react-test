import { useLocation, useNavigate } from "react-router";
import { useCart } from "../../../store/CartContext";
import { Button } from "../../ui/Button";
import { Divider } from "../../ui/Divider";
import { MiniCartTable } from "./MiniCartTable";
import { MiniCartTotal } from "./MiniCartTotal";
import classes from "./MiniCartWithItems.module.css";

export function MiniCartWithItems({ totalCount, cartItems, totalPrice }) {
  const navigate = useNavigate();
  const location = useLocation();
  const { closeCart } = useCart();

  const isCheckout = location.pathname === "/checkout";
  const itemOrItems = totalCount > 1 ? "items" : "item";

  return (
    <>
      <div className={classes.container}>
        <h3 className={classes.title}>
          You have {totalCount} {itemOrItems} in your cart!
        </h3>
        <Divider className={classes.divider} />
        <MiniCartTable cartItems={cartItems} />
        <Divider className={classes.divider} />
        <MiniCartTotal totalPrice={totalPrice} />
        <Divider className={classes.divider} />
      </div>

      {!isCheckout && (
        <Button
          className={classes.button}
          onClick={() => {
            closeCart();
            navigate("/checkout");
          }}
        >
          Checkout
        </Button>
      )}
    </>
  );
}
