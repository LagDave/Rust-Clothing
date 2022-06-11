import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon  } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartDropdownContext } from "../contexts/CartDropdownContext";

const CartIcon = () => { 

  const {cartDropdownState, setCartDropdownState, cartItems} = useContext(CartDropdownContext)
  const toggleCartDropdownState = () => setCartDropdownState(!cartDropdownState)
  const cartCount = cartItems.reduce((total, item) => total += item.quantity, 0);

  return (
    <div className="cart-icon-container" onClick={toggleCartDropdownState}>
      <ShoppingIcon className="shopping-icon"/>
      <span className="item-count">{cartCount}</span>
    </div>
  )
}

export default CartIcon;