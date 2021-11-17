import styles from "../styles/styles.module.css";
import { useProduct } from "../hooks/useProduct";
import { createContext } from "react";
import {
  ProductContextProps,
  Product,
  onChangeArgs,
  initialValues,
  ProductCardHandlers,
} from "../interfaces/interfaces";

export const ProductContext = createContext({} as ProductContextProps);
const { Provider } = ProductContext;
export interface Props {
  product: Product;
  // children?: ReactElement | ReactElement[];
  children: (args: ProductCardHandlers) => JSX.Element;
  className?: string;
  style?: React.CSSProperties;
  onChange?: (args: onChangeArgs) => void;
  value?: number;
  initialValues: initialValues;
}

export const ProductCard = ({
  children,
  product,
  className,
  style,
  onChange,
  value,
  initialValues,
}: Props) => {
  const { counter, increseBy, maxCount, isMaxCountReached, reset } = useProduct(
    {
      onChange,
      product,
      value,
      initialValues,
    }
  );

  return (
    <Provider
      value={{
        counter,
        increseBy,
        product,
        maxCount,
      }}
    >
      <div style={style} className={`${styles.productCard} ${className}`}>
        {children({
          count: counter,
          maxCount: initialValues.maxCount,
          isMaxCountReached: isMaxCountReached,
          increaseBy: increseBy,
          reset: reset,
          product: product,
        })}
      </div>
    </Provider>
  );
};
