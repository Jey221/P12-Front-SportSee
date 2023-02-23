import '../../style/charts/chartScore.css';
import { PieChart, Pie, Cell } from 'recharts';
import Datas from '../../data/data3.json';
const COLORS = ['#0088FE', '#ffffff'];

export function Legend() {
  return (
    <div className="legend">
      <span className="legendScore">{Datas[0].value}%</span> de votre objectif
    </div>
  );
}

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
        <p>lol</p>
        {Datas.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
    </PieChart>
  );
}

/* 
V2 avec CustomActiveShapePieChart
import '../../style/charts/chartScore.css';
import React, { useState } from 'react';
import { PieChart, Pie, Sector } from 'recharts';
import Datas from '../../data/data3.json';

export default function ChartScore() {
  const [activeIndex] = useState(0);

  return (
    <PieChart width={400} height={400}>
      <Pie
        activeIndex={activeIndex}
        activeShape={renderActiveShape}
        data={Datas}
        cx={200}
        cy={200}
        innerRadius={60}
        outerRadius={80}
        fill="#8884d8"
        dataKey="value"
      />
    </PieChart>
  );
}

const renderActiveShape = (props) => {
  const { cx, cy, innerRadius, outerRadius, startAngle, endAngle, fill } =
    props;
  return (
    <g>
      <text x={cx} y={cy} dy={8} textAnchor="middle" fill={fill}>
        lol
      </text>
      <Sector
        cx={cx}
        cy={cy}
        innerRadius={innerRadius}
        outerRadius={outerRadius}
        startAngle={startAngle}
        endAngle={endAngle}
        fill={fill}
      />
    </g>
  );
};
 */
