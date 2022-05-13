import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./navigation.styles.scss";
import RustApparelsLogo from "../../../assets/logo.png";

const Navigation = () => {
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
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </div>
  )
}
export default Navigation;