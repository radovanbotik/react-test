import classes from "./TooltipImage.module.css";

export function TooltipImage({ imageSrc, alt }) {
  return (
    <div className={classes["image-container"]}>
      <img src={imageSrc} alt={alt} className={classes.image} />
    </div>
  );
}
