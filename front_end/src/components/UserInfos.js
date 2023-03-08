// formatting css
import '../style/UserInfo.css';
// hooks
import { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
//data
import { getUserInfos } from '../data/getData';

/**
 * The useEffect hook is called when the component is mounted and when the component is updated. The
 * second argument is an array of dependencies. If the array is empty, the effect is only called when
 * the component is mounted. If the array contains a value, the effect is called when the component is
 * mounted and when the value in the array changes.
 * @returns The data is being returned as an object.
 */
function UserInfo() {
  const id = useLocation().pathname;
  const [datas, setDatas] = useState([]);
  // load data
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
