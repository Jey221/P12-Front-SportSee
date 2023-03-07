// formatting css
import '../../style/charts/chartScore.css';
//recharts elements
import { PieChart, Pie, Cell } from 'recharts';
//hook
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserInfos } from '../../data/getData';

/**
 * UseEffect(() =&gt; {
 *     async function infoLoad(id) {
 *       const datas = await getUserInfos(id);
 *       setDatas(datas.data);
 *     }
 *     infoLoad(id);
 *     // eslint-disable-next-line react-hooks/exhaustive-deps
 *   }, []);
 */
export function Legend() {
  const id = useLocation().pathname;
  const [datas, setDatas] = useState([]);
  //load data
  useEffect(() => {
    async function infoLoad(id) {
      const datas = await getUserInfos(id);
      setDatas(datas.data);
    }
    infoLoad(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  /**
   * standardization of scores
   * @score {number}
   */
  const score = datas.todayScore || datas.score;
  return (
    <div className="legend">
      <div>
        <span className="legendScore">{score * 100}% </span>
        <br />
        de votre objectif
      </div>
    </div>
  );
}

/**
 * It's a React component that renders a pie chart
 * @returns A React component.
 */
export default function ChartScore() {
  const id = useLocation().pathname;
  const [datas, setDatas] = useState([]);
  // load data
  useEffect(() => {
    async function infoLoad(id) {
      const datas = await getUserInfos(id);
      setDatas(datas.data);
    }
    infoLoad(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // formatting scores
  const score = datas.todayScore || datas.score;
  const graphRadar = [{ value: score * 100 }, { value: 100 - score * 100 }];
  const COLORS = ['#ef0e0e', '#FBFBFB'];
  return (
    <PieChart width={200} height={207}>
      <Pie
        data={graphRadar}
        cx={90}
        cy={100}
        startAngle={100}
        endAngle={2000}
        innerRadius={65}
        outerRadius={80}
        paddingAngle={5}
        cornerRadius={10}
        stroke={'#FBFBFB'}
        dataKey="value"
        fill="#ef0e0e"
      >
        {graphRadar.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}
