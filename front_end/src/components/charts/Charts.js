import ChartActivity from './ChartActivity';
import ChartDuration, { TitleChart } from './ChartDuration';
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
          <TitleChart />
          <ChartDuration />
        </div>
        <div className="radar">
          <ChartRadar />
        </div>
        <div className="score">
          <ChartScore />
          <Legend />
        </div>
      </div>
    </div>
  );
}

export default Charts;
