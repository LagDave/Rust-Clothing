import "./cart-dropdown.styles.scss";
import Button from "../button/Button";
import CartItem from "../cart-item/CartItem";
import { useContext } from "react";
import { CartDropdownContext } from "../contexts/CartDropdownContext";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {
  
  const {cartItems} = useContext(CartDropdownContext)
  const navigate = useNavigate();
  const goToCheckoutHandler = () => {
    navigate('/checkout');     
  }

  return (
    <div className="cart-dropdown-container">
      <div className="cart-items">
        {
          cartItems.map(item => <CartItem key={item.id} cartItem={item} />)
        }
      </div>
      <Button onClick={goToCheckoutHandler}>Go to Checkout</Button>
    </div>
  )
}

export default CartDropdown;