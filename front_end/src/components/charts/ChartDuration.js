// formatting css
import '../../style/charts/chartDuration.css';
// recharts elements
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
//hook
import { useLocation } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getAverage } from '../../data/getData';

/**
 * It returns a div with a className of linechart__title and a paragraph with the text "Durée moyenne
 * des sessions".
 * @returns A function that returns a div with a paragraph inside.
 */
export function TitleChart() {
  return (
    <div className="linechart__title">
      <p>Durée moyenne des sessions</p>
    </div>
  );
}

/**
 * It's a React component that renders a line chart
 * @returns A React component.
 */
export default function ChartDuration() {
  const id = useLocation().pathname;
  const [datas, setDatas] = useState([]);
  // load data
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
  /**
   * custom data in XAxis
   * @param {number} day
   * @returns days
   */
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
      id="lineChart"
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
        activeDot={{ stroke: '#FFFFFF33', strokeWidth: 15, r: 5 }}
        strokeWidth={2}
      />
    </LineChart>
  );
}

/**
 * It takes the width of the chart and the points of the cursor and returns a rectangle that is 500px
 * wide or the width of the chart, whichever is smaller
 * @param prop - The prop object contains the following properties:
 * @returns A custom cursor that is a rectangle.
 */
/**
 * It takes the width of the chart and the points of the cursor and returns a rectangle that is 500px
 * wide or the width of the chart, whichever is smaller
 * @param prop - The prop object contains the following properties:
 * @returns A custom cursor that is a rectangle.
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

/* A prop type checker. It is a way to check if the prop is of the correct type. */
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
 * If the active prop is true and the payload prop is not null and the length of the payload prop is
 * greater than 0, then return a div with a className of tooltipDuration and a h4 tag with the value of
 * the first item in the payload array.
 * @returns The return is a React component.
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
