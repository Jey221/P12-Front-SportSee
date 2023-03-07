// formatting css
import '../../style/Header.css';
// import image
import logo from '../../assets/logo.png';
// import navigation
import NavHeader from './NavHeader';

/**
 * Header() is a function that returns a div with a logo and a NavHeader component.
 * @returns The Header component is being returned.
 */
function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="logo SportSee" />
      <NavHeader />
    </div>
  );
}

export default Header;
