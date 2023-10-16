import {createContext,useState} from 'react';

const addToCart = (cartItems,product) => {
    const existingProduct = cartItems.filter((p)=>p.id === product.id );
    if(existingProduct.length===0){
        return [...cartItems,{...product,quantity:1}];
    }else{
        return cartItems.map(prod => {
            if(prod.id === product.id){
                prod.quantity++;
                return prod;
            }else{
                return prod;
            }
        })
    }
}

export const CartContext = createContext({
    isDropDownOpen : false,
    setIsDropDownOpen : () => {},
    cartItems : null,
    addItemToCart : () => null,
    removeCartItem : () => null
});

export const CartProvider = ({children}) =>{
    const [isDropdownOpen,setIsDropdownOpen] = useState(false);
    const [cartItems,setCartItems] = useState([]);

    const addItemToCart = (product) => {
        const newCart = addToCart(cartItems,product);
        setCartItems(newCart);
    }

    const removeCartItem = (product)=>{
        setCartItems(cartItems.filter(p => p.id !== product.id));
    }

    const decreaseQuantity = (product) => {
        setCartItems(cartItems.map(p => {
            if(p.id === product.id){
                p.quantity--;
                return p;
            }else{
                return p;
            }
        }));
    }


    const increaseQuantity = (product) => {
        setCartItems(cartItems.map(p => {
            if(p.id === product.id){
                p.quantity++;
                return p;
            }else{
                return p;
            }
        }));
    }


    const value = {isDropdownOpen,setIsDropdownOpen,cartItems,addItemToCart,removeCartItem,decreaseQuantity,increaseQuantity};
    return(
        <CartContext.Provider value={value}>{children}</CartContext.Provider>
        );
}
