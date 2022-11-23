import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import "./navigation.styles.scss";
import RustApparelsLogo from "../../../assets/logo.png";
import { signOutUser } from "../../../utils/firebase/firebase.utils";
import CartIcon from "../../cart-icon/CartIcon";
import CartDropdown from "../../cart-dropdown/CartDropdown";
import { CartDropdownContext } from "../../contexts/CartDropdownContext";
import { selectCurrentUser  } from "../../../store/user/user.selector";
import { useSelector } from "react-redux";

const Navigation = () => {
  const currentUser = useSelector(selectCurrentUser);
  const { cartDropdownState } = useContext(CartDropdownContext);
 
  return (
    <div className="container">
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={RustApparelsLogo} className="logo" alt="" />
        </Link>
        <div className="nav-links-container">
          <Link className="nav-link" to="/shop">
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            {currentUser ? (
              <span onClick={signOutUser}>SIGN OUT</span>
            ) : (
              <span>SIGN IN</span>
            )}
          </Link>
          <CartIcon/> 
          { cartDropdownState && <CartDropdown/> }
        </div>
      </div>
      <Outlet />
    </div>
  );
};
export default Navigation;
