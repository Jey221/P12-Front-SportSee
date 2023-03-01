import '../../style/charts/chartActivity.css';
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getActivity } from '../../data/getData';

export default function ChartActivity() {
  const id = useLocation().pathname;
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function infoLoad(id) {
      const datas = await getActivity(id);
      setDatas(datas.data.sessions);
    }
    infoLoad(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  // console.log('index', datas.indexOf({ datas }));

  return (
    <BarChart
      width={550}
      height={223}
      data={datas}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="day" axisLine={false} tickLine={false} />
      <YAxis
        dataKey="kilogram"
        orientation="right"
        axisLine={false}
        tickLine={false}
      />
      <Tooltip
        content={<CustomTooltip />}
        wrapperStyle={{ outlineStyle: 'none' }}
      />
      <Legend verticalAlign="top" align="right" />
      <Bar dataKey="kilogram" barSize={10} fill="red" radius={[10, 10, 0, 0]} />
      <Bar
        dataKey="calories"
        barSize={10}
        fill="black"
        radius={[10, 10, 0, 0]}
      />
    </BarChart>
  );
}

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <h4>{payload[0].value} kg</h4>
        <h4>{payload[1].value} cal</h4>
      </div>
    );
  }
  return null;
}
