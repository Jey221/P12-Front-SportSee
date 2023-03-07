import { Link } from 'react-router-dom';

/**
 * It returns a div with four links.
 * @returns A React component.
 */
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
