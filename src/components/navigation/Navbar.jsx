import { ShoppingCart } from "../shopping-cart/ShoppingCart";
import Container from "../ui/Container";
import { Logo } from "./Logo";
import classes from "./Navbar.module.css";

export function Navbar() {
  return (
    <div className={classes.wrap}>
      <Container className={classes.container}>
        <Logo href={"/"}>HALLO WORLD</Logo>
        <ShoppingCart />
      </Container>
    </div>
  );
}
