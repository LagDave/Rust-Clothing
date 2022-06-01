import { createContext } from "react";
import { useState } from "react";
import shopData from "../../shop-data.json";

export const ProductContext  = createContext({
  products: []
});
export const ProductProvider = ({children}) => {

  const [products, setProducts] = useState(shopData);
  const value = {products}

  return (
    <ProductContext.Provider value={value}> {children} </ProductContext.Provider>
  )
}