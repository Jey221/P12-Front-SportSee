import { PieChart, Pie, Cell } from "recharts";
import Datas from '../../data/data3.json'
const COLORS = ["#0088FE", "#00C49F", "#FFBB28", "#FF8042"];

export default function ChartScore() {
  return (
    <PieChart width={800} height={400}>
      <Pie
        data={Datas}
        cx={120}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        paddingAngle={5}
        dataKey="value"
      >
        {Datas.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}