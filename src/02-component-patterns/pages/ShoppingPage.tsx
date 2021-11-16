import ProductCard, {
  ProductButtons,
  ProductTitle,
  ProductImage,
} from "../components/index";
import products from "../data/products";
import "../styles/custom-styles.css";
import { useShoppingCard } from "../hooks/userShoppingCart";

export const ShoppingPage = () => {
  const { onProductCountChange, shoppingCart } = useShoppingCard();

  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        {products.map((value) => (
          <ProductCard
            className="bg-dark text-white"
            product={value}
            key={value.id}
            onChange={onProductCountChange}
            value={shoppingCart[value.id]?.count || 0}
          >
            <ProductImage className="custom-image" img={value.img} />
            <ProductTitle className="text-bold" title={value.title} />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
      </div>
      <div className="shopping-cart">
        {Object.entries(shoppingCart).map(([key, product]) => (
          <ProductCard
            className="bg-dark text-white"
            product={product}
            key={key}
            style={{ width: "100px" }}
            value={product.count}
            onChange={onProductCountChange}
          >
            <ProductImage className="custom-image" img={product.img} />
            <ProductTitle className="text-bold" title={product.title} />
            <ProductButtons
              className="custom-buttons"
              style={{ display: "flex", justifyContent: "center" }}
            />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
