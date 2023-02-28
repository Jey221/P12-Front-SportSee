import '../../style/charts/chartRadar.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
// import Datas from '../../data/data2.json';
import { USER_PERFORMANCE } from '../../data/formatData';

export default function App() {
  return (
    <RadarChart
      cx={90}
      cy={100}
      outerRadius={60}
      width={183}
      height={190}
      data={USER_PERFORMANCE[0].data}
      style={{ background: '#282D30' }}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey={'kind'} />
      <Radar name="Mike" dataKey="value" fill="#FF0101B2" fillOpacity={0.6} />
    </RadarChart>
  );
}
