import "./checkout-item.styles.scss"
import { useContext } from "react";
import { CartDropdownContext } from "../contexts/CartDropdownContext";

const CheckoutItem = ({item}) => {
  const {name, quantity, price, imageUrl} = item;
  const { addItemToCart, decreaseItemOnCart, removeItemFromCart } = useContext(CartDropdownContext);

  return (
    <div className="checkout-item-container">
      <div className="image-container">
        <img width="100px" src={imageUrl} alt={name} />
      </div>
      
      <span className="name">{name}</span>
      <span className="quantity"><p><span onClick={() => decreaseItemOnCart(item)} className="arrow"> &#60; </span> {quantity} <span onClick={() => addItemToCart(item)} className="arrow"> &#62; </span> </p></span>
      <span className="price">{price}</span>

      <div onClick={() => removeItemFromCart(item)} className="remove-button">
        &#66338;
      </div>
      
    </div>
  )  
}

export default CheckoutItem;