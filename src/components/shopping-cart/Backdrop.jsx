import clsx from "clsx";
import { useCart } from "../../store/CartContext";
import classes from "./Backdrop.module.css";

export function Backdrop() {
  const { showCart } = useCart();

  return <div className={clsx(classes.backdrop, showCart ? classes.show : classes.hide)}></div>;
}
