import "./cart-icon.styles.scss";
import { ReactComponent as ShoppingIcon  } from "../../assets/shopping-bag.svg";
import { useContext } from "react";
import { CartDropdownContext } from "../contexts/CartDropdownContext";

const CartIcon = () => { 

  const {cartDropdownState, setCartDropdownState} = useContext(CartDropdownContext)
  const toggleCartDropdownState = () => setCartDropdownState(!cartDropdownState)

  return (
    <div className="cart-icon-container" onClick={toggleCartDropdownState}>
      <ShoppingIcon className="shopping-icon"/>
    </div>
  )
}

export default CartIcon;