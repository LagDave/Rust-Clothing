import { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { CategoriesContext } from "../../contexts/CategoriesContext";
import ProductCard from "../../product-card/ProductCard";
 
const CategoriesPreview = () => {

  const {categoriesMap} = useContext(CategoriesContext)

  return (
    <>
      {
        Object.keys(categoriesMap).map(title => (
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