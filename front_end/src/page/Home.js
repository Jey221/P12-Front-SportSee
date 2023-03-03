import '../style/Home.css';
import { Link } from 'react-router-dom';
import logo from '../assets/person-running-solid.svg';

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
