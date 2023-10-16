import {CartDropdownContainer,EmptyMessage,CartItems} from './cart-dropdown.styles.jsx';
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
const CartDropdown = () => {
    const {cartItems} = useContext(CartContext);
    return(
        <CartDropdownContainer>
            <CartItems>
                {cartItems.length ? cartItems.map(prod=>{
                    return <CartItem key={prod.id} product={prod}/>
                }) : (
                    <EmptyMessage>No items in cart</EmptyMessage>
                )}
            </CartItems>
            <h2>Total : ${cartItems.reduce((total,product)=>total+(product.price*product.quantity),0)}</h2>
            <Button>CHECKOUT</Button>
        </CartDropdownContainer>
    )
}
export default CartDropdown;
