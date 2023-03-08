// formatting css
import '../../style/charts/chartRadar.css';
// recharts elements
import { Radar, RadarChart, PolarGrid, PolarAngleAxis } from 'recharts';
//hook
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
//data
import { getPerformance } from '../../data/getData';

/**
 * It's a React component that renders a RadarChart using data from an API call.
 * @returns An array of objects.
 */
export default function App() {
  const id = useLocation().pathname;
  const [datas, setDatas] = useState([]);
  // load data
  useEffect(() => {
    async function infoLoad(id) {
      const datas = await getPerformance(id);
      setDatas(datas.data);
    }
    infoLoad(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**
   * Function customTick(kind, words) {
   *     return datas.kind[kind];
   *   }
   * @param kind - the kind of tick you want to create.
   * @param words - an array of words to be displayed
   * @returns The value of the key in the object.
   */
  function customTick(kind, words) {
    return datas.kind[kind];
  }
  return (
    <RadarChart
      cx={95}
      cy={110}
      outerRadius={55}
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
