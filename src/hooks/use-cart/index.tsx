import { useContext, createContext, useState, useEffect } from "react";
import { useQueryProducts } from "../../graphql/queries/products";
import { getStorageItem } from "../../utils/localStorage";
import { productsMapper } from "../../utils/mappers";

const CART_KEY = "cartItems";

type CartItem = {
  id: string;
  name: string;
  price: number;
  image: string;
  slug: string;
};

export type CartContextData = {
  items: CartItem[];
};

export const CartContextDefaultValues = {
  items: [],
};

export const CartContext = createContext<CartContextData>(
  CartContextDefaultValues
);

export type CartProviderProps = {
  children: React.ReactNode;
};

const CartProvider = ({ children }: CartProviderProps) => {
  const [cartItems, setCartItems] = useState<string[]>([]);

  useEffect(() => {
    const data = getStorageItem(CART_KEY);

    if (data) {
      setCartItems(data);
    }
  }, []);

  const { data } = useQueryProducts({
    skip: !cartItems?.length,
    variables: {
      id: cartItems,
    },
  });

  return (
    <CartContext.Provider
      value={{
        items: productsMapper(data?.products),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
