import {Routes, Route} from "react-router-dom";
import "./shop.styles.scss";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";

const Shop = () => {

  return (
    <>
      <Routes>
        <Route index element={<CategoriesPreview/>}></Route>
        <Route path=":category" element={<Category />}></Route>
      </Routes>
    </>

  )
}

export default Shop;