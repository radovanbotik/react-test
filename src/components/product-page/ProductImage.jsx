import classes from "./ProductImage.module.css";

export function ProductImage({ alt, imageUrl }) {
  return <img alt={alt} src={imageUrl} className={classes.image} />;
}
