import classes from "./ProductInfo.module.css";

export function ProductInfo({ attributes }) {
  return (
    <ul className={classes.list}>
      {attributes.map((attribute, idx) => (
        <li key={idx}>{attribute}</li>
      ))}
    </ul>
  );
}
