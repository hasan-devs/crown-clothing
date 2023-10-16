import CategoryItem from "../categoryItem/category-item.component";
import "./categories.styles.scss";

const Categories = ({ categories }) => {
  return (
    <div className="categories-container">
      {categories.map((category, idx) => {
        return <CategoryItem category={category} key={idx} />;
      })}
    </div>
  );
};

export default Categories;


