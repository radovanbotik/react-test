import Container from "../ui/Container";
import { Product } from "./Product";
import classes from "./ProductList.module.css";

export function ProductList({ items }) {
  return (
    <Container className={classes.container}>
      <ul role="list" className={classes.grid}>
        {items.map(item => (
          <li key={item.id}>
            <Product item={item} />
          </li>
        ))}
      </ul>
    </Container>
  );
}
