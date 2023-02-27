import '../style/UserInfo.css';
import { USER_MAIN_DATA } from '../data/formatData';

function UserInfo() {
  return (
    <div className="UserInfo">
      <h2>
        Bonjour <span>{USER_MAIN_DATA[0].userInfos.firstName}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default UserInfo;
