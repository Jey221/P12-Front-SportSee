// formatting css
import '../style/LayoutVertical.css';
//icons
import icon1 from '../assets/iconsLayout/icon1.png';
import icon2 from '../assets/iconsLayout/icon2.png';
import icon3 from '../assets/iconsLayout/icon3.png';
import icon4 from '../assets/iconsLayout/icon4.png';

/**
 * LayoutVertical is a function that returns a div with a section and a p tag.
 * @returns A React component.
 */
function LayoutVertical() {
  return (
    <div className="LayoutVertical">
      <section className="iconZone">
        <img src={icon1} alt="Yoga" />
        <img src={icon2} alt="Natation" />
        <img src={icon3} alt="Vélo" />
        <img src={icon4} alt="Musculation" />
      </section>
      <p>Copyright, SportSee 2020</p>
    </div>
  );
}

export default LayoutVertical;
