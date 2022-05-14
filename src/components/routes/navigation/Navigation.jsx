import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { useContext } from "react";
import "./navigation.styles.scss";
import RustApparelsLogo from "../../../assets/logo.png";
import { signOutUser } from "../../../utils/firebase/firebase.utils";

const Navigation = () => {

  const { currentUser, setCurrentUser } = useContext(UserContext);

  const signOutHandler = async () => {
    await signOutUser();
    setCurrentUser(null);
  }

  return (
    <div className="container">
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <img src={RustApparelsLogo} className="logo" alt="" />
        </Link>
        <div className='nav-links-container'>
          <Link className='nav-link' to='/shop'>
            SHOP
          </Link>
          <Link className="nav-link" to="/sign-in">
            {
              currentUser ? (
                <span onClick={signOutHandler}>SIGN OUT</span>
              ) : (
                <span>SIGN IN</span>
              )
            }
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
export default Navigation;