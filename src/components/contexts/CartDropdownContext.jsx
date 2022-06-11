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

export const CartDropdownContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {}
});

export const CartDropdownProvider = ({children}) => {

  const [cartDropdownState, setCartDropdownState] = useState(false);
  const [cartItems, setCartItems] = useState([]);

  const addItemToCart =  (productToAdd) => {
    setCartItems(addCartItem(cartItems, productToAdd));
  }

  const value = { cartDropdownState, setCartDropdownState, addItemToCart, cartItems }; 
  
  return (
    <CartDropdownContext.Provider value={value}> { children } </CartDropdownContext.Provider>
  )
}