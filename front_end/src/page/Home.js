import '../style/Home.css';
import { Link } from 'react-router-dom';
import logo from '../assets/person-running-solid.svg';

/**
 * Home is a function that returns a div with two links, each link has a div with an image and a h2
 * tag.
 * @returns A React component.
 */
function Home() {
  return (
    <div className="mainHome">
      <Link to={'/12'}>
        <div className="profil">
          <img src={logo} alt="logo" className="logoProfil" />
          <h2>Karl</h2>
        </div>
      </Link>
      <Link to={'/18'}>
        <div className="profil">
          <img src={logo} alt="logo" className="logoProfil" />
          <h2>Cecilia</h2>
        </div>
      </Link>
    </div>
  );
}

export default Home;
