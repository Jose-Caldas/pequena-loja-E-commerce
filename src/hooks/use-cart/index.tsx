import { useContext, createContext, useState, useEffect } from "react";
import { useQueryProducts } from "../../graphql/queries/products";
import { formatPrice } from "../../utils/formatPrice";
import { getStorageItem } from "../../utils/localStorage";
import { productsMapper } from "../../utils/mappers";

const CART_KEY = "cartItems";

type CartItem = {
  id: string;
  name: string;
  price: string;
  image: string;
  slug: string;
};

export type CartContextData = {
  items: CartItem[];
  quantity: number;
  total: string;
};

export const CartContextDefaultValues = {
  items: [],
  quantity: 0,
  total: "$0.00",
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

  const total = data?.products.reduce((acc, product) => {
    return acc + product.price;
  }, 0);

  return (
    <CartContext.Provider
      value={{
        items: productsMapper(data?.products),
        quantity: cartItems.length,
        total: formatPrice(total || 0),
      }}
    >
      {children}
    </CartContext.Provider>
  );
};

const useCart = () => useContext(CartContext);

export { CartProvider, useCart };
