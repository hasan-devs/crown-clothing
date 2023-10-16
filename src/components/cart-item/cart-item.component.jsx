import './cart-item.styles.scss';
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";

const CartItem = ({product}) => {
    const {name,quantity,imageUrl,price} = product;
    const {removeCartItem,increaseQuantity,decreaseQuantity} = useContext(CartContext);
    return(
        <div>
            <div className='cart-item'>
                <img src={`${imageUrl}`} alt={`${name}`}/>
                <div className='footer'>
                    <p>{name}</p>
                    <p>{`${quantity}x$${price}`}</p>
                    <h3>
                        Quantity
                        <span onClick={() => decreaseQuantity(product)} className='decreaseQuantity'>{`<`}</span>
                        <span className='itemQuantity'>{quantity}</span>
                        <span onClick={() => increaseQuantity(product)} className='increaseQuantity'>{`>`}</span>
                    </h3>

                </div>
                <span onClick={()=>removeCartItem(product)}>{`x`}</span>

            </div>
            <hr />
        </div>
    );
}

export default CartItem;