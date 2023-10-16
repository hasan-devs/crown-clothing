import { useParams } from 'react-router-dom';
import { useContext,useEffect,useState } from 'react';
import { CategoriesContext } from '../../context/Categories.context';
import ProductCard from '../../components/product-card/product-card.compoent';
import './category.styles.scss';

const Category = () => {
    const {category}  = useParams();
    const {categoriesMap} =  useContext(CategoriesContext);
    const [products,setProducts] = useState(categoriesMap[category]);

    useEffect(()=>{
        setProducts(categoriesMap[category]);
    },[categoriesMap,category]);
    return(
        <div className='sub-category-container'>
            {products && products.map(prod => <ProductCard product={prod} key={prod.id}/>)}
        </div>
    )

}

export default Category;