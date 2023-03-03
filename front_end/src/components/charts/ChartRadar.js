import '../../style/charts/chartRadar.css';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getPerformance } from '../../data/getData';

export default function App() {
  const id = useLocation().pathname;
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function infoLoad(id) {
      const datas = await getPerformance(id);
      setDatas(datas.data);
    }
    infoLoad(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function customTick(kind) {
    return datas.kind[kind];
  }
  return (
    <RadarChart
      cx={95}
      cy={110}
      outerRadius={60}
      width={200}
      height={207}
      data={datas.data}
      style={{ background: '#282D30' }}
    >
      <PolarGrid radialLines={false} />
      <PolarAngleAxis dataKey="kind" tickFormatter={customTick} />
      <Radar dataKey="value" fill="#FF0101B2" fillOpacity={0.6} />
    </RadarChart>
  );
}
