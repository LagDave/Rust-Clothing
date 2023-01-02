import { Fragment } from "react";
import { Link } from "react-router-dom";
import ProductCard from "../../product-card/ProductCard";
import { useSelector } from "react-redux";
import { selectCategoriesMap } from "../../../store/categories/categories.selector";
 
const CategoriesPreview = () => {
  
  const categoriesMap = useSelector(selectCategoriesMap);

  return (
    <>
      {
        categoriesMap && Object.keys(categoriesMap).map(title => (
          <Fragment key={title}>
            <Link to={`${title}`}>
              <h2>{title.charAt(0).toUpperCase() + title.slice(1)}</h2>
            </Link>
            
            <div className="products-container">
              {
                categoriesMap[title].slice(0, 4).map( product => (
                    <ProductCard key={product.id} product={product}/>
                ))
              }
            </div>
          </Fragment>
        ))
      }
    </>
  )
}

export default CategoriesPreview;