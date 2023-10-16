import { useContext } from "react";
import { UserContext } from "../../context/user.context";
import { CartContext } from "../../context/cart.context";

import { signOutUser } from "../../utils/firebase/firebase";

import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import { Outlet, Link } from "react-router-dom";
import { ReactComponent as Logo } from "../../assets/crown.svg";
import { Fragment } from "react";

import {NavigationContainer,LogoContainer,NavLinks,NavLink} from "./navigation.styles";

const Navigation = () => {
  const { isDropdownOpen, setIsDropdownOpen } = useContext(CartContext);
  const { currentUser } = useContext(UserContext);

  return (
    <Fragment>
      <NavigationContainer>
        <LogoContainer to="/">
          <Logo />
        </LogoContainer>
        <NavLinks>
          <NavLink to="/">
            Home
          </NavLink>
          <NavLink to="/shop">
            Shop
          </NavLink>
          {currentUser ? (
            <NavLink as='span' onClick={signOutUser}>
              SignOut
            </NavLink>
          ) : (
            <NavLink to="/auth">
              SignIn
            </NavLink>
          )}
          <NavLink to="/test">
            Test
          </NavLink>
          <CartIcon />
        </NavLinks>
        {isDropdownOpen && <CartDropdown />}
      </NavigationContainer>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
