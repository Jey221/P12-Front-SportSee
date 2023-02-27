import '../style/Nutriments.css';
import caloriesIcon from '../assets/iconsNutriments/calories-icon.png';
import proteinIcon from '../assets/iconsNutriments/protein-icon.png';
import carbsIcon from '../assets/iconsNutriments/carbs-icon.png';
import fatIcon from '../assets/iconsNutriments/fat-icon.png';
import { USER_MAIN_DATA } from '../data/formatData';

const kcal = USER_MAIN_DATA[0].keyData.calorieCount * 0.001;

function Nutriments() {
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
          <span>{USER_MAIN_DATA[0].keyData.proteinCount}g</span>
          <p>proteines</p>
        </div>
      </div>
      <div className="Nutriments">
        <img src={carbsIcon} alt="glucides icon" />
        <div>
          <span>{USER_MAIN_DATA[0].keyData.carbohydrateCount}g</span>
          <p>glucides</p>
        </div>
      </div>
      <div className="Nutriments">
        <img src={fatIcon} alt="lipides icon" />
        <div>
          <span>{USER_MAIN_DATA[0].keyData.lipidCount}g</span>
          <p>lipides</p>
        </div>
      </div>
    </div>
  );
}

export default Nutriments;
