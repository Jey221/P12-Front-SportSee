import Charts from '../components/charts/Charts';
import Nutriments from '../components/Nutriments';
import UserInfo from '../components/UserInfos';

/**
 * This function returns a div with two sections, the first one containing a UserInfo component and the
 * second one containing a Charts component and a Nutriments component.
 * @returns A function that returns a JSX element.
 */
function Profil() {
  return (
    <div className="main">
      <section className="sectionUp">
        <UserInfo />
      </section>
      <section className="sectionDown">
        <Charts />
        <Nutriments />
      </section>
    </div>
  );
}

export default Profil;
