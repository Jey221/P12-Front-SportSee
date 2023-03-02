import '../../style/charts/chartDuration.css';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Rectangle,
} from 'recharts';
import PropTypes from 'prop-types';
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAverage } from '../../data/getData';

export default function ChartDuration() {
  const id = useLocation().pathname;
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function infoLoad(id) {
      const datas = await getAverage(id);
      setDatas(datas.data.sessions);
    }
    infoLoad(id);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  function customTick(day) {
    const days = ['L', 'M', 'M', 'J', 'V', 'S', 'D'];
    // eslint-disable-next-line default-case
    switch (day) {
      case 1:
        return days[0];
      case 2:
        return days[1];
      case 3:
        return days[2];
      case 4:
        return days[3];
      case 5:
        return days[4];
      case 6:
        return days[5];
      case 7:
        return days[6];
    }
  }
  return (
    <LineChart
      width={183}
      height={190}
      data={datas}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
      style={{ backgroundColor: 'red' }}
    >
      <CartesianGrid
        strokeDasharray="3 3"
        vertical={false}
        horizontal={false}
      />
      <XAxis
        dataKey="day"
        axisLine={false}
        tickLine={false}
        fill="white"
        id="duration"
        tickFormatter={customTick}
      />
      <YAxis hide={true} axisLine={false} tickLine={false} />
      <Tooltip
        content={<CustomTooltip />}
        cursor={<CustomCursor />}
        wrapperStyle={{ outlineStyle: 'none' }}
      />
      <Line
        type="monotone"
        dataKey="sessionLength"
        stroke="white"
        dot={{ r: 0 }}
        strokeWidth={2}
      />
    </LineChart>
  );
}

const CustomCursor = (prop) => {
  const { width, points } = prop;
  const X = points[0].x;
  const Y = points[0].y;
  const distanceToRight = width - X;
  const rectWidth = Math.min(distanceToRight, 500);
  return (
    <Rectangle
      width={rectWidth}
      height={263}
      x={X}
      y={Y}
      style={{ background: 'red', opacity: 0.1 }}
    />
  );
};

CustomCursor.propTypes = {
  prop: PropTypes.shape({
    width: PropTypes.number.isRequired,
    points: PropTypes.arrayOf(
      PropTypes.shape({
        x: PropTypes.number.isRequired,
        y: PropTypes.number.isRequired,
      }).isRequired
    ).isRequired,
  }),
};

function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltipDuration">
        <h4>{payload[0].value}</h4>
      </div>
    );
  }
  return null;
}
