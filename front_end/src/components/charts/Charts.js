import ChartActivity from './ChartActivity';
import ChartDuration from './ChartDuration';
import ChartRadar from './ChartRadar';
import ChartScore, { Legend } from './ChartScore';

function Charts() {
  return (
    <div className="Charts">
      <div className="activity">
        <h4>Activité quotidienne</h4>
        <ChartActivity />
      </div>
      <div className="lilChart">
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
    </div>
  );
}

export default Charts;
