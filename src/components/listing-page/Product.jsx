import { useCart } from "../../store/CartContext";
import { Card } from "../ui/Card";
import { TooltipTrigger } from "./tooltip/TooltipTrigger";
import { Tooltip } from "./tooltip/Tooltip";
import { Button } from "../ui/Button";
import { useState } from "react";
import { ProductImage } from "./ProductImage";
import { ProductInfo } from "./ProductInfo";
import { formatPrice } from "../../utility/formatPrice";
import classes from "./Product.module.css";

export function Product({ item }) {
  const { addToCart } = useCart();
  const price = formatPrice({ price: item.price });
  const [showTooltip, setShowTooltip] = useState(false);
  const [isLeft, setIsLeft] = useState(false);
  const buttonOffset = 8;
  const tooltipWidth = 320;

  function onMouseEnter(e) {
    const anchoringButtonRight = e.target.getBoundingClientRect().right;
    if (window.innerWidth - (anchoringButtonRight + buttonOffset) < tooltipWidth) {
      setIsLeft(true);
    }
    setShowTooltip(true);
  }

  function onMouseLeave() {
    setShowTooltip(false);
  }

  return (
    <Card className={classes.card}>
      <TooltipTrigger onMouseEnter={onMouseEnter} onMouseLeave={onMouseLeave} />
      <Tooltip item={item} isShown={showTooltip} isLeft={isLeft} />
      <ProductImage imageSrc={item.imageUrl} alt={`${item.description}`} />
      <ProductInfo attributes={[item.name, price]} />
      <Button className={classes.button} onClick={() => addToCart(item)}>
        Add to Cart
      </Button>
    </Card>
  );
}
