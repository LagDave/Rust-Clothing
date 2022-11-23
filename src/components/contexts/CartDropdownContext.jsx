import { createContext, useReducer} from "react";

export const CartDropdownContext = createContext();

const cartReducer = (state, action) => {
  const {type, payload} = action;

  switch(type){

    case 'ADD_CART_ITEM':
      const existingCartItem = state.cartItems.find(item => item.id === payload.id);
      if (existingCartItem) {
        return { ...state, cartItems: state.cartItems.map((cartItem) =>
          cartItem.id === payload.id
            ? { ...cartItem, quantity: cartItem.quantity + 1 }
            : cartItem
        ) }
      }
      return {...state, cartItems: [ ...state.cartItems, { ...payload, quantity: 1} ] }
    
    case 'DECREASE_CART_ITEM':

      return {...state, cartItems: state.cartItems.map(productItem => {
        if(productItem.id === payload.id){
          if(productItem.quantity > 0){
            productItem.quantity -= 1;
            return productItem;
          }
        }
        return productItem;
      }).filter((productItem) => productItem.quantity > 0)};

    case 'REMOVE_CART_ITEM':
      return {...state, cartItems: state.cartItems.filter((productItem) => productItem.id !== payload.id)}

    case 'SET_CART_DROPDOWN_STATE':
      return {
        ...state,
        cartDropdownState: !state.cartDropdownState
      }
      
    default:
      break;
  }

}

export const CartDropdownProvider = ({children}) => {

  const [{ cartDropdownState, cartItems }, cartReducerDispatch] = useReducer(cartReducer, {cartDropdownState: false, cartItems: []});
  
  const setCartDropdownState = () => {
    cartReducerDispatch({type: 'SET_CART_DROPDOWN_STATE'})
  }

  const addItemToCart =  (productToAdd) => {
    cartReducerDispatch({type: 'ADD_CART_ITEM', payload: productToAdd});
  }

  const decreaseItemOnCart = (productToRemove) => {
    cartReducerDispatch({type: 'DECREASE_CART_ITEM', payload: productToRemove});
  }

  const removeItemFromCart = (productToRemove) => {
    cartReducerDispatch({type: 'REMOVE_CART_ITEM', payload: productToRemove});
  }

  const total = cartItems.reduce((total, productItem) => total += productItem.price * productItem.quantity, 0);

  const value = { cartDropdownState, setCartDropdownState, addItemToCart, cartItems, decreaseItemOnCart, removeItemFromCart, total }; 
  
  return (
    <CartDropdownContext.Provider value={value}> { children } </CartDropdownContext.Provider>
  )
}