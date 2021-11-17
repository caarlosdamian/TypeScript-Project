import { Props as ProductCardButtons } from "../components/ProductButtons";
import { Props as ProductCardImageProps } from "../components/ProductImage";
import { Props as ProductCardProps } from "../components/ProductCard";
import {
  Props as ProductCardTitleProps,
  ProductTitle,
} from "../components/ProductTitle";
import { MouseEventHandler } from "react";

export interface Product {
  id: string;
  title: string;
  img?: string;
}

export interface ProductContextProps {
  counter: number;
  increseBy: (value: number) => void;
  product: Product;
  maxCount?: number;
}

export interface ProductCardHOCProps {
  ({ product, children }: ProductCardProps): JSX.Element;
  Title: (Props: ProductCardTitleProps) => JSX.Element;
  Image: (Props: ProductCardImageProps) => JSX.Element;
  Buttons: (Props: ProductCardButtons) => JSX.Element;
}
export interface onChangeArgs {
  product: Product;
  count: number;
}

export interface ProductInCart extends Product {
  count: number;
}

export interface initialValues {
  count?: number;
  maxCount?: number;
}

export interface ProductCardHandlers {
  count: number;
  isMaxCountReached: boolean;
  maxCount?: number;
  product: Product;

  increaseBy: (value: number) => void;
  reset: () => void;
}
