import { Link, useParams } from "react-router";
import { Button } from "../../components/ui/Button";
import { data } from "../../data/data";
import Container from "../../components/ui/Container";
import { TooltipFeatureItemRow } from "../../components/listing-page/tooltip/TooltipFeatureItemRow";
import { Card } from "../../components/ui/Card";
import { useCart } from "../../store/CartContext";
import { ProductImage } from "../../components/product-page/ProductImage";
import { ProductHeader } from "../../components/product-page/ProductHeader";
import classes from "./ProductPage.module.css";

export default function ProductPage() {
  const { productId } = useParams();
  const { addToCart } = useCart();

  //we would fetch with productId directly
  const product = data.find(p => p.id === productId);

  return (
    <Container className={classes.container}>
      <Card className={classes.card}>
        <ProductImage imageUrl={product.imageUrl} alt={product.description} />

        <div>
          <ProductHeader description={product.description} name={product.name} price={product.price} />
          <Link to={".."} path="relative" className={classes["muted-button"]}>
            Continue shopping
          </Link>

          <Button onClick={() => addToCart(product)}>Add to Cart</Button>
          {product.features.map(feature => (
            <ul key={feature.name} className={classes.list}>
              {<TooltipFeatureItemRow feature={feature} />}
            </ul>
          ))}
        </div>
      </Card>
    </Container>
  );
}
