import { useState } from "react";
import { onChangeArgs, ProductInCart } from "../interfaces/interfaces";

export const useShoppingCard = () => {
  const [shoppingCart, setShoppingCart] = useState<{
    [key: string]: ProductInCart;
  }>({});

  const onProductCountChange = ({ count, product }: onChangeArgs) => {
    setShoppingCart((oldShopping) => {
      if (count === 0) {
        const { [product.id]: toDelete, ...rest } = oldShopping;
        console.log(toDelete);
        return { ...rest };
      }
      return {
        ...oldShopping,
        [product.id]: { ...product, count },
      };
    });
  };

  return {
    onProductCountChange,
    shoppingCart,
  };
};
