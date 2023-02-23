import './style/App.css';
import './style/charts/chartActivity.css';
import ChartActivity from './components/charts/ChartActivity';
import ChartDuration from './components/charts/ChartDuration';
import ChartRadar from './components/charts/ChartRadar';
import ChartScore, { Legend } from './components/charts/ChartScore';

function App() {
  return (
    <div className="App">
      <h1>Projet 12</h1>
      <div className="activity">
        <h4>Activité quotidienne</h4>
        <ChartActivity />
      </div>
      <div className="duration">
        <h2>graph durée</h2>
        <ChartDuration />
      </div>
      <div className="radar">
        <h2>graph radar</h2>
        <ChartRadar />
      </div>
      <div className="score">
        <h2>score</h2>
        <ChartScore />
        <Legend />
      </div>
    </div>
  );
}

export default App;
