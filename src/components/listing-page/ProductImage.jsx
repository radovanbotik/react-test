import classes from "./ProductImage.module.css";

export function ProductImage({ imageSrc, alt }) {
  return <img src={imageSrc} alt={alt} className={classes.image} />;
}
