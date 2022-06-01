import { useContext } from "react";
import { ProductContext } from "../../contexts/ProductContext";

const Shop = () => {

  const {products} = useContext(ProductContext)

  return (
    <div>
      {
        products.map(({id, name}) => (
           <div key={id}>
             <p>{name}</p>
           </div>
        ))
      }
    </div>
  )
}

export default Shop;