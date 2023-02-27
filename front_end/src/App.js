import './style/App.css';
import Header from './components/Header/Header';
import LayoutVertical from './components/LayoutVertical';
import UserInfo from './components/UserInfos';
import Charts from './components/charts/Charts';
import Nutriments from './components/Nutriments';
/* import {
  USER_ACTIVITY,
  USER_MAIN_DATA,
  USER_PERFORMANCE,
  USER_AVERAGE_SESSIONS,
} from './data/formatData';
 */ // import MockData from './data/formatData';

// console.log(MockData);
/* console.log('USER_ACTIVITY', USER_ACTIVITY);
console.log('USER_MAIN_DATA', USER_MAIN_DATA);
console.log('USER_PERFORMANCE', USER_PERFORMANCE);
console.log('USER_AVERAGE_SESSIONS', USER_AVERAGE_SESSIONS);
 */
function App() {
  return (
    <div className="App">
      <Header />
      <LayoutVertical />
      <div className="main">
        <section className="sectionUp">
          <UserInfo />
        </section>
        <section className="sectionDown">
          <Charts />
          <Nutriments />
        </section>
      </div>
    </div>
  );
}

export default App;
