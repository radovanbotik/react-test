import { Button } from "../ui/Button";
import classes from "./CheckoutNoItems.module.css";

export function CheckoutNoItems() {
  return (
    <>
      <h4>You don't have any items in your cart</h4>
      <Button href={"/listing-page"} className={classes.button}>
        Continue shopping
      </Button>
    </>
  );
}
