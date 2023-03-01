import '../../style/charts/chartScore.css';
import { PieChart, Pie } from 'recharts';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getUserInfos } from '../../data/getData';

export function Legend() {
  const id = useLocation().pathname;
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function infoLoad(id) {
      const datas = await getUserInfos(id);
      setDatas(datas.data);
    }
    infoLoad(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const score = datas.todayScore || datas.score;
  return (
    <div className="legend">
      <span className="legendScore">{score * 100}%</span>
      de votre objectif
    </div>
  );
}

export default function ChartScore() {
  const id = useLocation().pathname;
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function infoLoad(id) {
      const datas = await getUserInfos(id);
      setDatas(datas.data);
    }
    infoLoad(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  const score = datas.todayScore || datas.score;
  const graphRadar = [{ value: score * 100 }, { value: 100 - score * 100 }];
  return (
    <PieChart width={183} height={190}>
      <Pie
        data={graphRadar}
        cx={90}
        cy={100}
        startAngle={100}
        endAngle={2000}
        innerRadius={60}
        outerRadius={80}
        paddingAngle={5}
        cornerRadius={10}
        dataKey="value"
      >
        <p></p>
        {graphRadar.map((index) => console.log(index))}
      </Pie>
    </PieChart>
  );
}
