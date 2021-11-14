import { Props as ProductCardButtons } from "../components/ProductButtons";
import { Props as ProductCardImageProps } from "../components/ProductImage";
import { Props as ProductCardProps } from "../components/ProductCard";
import { Props as ProductCardTitleProps } from "../components/ProductTitle";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increseBy: (value: number) => void;
  product: Product;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: (Props: ProductCardTitleProps) => JSX.Element;
  Image: (Props: ProductCardImageProps) => JSX.Element;
  Buttons: (Props: ProductCardButtons) => JSX.Element;
}
