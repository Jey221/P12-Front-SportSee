import '../style/UserInfo.css';
import { USER_MAIN_DATA } from '../data/formatData';
import { useLocation } from 'react-router-dom';

function UserInfo() {
  const location = useLocation();
  console.log(location.pathname);
  return (
    <div className="UserInfo">
      <h2>
        Bonjour{' '}
        <span>
          {
            USER_MAIN_DATA[location.pathname === '/12' ? 0 : 1].userInfos
              .firstName
          }
        </span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default UserInfo;
