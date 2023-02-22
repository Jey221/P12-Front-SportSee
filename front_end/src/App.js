import './style/App.css';
import './style/charts/chartActivity.css';
import ChartActivity from './components/charts/ChartActivity';
import ChartDuration from './components/charts/ChartDuration';
import ChartRadar from './components/charts/ChartRadar';
import ChartScore from './components/charts/ChartScore';

function App() {
  return (
    <div className="App">
      <h1>Projet 12</h1>
      <div className="activity">
        <h4>graph activité</h4>
        <ChartActivity />
      </div>
      <h2>graph durée</h2>
      <div>
        <ChartDuration />
      </div>
      <h2>graph radar</h2>
      <div>
        <ChartRadar />
      </div>
      <h2>score</h2>
      <div>
        <ChartScore />
      </div>
    </div>
  );
}

export default App;
