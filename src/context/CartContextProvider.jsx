import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { addItem, removeItem, resetItem } from "../Slice/CartSlice";
import CartContext from "./CartContext";

function CartContextProvider({ children }) {
  const cart = useSelector((state) => state.cart);
  const dispatch = useDispatch();

  const addToCart = (item) => {
    dispatch(addItem(item));
  };

  const removeFromCart = (id) => {
    dispatch(removeItem(id));
  };

  const resetCart = () => {
    dispatch(resetItem());
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart, resetCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartContextProvider;
