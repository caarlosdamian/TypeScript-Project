import ProductCard, {
  ProductButtons,
  ProductTitle,
  ProductImage,
} from "../components/index";
import products from "../data/products";
import "../styles/custom-styles.css";

const product = products[0];
export const ShoppingPage = () => {
  console.log(product);
  return (
    <div>
      <h1>Shopping Store</h1>
      <hr />

      <div style={{ display: "flex", flexDirection: "row", flexWrap: "wrap" }}>
        <ProductCard
          className="bg-dark text-white"
          product={product}
          key={product.id}
          initialValues={{
            count: 4,
            maxCount: 10,
          }}
        >
          {({ reset, increaseBy, isMaxCountReached, count }) => (
            <>
              <ProductImage className="custom-image" img={product.img} />
              <ProductTitle className="text-bold" title={product.title} />
              <ProductButtons className="custom-buttons" />\
              <button onClick={reset}>Reset</button>
              <button onClick={() => increaseBy(-2)}>-2</button>
              {!isMaxCountReached && (
                <button onClick={() => increaseBy(2)}>+2</button>
              )}
              <span>{count}</span>
            </>
          )}
        </ProductCard>
      </div>
    </div>
  );
};
