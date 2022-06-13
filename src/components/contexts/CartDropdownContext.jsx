import { createContext, useState} from "react";

const addCartItem = (cartItems, productToAdd) => {
  const existingCartItem = cartItems.find(item => item.id === productToAdd.id);

  if (existingCartItem) {
    return cartItems.map((cartItem) =>
      cartItem.id === productToAdd.id
        ? { ...cartItem, quantity: cartItem.quantity + 1 }
        : cartItem
    );
  }
  return [...cartItems, { ...productToAdd, quantity: 1}]
}

const decreaseCartItem = (cartItems, productToRemove) => {
  return cartItems.map(productItem => {
    if(productItem.id === productToRemove.id){
      if(productItem.quantity > 0){
        productItem.quantity -= 1;
        return productItem;
      }
    }
    return productItem;
  }).filter((productItem) => productItem.quantity > 0);
} 

const removeCartItem = (cartItems, productToRemove) => {
  return cartItems.filter((productItem) => productItem.id !== productToRemove.id);
}

export const CartDropdownContext = createContext();

export const CartDropdownProvider = ({children}) => {

  const [cartDropdownState, setCartDropdownState] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart =  (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const decreaseItemOnCart = (productToRemove) => {
    setCartItems(decreaseCartItem(cartItems, productToRemove));
  }

  const removeItemFromCart = (productToRemove) => {
    setCartItems(removeCartItem(cartItems, productToRemove));
  }

  const total = cartItems.reduce((total, productItem) => total += productItem.price * productItem.quantity, 0);

  const value = { cartDropdownState, setCartDropdownState, addItemToCart, cartItems, decreaseItemOnCart, removeItemFromCart, total }; 
  
  return (
    <CartDropdownContext.Provider value={value}> { children } </CartDropdownContext.Provider>
  )
}