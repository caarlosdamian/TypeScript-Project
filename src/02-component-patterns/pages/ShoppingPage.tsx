import ProductCard, {
  ProductButtons,
  ProductTitle,
  ProductImage,
} from "../components/index";
import "../styles/custom-styles.css";

const products = [
  {
    id: "1",
    title: "Coffe Mug - Card",
    img: "./coffee-mug.png",
  },
  {
    id: "2",
    title: "Coffe Mug - NoIMG",
  },
];

export const ShoppingPage = () => {
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
          >
            <ProductImage className="custom-image" img={value.img} />
            <ProductTitle className="text-bold" title={value.title} />
            <ProductButtons className="custom-buttons" />
          </ProductCard>
        ))}
        {products.map((value) => (
          <ProductCard
            className="bg-dark text-white"
            product={value}
            key={value.id}
          >
            <ProductCard.Image className="custom-image" img={value.img} />
            <ProductCard.Title className="text-bold" title={value.title} />
            <ProductCard.Buttons className="custom-buttons" />
          </ProductCard>
        ))}
        {products.map((value) => (
          <ProductCard
            style={{ backgroundColor: "#70D1F8" }}
            product={value}
            key={value.id}
          >
            <ProductCard.Image img={value.img} />
            <ProductCard.Title title={value.title} />
            <ProductCard.Buttons />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
