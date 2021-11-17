import { useCallback, useContext } from "react";
import { ProductContext } from "./ProductCard";
import styles from "../styles/styles.module.css";

export interface Props {
  className?: string;
  style?: React.CSSProperties;
}

export const ProductButtons = ({ className }: Props) => {
  //TODO: maxCount
  const { counter, increseBy, maxCount } = useContext(ProductContext);

  const isMaxReached = useCallback(
    () => !!maxCount && counter === maxCount,
    [counter, maxCount]
  );
  // isMaxReached = useCallback()
  return (
    <div className={`${styles.buttonsContainer} ${className}`}>
      <button className={styles.buttonMinus} onClick={() => increseBy(-1)}>
        -
      </button>
      <div className={styles.countLabel}> {counter}</div>
      <button
        className={`${styles.buttonAdd} ${isMaxReached() && styles.disable}`}
        onClick={() => increseBy(1)}
      >
        +
      </button>
    </div>
  );
};
