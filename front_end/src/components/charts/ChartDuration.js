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

// Chart title
export function TitleChart() {
  return (
    <div className="linechart__title">
      <p>Durée moyenne des sessions</p>
    </div>
  );
}

export default function ChartDuration() {
  const id = useLocation().pathname;
  const [datas, setDatas] = useState([]);
  useEffect(() => {
    async function infoLoad(id) {
      const datas = await getAverage(id);
      setDatas(datas.data.sessions);
      datas.data.sessions.unshift({ day: 7, sessionLength: 10 });
      datas.data.sessions.push({ day: 1, sessionLength: 10 });
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
      width={200}
      height={207}
      data={datas}
      margin={{
        top: 50,
        right: -5,
        left: -20,
        bottom: 0,
      }}
      style={{ backgroundColor: 'red' }}
      id="l1"
    >
      <CartesianGrid
        strokeDasharray="3 3"
        vertical={false}
        horizontal={false}
        id="l2"
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
        activeDot={{ stroke: '#FFFFFF33', strokeWidth: 15, r: 5 }}
        strokeWidth={2}
        id="l3"
      />
    </LineChart>
  );
}

/**
 * changing the cursor
 * @param {*} prop
 * @returns
 */
const CustomCursor = (prop) => {
  const { width, points } = prop;
  const X = points[0].x;
  const distanceToRight = width - X;
  const rectWidth = Math.min(distanceToRight, 500);
  return (
    <Rectangle
      width={rectWidth}
      height={210}
      x={X}
      y={0}
      style={{ background: 'red', opacity: 0.1 }}
    />
  );
};

/**
 * cursor implementation
 */
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

/**
 *
 * @active {*} param0
 * @payload
 */
function CustomTooltip({ active, payload }) {
  if (active && payload && payload.length) {
    return (
      <div className="tooltipDuration">
        <h4>{payload[0].value} min</h4>
      </div>
    );
  }
  return null;
}
