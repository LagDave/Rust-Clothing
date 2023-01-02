import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import ProductCard from "../../product-card/ProductCard";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../store/categories/categories.selector";

const Category = () => {
  const { category } = useParams();
  const categoriesMap  = useSelector(selectCategoriesMap);

  const [products, setProducts] =  useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])

  return (
    <>
      <div className="products-container">
        {
          products && products.map( product => (
            <ProductCard key={product.id} product={product}/>
          ))
        }
      </div>
    </>
  )

}

export default Category;