import classes from "./ProductImage.module.css";
import { Link } from "react-router";

export function ProductImage({ imageSrc, alt, id }) {
  return (
    <div className={classes.wrap}>
      <img src={imageSrc} alt={alt} className={classes.image} />
      <Link to={id} className={classes.link} />
    </div>
  );
}
