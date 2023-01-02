import {Routes, Route} from "react-router-dom";
import "./shop.styles.scss";

import { useEffect } from "react";
import { useDispatch } from "react-redux";

import CategoriesPreview from "../categories-preview/CategoriesPreview";
import Category from "../category/Category";

import { getCategoriesAndDocuments } from "../../../utils/firebase/firebase.utils";
import { setCategories } from "../../../store/categories/categories.action";

const Shop = () => {

  const dispatch = useDispatch();

  useEffect(() => {

    const getCategoriesMap = async () => {
      const categories = await getCategoriesAndDocuments();
      // console.log(categories);
      dispatch(setCategories(categories));
    }
    getCategoriesMap();

  }, [])

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