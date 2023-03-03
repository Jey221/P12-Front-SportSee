import Charts from '../components/charts/Charts';
import Nutriments from '../components/Nutriments';
import UserInfo from '../components/UserInfos';

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
