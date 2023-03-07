// formatting css
import '../../style/Header.css';
// import image
import logo from '../../assets/logo.png';
// import navigation
import NavHeader from './NavHeader';

function Header() {
  return (
    <div className="Header">
      <img src={logo} alt="logo SportSee" />
      <NavHeader />
    </div>
  );
}

export default Header;
