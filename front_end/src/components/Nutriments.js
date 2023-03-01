import '../style/Nutriments.css';
import caloriesIcon from '../assets/iconsNutriments/calories-icon.png';
import proteinIcon from '../assets/iconsNutriments/protein-icon.png';
import carbsIcon from '../assets/iconsNutriments/carbs-icon.png';
import fatIcon from '../assets/iconsNutriments/fat-icon.png';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserInfos } from '../data/getData';

function Nutriments() {
  const id = useLocation().pathname;
  console.log('id', id);
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function infoLoad(id) {
      const datas = await getUserInfos(id);
      setDatas(datas.data.keyData);
      console.log('datas', datas);
    }
    infoLoad(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const kcal = datas.calorieCount * 0.001;
  return (
    <div className="NutrimentsZone">
      <div className="Nutriments">
        <img src={caloriesIcon} alt="calories icon" />
        <div>
          <span>{kcal} kcal</span>
          <p>calories</p>
        </div>
      </div>
      <div className="Nutriments">
        <img src={proteinIcon} alt="proteines icon" />
        <div>
          <span>{datas.proteinCount}g</span>
          <p>proteines</p>
        </div>
      </div>
      <div className="Nutriments">
        <img src={carbsIcon} alt="glucides icon" />
        <div>
          <span>{datas.carbohydrateCount}g</span>
          <p>glucides</p>
        </div>
      </div>
      <div className="Nutriments">
        <img src={fatIcon} alt="lipides icon" />
        <div>
          <span>{datas.lipidCount}g</span>
          <p>lipides</p>
        </div>
      </div>
    </div>
  );
}

export default Nutriments;
