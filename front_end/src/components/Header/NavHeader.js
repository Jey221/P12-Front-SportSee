import { Link } from 'react-router-dom';

function NavHeader() {
  return (
    <div className="NavHeader">
      <Link to={'/'}>Accueil</Link>
      <Link>Profil</Link>
      <Link>Réglages</Link>
      <Link>Communauté</Link>
    </div>
  );
}

export default NavHeader;
