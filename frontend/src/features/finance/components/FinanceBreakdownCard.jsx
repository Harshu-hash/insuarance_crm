import React from 'react';
import { PieChart, Pie, Cell, ResponsiveContainer, Legend, Tooltip } from 'recharts';
import { Card, CardHeader, CardContent } from '../../../components/ui/Card';

const COLORS = ['#2563eb', '#64748b', '#16a34a', '#f59e0b', '#dc2626'];

const FinanceBreakdownCard = ({ data, title, subtitle }) => {
  return (
    <Card className="border-none shadow-sm shadow-slate-200/50 overflow-hidden h-full">
      <CardHeader className="pb-0 pt-4">
        <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wider">{title}</h3>
        {subtitle && <p className="text-[10px] text-slate-400 font-medium">{subtitle}</p>}
      </CardHeader>
      <CardContent className="p-4 h-64">
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
              contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '12px' }}
              formatter={(value) => [`${value}%`, 'Share']}
            />
            <Legend 
              verticalAlign="bottom" 
              height={36} 
              iconType="circle" 
              wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }} 
            />
          </PieChart>
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default FinanceBreakdownCard;
