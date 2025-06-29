import { Card } from "../../components/ui/Card";
import { useCart } from "../../store/CartContext";
import { getTotal } from "../../utility/shoppingCart";
import { CheckoutWithItems } from "../../components/checkout/CheckoutWithItems";
import { CheckoutNoItems } from "../../components/checkout/CheckoutNoItems";
import classes from "./Checkout.module.css";
import Container from "../../components/ui/Container";

export default function Checkout() {
  const { cartItems } = useCart();
  const totalPrice = getTotal(cartItems);

  const hasItems = cartItems.length !== 0;

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <h2 className={classes.heading}>Shopping Cart</h2>
        {hasItems ? <CheckoutWithItems totalPrice={totalPrice} cartItems={cartItems} /> : <CheckoutNoItems />}
      </Card>
    </Container>
  );
}
