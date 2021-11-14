import { useContext } from "react";
import NoPicture from "../assets/no-image.jpg";
import styles from "../styles/styles.module.css";
import { ProductContext } from "./ProductCard";

export interface Props {
  img?: string;
  className?: string;
  style?: React.CSSProperties;

}
export const ProductImage = ({ img, className }: Props) => {
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
      className={`${styles.productImg} ${className}`}
      src={img ? imgtoShow : NoPicture}
      alt="Coffe mug"
    />
  );
};
