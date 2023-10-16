import "./category-preview.styles.scss";
import ProductCard from "../product-card/product-card.compoent";
import { Link } from "react-router-dom";

const CategoryPreview = ({ title, products }) => {
  return (
    <div className="category-preview-container">
      <h2>
        <Link to={`${title}`}>
          <span className="title">{title}</span>
        </Link>
      </h2>
      <div className="preview">
        {products
          .filter((_, idx) => idx < 4)
          .map((prod) => (
            <ProductCard key={prod.id} product={prod} />
          ))}
      </div>
    </div>
  );
};

export default CategoryPreview;
