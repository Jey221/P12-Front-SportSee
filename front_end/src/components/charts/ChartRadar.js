import '../../style/charts/chartRadar.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import Datas from '../../data/data2.json';

export default function App() {
  return (
    <RadarChart
      cx={300}
      cy={250}
      outerRadius={150}
      width={500}
      height={500}
      data={Datas}
      style={{ background: '#282D30' }}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="subject" />
      <Radar name="Mike" dataKey="A" fill="#FF0101B2" fillOpacity={0.6} />
    </RadarChart>
  );
}
