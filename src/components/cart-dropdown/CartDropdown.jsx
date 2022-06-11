import "./cart-dropdown.styles.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { useContext } from "react";
import { CartDropdownContext } from "../contexts/CartDropdownContext";

const CartDropdown = () => {
  
  const {cartItems} = useContext(CartDropdownContext)

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        }
      </div>
      <Button>Go to</Button>
    </div>
  )
}

export default CartDropdown;