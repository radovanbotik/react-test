import { formatPrice } from "../../utility/formatPrice";
import classes from "./ProductHeader.module.css";

export function ProductHeader({ name, price, description }) {
  return (
    <>
      <h3 className={classes.name}>{name}</h3>
      <p className={classes.price}>{formatPrice({ price: price })}</p>
      <p className={classes.description}>{description}</p>
    </>
  );
}
