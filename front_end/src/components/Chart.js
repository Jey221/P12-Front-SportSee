import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts'
export default function Chart({data}) {
  return(
    <ResponsiveContainer
    width="100%"
    height={400}
    >
      <BarChart
      data={data}
      margin={{
        top:10,
        left: 20,
        right: 20,
        bottom:10
      }}
      >
        <CartesianGrid strokeDasharray="3 3"></CartesianGrid>
        <XAxis dataKey="name"/>
        <YAxis/>
        <Tooltip/>
        <Legend/>
        <Bar dataKey="name" fill='#8884d8'></Bar>
        <Bar dataKey="priceUsd" fill='#82ca9d'></Bar>
      </BarChart>
    </ResponsiveContainer>
  )
}