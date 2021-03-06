import React, { PureComponent } from 'react';
import {
  PieChart, Pie, Cell,
} from 'recharts';



const COLORS = ['#FB9190', '#FCB33A'];

const RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({
  cx, cy, midAngle, innerRadius, outerRadius, percent, index,
}) => {
   const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
  const x = cx + radius * Math.cos(-midAngle * RADIAN);
  const y = cy + radius * Math.sin(-midAngle * RADIAN);

  return (
    <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} dominantBaseline="central">
      {`${(percent * 100).toFixed(0)}%`}
    </text>
  );
};

export default class PieChartExpense extends PureComponent {
  render() {
    return (
      <PieChart width={200} height={200}>
        <Pie
          data={this.props.data}
          cx={100}
          cy={100}
          label={renderCustomizedLabel}
          outerRadius={80}
          fill="#8884d8"
          labelLine={false}
          dataKey="value"
        >
          {
            this.props.data.map((entry, index) => <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />)
          }
        </Pie>
      </PieChart>
    );
  }
}
