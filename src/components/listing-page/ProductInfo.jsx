import { Link } from "react-router-dom";
import classes from "./ProductInfo.module.css";

export function ProductInfo({ id, name, price }) {
  return (
    <ul className={classes.list}>
      <li className={classes.name}>
        {name}
        <Link to={id} className={classes.link} />
      </li>
      <li>{price}</li>
    </ul>
  );
}
