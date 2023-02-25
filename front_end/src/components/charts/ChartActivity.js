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

import Datas from '../../data/data.json';

export default function ChartActivity() {
  return (
    <BarChart
      width={550}
      height={223}
      data={Datas}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" vertical={false} />
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis orientation="right" axisLine={false} tickLine={false} />
      <Tooltip
        content={<CustomTooltip />}
        wrapperStyle={{ outlineStyle: 'none' }}
      />
      <Legend verticalAlign="top" align="right" />
      <Bar dataKey="pv" barSize={10} fill="red" radius={[10, 10, 0, 0]} />
      <Bar dataKey="uv" barSize={10} fill="black" radius={[10, 10, 0, 0]} />
    </BarChart>
  );
}

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltip">
        <h4>
          {payload[0].dataKey}
          {payload[0].value}
        </h4>
        <h4>
          {payload[1].dataKey}
          {payload[1].value}
        </h4>
      </div>
    );
  }
  return null;
}
