import ProductCard, {
  ProductButtons,
  ProductTitle,
  ProductImage,
} from "../components/index";

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
          <ProductCard product={value} key={value.id}>
            <ProductImage img={value.img} />
            <ProductTitle title={value.title} />
            <ProductButtons />
          </ProductCard>
        ))}
        {products.map((value) => (
          <ProductCard product={value} key={value.id}>
            <ProductCard.Image img={value.img} />
            <ProductCard.Title title={value.title} />
            <ProductCard.Buttons />
          </ProductCard>
        ))}
      </div>
    </div>
  );
};
