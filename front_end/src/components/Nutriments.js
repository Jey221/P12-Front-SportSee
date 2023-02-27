import '../style/Nutriments.css';
import caloriesIcon from '../assets/iconsNutriments/calories-icon.png';
import proteinIcon from '../assets/iconsNutriments/protein-icon.png';
import carbsIcon from '../assets/iconsNutriments/carbs-icon.png';
import fatIcon from '../assets/iconsNutriments/fat-icon.png';

const data = '1,22';

function Nutriments() {
  return (
    <div className="NutrimentsZone">
      <div className="Nutriments">
        <img src={caloriesIcon} alt="calories icon" />
        <div>
          <span>{data}</span>
          <p>calories</p>
        </div>
      </div>
      <div className="Nutriments">
        <img src={proteinIcon} alt="proteines icon" />
        <div>
          <span>{data}</span>
          <p>proteines</p>
        </div>
      </div>
      <div className="Nutriments">
        <img src={carbsIcon} alt="glucides icon" />
        <div>
          <span>{data}</span>
          <p>glucides</p>
        </div>
      </div>
      <div className="Nutriments">
        <img src={fatIcon} alt="lipides icon" />
        <div>
          <span>{data}</span>
          <p>lipides</p>
        </div>
      </div>
    </div>
  );
}

export default Nutriments;
