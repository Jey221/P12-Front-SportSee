import '../style/UserInfo.css';
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { getUserInfos } from '../data/getData';

function UserInfo() {
  const id = useLocation().pathname;
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function infoLoad(id) {
      const datas = await getUserInfos(id);
      setDatas(datas.data.userInfos.firstName);
    }
    infoLoad(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div className="UserInfo">
      <h2>
        Bonjour <span>{datas}</span>
      </h2>
      <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
    </div>
  );
}

export default UserInfo;
