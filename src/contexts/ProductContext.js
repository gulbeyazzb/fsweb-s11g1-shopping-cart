import { createContext } from "react";
import { data } from "../data";
import React, { useState } from "react";

export const ProductContext = createContext();

export const ProductContextProvider = ({ children }) => {
  const [products, setProducts] = useState(data);
  const [cart, setCart] = useState([]);
  const [count, setCount] = useState(0);

  const addItem = (item) => {
    setCart([...cart, item]);
    setCount(count + 1);
  };

  const removeItem = (itemId) => {
    setCart(cart.filter((c) => c.id !== itemId));
  };

  return (
    <ProductContext.Provider
      value={{ products, cart, addItem, removeItem, count }}
    >
      {children}
    </ProductContext.Provider>
  );
};
