import './style/App.css';
import ChartActivity from './components/ChartActivity';
import ChartDuration from './components/ChartDuration';
import ChartRadar from './components/ChartRadar';
import ChartScore from './components/ChartScore';

function App() {
  return (
    <div className="App">
    <h1>Projet 12</h1>
    <ChartActivity />
    <ChartDuration />
    <ChartRadar/>
    <ChartScore/>
    </div>
  );
}

export default App;
