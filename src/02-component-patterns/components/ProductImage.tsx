import { useContext } from "react";
import NoPicture from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export const ProductImage = ({ img = "" }) => {
  const { product } = useContext(ProductContext);
  let imgtoShow: string;
  if (img) {
    imgtoShow = img;
  } else if (product.img) {
    imgtoShow = product.img;
  } else {
    imgtoShow = "";
  }
  return (
    <img
      className={styles.productImg}
      src={img ? imgtoShow : NoPicture}
      alt="Coffe mug"
    />
  );
};
