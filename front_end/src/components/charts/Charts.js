// charts
import ChartActivity from './ChartActivity';
import ChartDuration, { TitleChart } from './ChartDuration';
import ChartRadar from './ChartRadar';
import ChartScore, { Legend } from './ChartScore';
/**
 * Charts() returns a div with className "Charts" that contains a div with className "activity" that
 * contains a h4 and a ChartActivity component, a div with className "lilChart" that contains a div
 * with className "duration" that contains a TitleChart component and a ChartDuration component, a div
 * with className "radar" that contains a ChartRadar component, and a div with className "score" that
 * contains a ChartScore component and a Legend component.
 * @returns A div with className "Charts" and three divs inside it.
 */
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
