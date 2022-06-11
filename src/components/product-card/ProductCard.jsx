import "./product-card.styles.scss";
import Button from "../button/Button";
import { useContext } from "react";
import { CartDropdownContext } from "../contexts/CartDropdownContext";

const ProductCard = ({product}) => {

  const { addItemToCart } = useContext(CartDropdownContext);
  const {price, name, imageUrl } = product; 
  const addProductToCart = () => addItemToCart(product)
  
  return (
    <div className="product-card-container">
    <img src={imageUrl}  alt={`${name}`}/>
    <div className="footer">
      <span className="name">{name}</span>
      <span className="price">{price}</span>
    </div>
    <Button onClick={addProductToCart} buttonType='inverted'>Add to Cart</Button>
  </div>
  )

}

export default ProductCard; 