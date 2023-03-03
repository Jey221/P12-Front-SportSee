// mise en forme css
import '../style/Nutriments.css';
// icons
import caloriesIcon from '../assets/iconsNutriments/calories-icon.png';
import proteinIcon from '../assets/iconsNutriments/protein-icon.png';
import carbsIcon from '../assets/iconsNutriments/carbs-icon.png';
import fatIcon from '../assets/iconsNutriments/fat-icon.png';
// hooks
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserInfos } from '../data/getData';

// fct mise en place des nutriments en fonction id
function Nutriments() {
  const id = useLocation().pathname;
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function infoLoad(id) {
      const datas = await getUserInfos(id);
      setDatas(datas.data.keyData);
    }
    infoLoad(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // conversion calories en kilocalories
  const kcal = datas.calorieCount * 0.001;
  return (
    <div className="NutrimentsZone">
      <div className="Nutriments">
        <img src={caloriesIcon} alt="calories icon" />
        <div>
          <span>{kcal} kcal</span>
          <p>Calories</p>
        </div>
      </div>
      <div className="Nutriments">
        <img src={proteinIcon} alt="proteines icon" />
        <div>
          <span>{datas.proteinCount}g</span>
          <p>Proteines</p>
        </div>
      </div>
      <div className="Nutriments">
        <img src={carbsIcon} alt="glucides icon" />
        <div>
          <span>{datas.carbohydrateCount}g</span>
          <p>Glucides</p>
        </div>
      </div>
      <div className="Nutriments">
        <img src={fatIcon} alt="lipides icon" />
        <div>
          <span>{datas.lipidCount}g</span>
          <p>Lipides</p>
        </div>
      </div>
    </div>
  );
}

export default Nutriments;
