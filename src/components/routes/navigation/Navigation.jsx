import { Outlet } from "react-router-dom";
import { Link } from "react-router-dom";
import "./navigation.styles.scss";
import { ReactComponent as CrownClothingLogo } from "../../../assets/crown.svg";

const Navigation = () => {
  return (
    <>
      <div className='navigation'>
        <Link className='logo-container' to='/'>
          <CrownClothingLogo className='logo' />
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
    </>
  )
}
export default Navigation;