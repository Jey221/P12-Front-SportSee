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
 * It takes a value and returns a span with the value and a color of #74798c.
 * @param value - The value of the cell.
 * @returns A React element.
 */
function renderColor(value) {
  return <span style={{ color: '#74798c' }}>{value}</span>;
}
/**
 * It renders a bar chart with two bars, one for weight and one for calories
 * @returns An array of objects.
 */
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
  /**
   * It takes a string in the format "YYYY-MM-DD" and returns the day of the month as a number
   * @param day - The day of the month.
   * @returns The last two digits of the day.
   */
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
 * If the active prop is true and the payload prop is not null, then return a div with two h4 elements.
 * @returns The return value is a React component.
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
