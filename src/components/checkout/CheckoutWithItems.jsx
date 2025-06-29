import { Link } from "react-router";
import { Button } from "../ui/Button";
import { Divider } from "../ui/Divider";
import { CheckoutItemRow } from "./CheckoutItemRow";
import { CheckoutSummary } from "./CheckoutSummary";
import classes from "./CheckoutWithItems.module.css";

export function CheckoutWithItems({ cartItems, totalPrice }) {
  return (
    <>
      <ul role="list" className={classes.list}>
        {cartItems.map(item => (
          <CheckoutItemRow key={item.id} item={item} />
        ))}
      </ul>

      <CheckoutSummary totalPrice={totalPrice} />
      <Button disabled={true} className={classes.button}>
        Checkout
      </Button>
      <Divider text="or" className={classes.divider} />
      <Link to={"/listing-page"} className={classes.link}>
        Continue shopping
      </Link>
    </>
  );
}
