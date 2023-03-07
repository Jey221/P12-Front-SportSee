// formatting css
import '../../style/charts/chartActivity.css';
// recharts elements
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from 'recharts';
//hook
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getActivity } from '../../data/getData';
/**
 * Change the color of the legend
 * @value {string} legend value
 */
function renderColor(value) {
  return <span style={{ color: '#74798c' }}>{value}</span>;
}
export default function ChartActivity() {
  const id = useLocation().pathname;
  const [datas, setDatas] = useState([]);
  // load data
  useEffect(() => {
    async function infoLoad(id) {
      const datas = await getActivity(id);
      setDatas(datas.data.sessions);
    }
    infoLoad(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function customTick(day) {
    return Number(day.slice(8));
  }
  return (
    <BarChart
      width={600}
      height={180}
      data={datas}
      margin={{
        top: 0,
        right: 10,
        left: 10,
        bottom: 15,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
        tickFormatter={customTick}
        tickMargin={9}
      />
      <YAxis
        yAxisId={1}
        dataKey="kilogram"
        orientation="right"
        axisLine={false}
        tickLine={false}
        tickCount={4}
        type="number"
        domain={['dataMin - 1', 'dataMax + 1']}
      />
      <YAxis yAxisId={2} hide dataKey="calories" />
      <Tooltip
        content={<CustomTooltip />}
        wrapperStyle={{ outlineStyle: 'none' }}
      />
      <Legend
        verticalAlign="top"
        align="right"
        iconType="circle"
        iconSize={6}
        formatter={renderColor}
      />
      <Bar
        yAxisId={1}
        dataKey="kilogram"
        barSize={9}
        fill="#282D30"
        radius={[10, 10, 0, 0]}
        name="Poids (kg)"
      />
      <Bar
        yAxisId={2}
        dataKey="calories"
        barSize={9}
        fill="red"
        radius={[10, 10, 0, 0]}
        name="Calories brûlées (kCal)"
      />
    </BarChart>
  );
}

/**
 * Custom legend box
 * @active {}
 * @payload {}
 */
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <h4>{payload[0].value} kg</h4>
        <h4>{payload[1].value} kcal</h4>
      </div>
    );
  }
  return null;
}
