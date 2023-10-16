import { useState } from "react";
import { getCategoriesAndDocuments,addCollectionAndDocument } from "../../utils/firebase/firebase";

const inputFieldObj = {
  userName : '',
  userAge : '',
  productName : '',
  productDescription : '',
  productPrice : ''
};

const Test = () => {
  const [collection, setCollection] = useState("Products");
  const [inputFields,setInputFields] = useState(inputFieldObj);
  console.log(`inputFields : `,inputFields);
  const onSelectChange = (event) => {
    console.log(event.target.value);
    setCollection(event.target.value);
  };

  const onInputChange = (event) => {
    setInputFields({...inputFields,[event.target.name]:event.target.value});
  }

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    if(collection.toLocaleLowerCase() === "products"){
      console.log(collection);
      const {productName,productDescription,productPrice} = inputFields;
      const product = [{
        title : 'product',
        productName: productName,
        productDescription : productDescription,
        productPrice: productPrice
      }];
 
      console.log(`About to add : `, product);
      try {
        const res = await addCollectionAndDocument(collection.toLocaleLowerCase(),product);
        console.log('added product : ', res);
      } catch (error) {
        console.log(`error adding product : `, error.message);
      }

    }
  }
  console.log(inputFields);
  return (
    <div>
      <h3>Add a collection and document</h3>
      <form onSubmit={(event) => {onSubmitHandler(event)}}>
        <label name="collectionType">
          Collection Type :
          <select
            name="documentFields"
            id="document"
            onChange={(event) => onSelectChange(event)}
            defaultValue={collection}
          >
            <option value="Products">Product</option>
            <option value="Users">User</option>
          </select>
        </label>
        {collection === "Products" ? (
          <>
            <div>
              <label name="product-name">
                Product Name : <input type="text" name="productName" onChange={(event)=>onInputChange(event)} />
              </label>
            </div>
            <div>
              <label name="description">
                Product Description :{" "}
                <input type="text" name="productDescription" onChange={(event)=>onInputChange(event)}/>
              </label>
            </div>
            <div>
              <label name="product-price">
                Product Price : <input type="number" name="productPrice" onChange={(event)=>onInputChange(event)}/>
              </label>
            </div>
          </>
        ) : (
          <>
            <div>
              <label name="user-name">
                User Name : <input type="text" name="userName" onChange={(event)=>onInputChange(event)}/>
              </label>
            </div>
            <div>
              <label name="age">
                User Age : <input type="number" name="userAge" onChange={(event)=>onInputChange(event)}/>
              </label>
            </div>
          </>
        )}
        <button type="submit">Add Collection Data</button>
      </form>

      <h3>Get Collection Data</h3>
      <label>
        Collection Name : <input type="text" name="collectionName" />
      </label>
      <button onClick={getCategoriesAndDocuments}>GetData</button>

    </div>
  );
};

export default Test;
