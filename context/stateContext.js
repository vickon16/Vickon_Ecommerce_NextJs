import { useLocalStorage } from "@/hooks/useLocalStorage";
import product from "@/sanity_backend/schemas/product";
import React, {createContext, useContext, useState, useEffect} from "react";
import {toast} from "react-hot-toast";

const StateContext = createContext();

export const StateContextProvider = ({children}) => {
  const [showCart, setShowCart] = useState(false);
  const [cartItems, setCartItems] = useState([]);
  const [totalPrice, setTotalPrice] = useState(0);
  const [totalQuantities, setTotalQuantities] = useState(0);
  const [qty, setQty] = useState(1);

  const incQty = () => setQty(prev => prev + 1);
  const decQty = () => {
    setQty((prev) => {
      if (prev - 1 < 1) return 1
      return prev - 1;
    });
  };

  const resetState = () => {
    setCartItems([]);
    setTotalPrice(0);
    setTotalQuantities(0);
    setQty(0);
    localStorage.removeItem("cartItems");
  }

  const resetQty = () => setQty(1);


  const onAdd = (product, quantity) => {
    setTotalPrice(prev => prev + (product.price * quantity));
    setTotalQuantities(prev => prev + quantity);

    const checkProductInCart = cartItems?.find(item => item._id === product._id);

    if (checkProductInCart) {
      const updatedCartItems = cartItems.map(cartItem => 
        cartItem._id === product._id ?
        ({...cartItem, quantity : cartItem.quantity + quantity}) : cartItem
      )

      setCartItems(updatedCartItems);
    } else {
      product.quantity = quantity;
       setCartItems([{...product}, ...cartItems])
    }

    toast.success(`${qty} ${product.name} added to the cart.`);
  }

  const onRemove = (_id) => {
    const foundProduct = cartItems.find((item) => item._id === _id);
    const updatedCartItems = cartItems.filter(cartItem => cartItem._id !== _id);

    setTotalPrice(prev => prev - (foundProduct.quantity * foundProduct.price));
    setTotalQuantities(prev => prev - foundProduct.quantity);
    setCartItems(updatedCartItems);
  }

  const toggleCartItemQuantity = (id, value) => {
    const foundProduct = cartItems.find(item => item._id === id);

    if (value === "inc") {
      const updatedCartItems = cartItems.map(item => 
        item._id === foundProduct._id ? 
        {...item, ...foundProduct, quantity : foundProduct.quantity + 1} : item
      )
      setCartItems(updatedCartItems);
      setTotalPrice(prev => prev + foundProduct.price);
      setTotalQuantities(prev => prev + 1);
    } else if (value === "dec") {
      if (foundProduct.quantity > 1) {
        const updatedCartItems = cartItems.map((item) =>
          item._id === foundProduct._id
            ? { ...item, ...foundProduct, quantity: foundProduct.quantity - 1 }
            : item
        );
        setCartItems(updatedCartItems);
        setTotalPrice((prev) => prev - foundProduct.price);
        setTotalQuantities((prev) => prev - 1);
      }
    }
  }

  return (
    <StateContext.Provider
      value={{
        showCart,
        setShowCart,
        resetState,
        cartItems,
        totalPrice,
        totalQuantities,
        qty,
        incQty,
        decQty,
        onAdd,
        onRemove,
        resetQty,
        toggleCartItemQuantity
      }}
    >
      {children}
    </StateContext.Provider>
  );
}

export const useStateContext = () => useContext(StateContext);