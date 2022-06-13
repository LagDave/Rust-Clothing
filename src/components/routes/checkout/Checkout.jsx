import "./checkout.styles.scss";
import { useContext } from "react";
import { CartDropdownContext } from "../../contexts/CartDropdownContext";
import CheckoutItem from "../../checkout-item/CheckoutItem";

const Checkout = () => {

  const {cartItems, total} = useContext(CartDropdownContext);
  return (
    <div class="checkout-container">
      <div className="checkout-header">
        <div className="header-block"><span>Product</span></div>
        <div className="header-block"><span>Description</span></div>
        <div className="header-block"><span>Quantity</span></div>
        <div className="header-block"><span>Price</span></div>
        <div className="header-block"><span>Remove</span></div>
      </div>
      {
        cartItems.map((item) => <CheckoutItem key={item.id} item={item}/>)
      }

      <span className="total">Total: ${total}</span>
    </div>
  )
}

export default Checkout;