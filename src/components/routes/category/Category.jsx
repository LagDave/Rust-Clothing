import "./category.styles.scss";
import { useParams } from "react-router-dom";
import { useContext, useState, useEffect } from "react";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../product-card/ProductCard";

const Category = () => {
  const { category } = useParams();
  const { categoriesMap } = useContext(CategoriesContext);

  const [products, setProducts] =  useState([]);

  useEffect(() => {
    setProducts(categoriesMap[category]);
  }, [category, categoriesMap])

  return (
    <>
      <div className="products-container">
        {
          categoriesMap[category] && categoriesMap[category].map( product => (
            <ProductCard key={product.id} product={product}/>
          ))
        }
      </div>
    </>
  )

}

export default Category;