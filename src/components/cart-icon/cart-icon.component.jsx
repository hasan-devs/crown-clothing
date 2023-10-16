import {ReactComponent as ShppingBagIcon} from "../../assets/shopping-bag.svg";
import './cart-icon.styles.jsx';
import {useContext} from "react";
import {CartContext} from "../../context/cart.context";
import { CartIconContainer,ShoppingIcon,ItemCount } from "./cart-icon.styles.jsx";

const CartIcon = () => {
    const {isDropdownOpen,setIsDropdownOpen,cartItems} = useContext(CartContext);

    const onToggleClickHandler = () => {
        setIsDropdownOpen(!isDropdownOpen);
    }

    return (
        <CartIconContainer onClick={onToggleClickHandler}>
            <ShoppingIcon/>
            <ItemCount>{cartItems.length}</ItemCount>
        </CartIconContainer>
    );
}

export default CartIcon;