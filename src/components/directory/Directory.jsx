import  './directory.styles.scss';
import CategoryItem from '../category-item/CategoryItem';

const Directory = ({categories}) => {
  return (
    <div className="categories-container">
      {categories.map(({id, title, imageUrl}) => (
        <CategoryItem key={id} title={title} imageUrl={imageUrl}/>
      ))}
    </div>
  )
}

export default Directory;