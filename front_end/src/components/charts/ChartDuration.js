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
import Datas from '../../data/data.json';

export default function ChartDuration() {
  return (
    <LineChart
      width={500}
      height={300}
      data={Datas}
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
      <XAxis dataKey="name" axisLine={false} tickLine={false} />
      <YAxis hide={true} axisLine={false} tickLine={false} />
      <Tooltip
        content={<CustomTooltip />}
        cursor={<CustomCursor />}
        wrapperStyle={{ outlineStyle: 'none' }}
      />
      <Line
        type="monotone"
        dataKey="pv"
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
