import React from 'react';
import { ResponsiveContainer, PieChart, Pie, Cell, Tooltip, Legend } from 'recharts';

const COLORS = ['#2563eb', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6', '#06b6d4'];

const ReportBreakdownChart = ({ data = [] }) => {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <PieChart>
        <Pie
          data={data}
          cx="50%"
          cy="50%"
          innerRadius={60}
          outerRadius={80}
          paddingAngle={5}
          dataKey="value"
        >
          {data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
          ))}
        </Pie>
        <Tooltip 
          contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)', fontSize: '10px', fontWeight: '900', textTransform: 'uppercase' }}
        />
        <Legend 
          verticalAlign="bottom" 
          align="center"
          iconType="circle"
          wrapperStyle={{ fontSize: '10px', fontWeight: 'bold', paddingTop: '20px', textTransform: 'uppercase' }}
        />
      </PieChart>
    </ResponsiveContainer>
  );
};

export default ReportBreakdownChart;
