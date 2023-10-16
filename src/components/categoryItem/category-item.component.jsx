import {CategoryItemContainer,Body,BackgroundImage } from "./category-item.styles.jsx";

const CategoryItem = ({category}) => {
    const {title,imageUrl,id} = category;
  return (
    <CategoryItemContainer key={id}>
      <BackgroundImage imageurl={imageUrl} />
      <Body>
        <h1>{title}</h1>
        <p>Shop Now</p> 
      </Body>
    </CategoryItemContainer>
  );
};

export default CategoryItem;
