import React from 'react';
import { 
  LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, 
  Tooltip, ResponsiveContainer, Legend, BarChart, Bar 
} from 'recharts';
import { Card, CardHeader, CardContent } from '../../../components/ui/Card';

const FinanceTrendChart = ({ data, type = 'line', title, subtitle }) => {
  return (
    <Card className="border-none shadow-sm shadow-slate-200/50 overflow-hidden">
      <CardHeader className="pb-0 pt-4">
        <h3 className="text-xs font-bold text-text-secondary uppercase tracking-wider">{title}</h3>
        {subtitle && <p className="text-[10px] text-slate-400 font-medium">{subtitle}</p>}
      </CardHeader>
      <CardContent className="p-4 h-64">
        <ResponsiveContainer width="100%" height="100%">
          {type === 'line' ? (
            <LineChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#94a3b8' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#94a3b8' }}
                tickFormatter={(value) => `₹${value / 100000}L`}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '12px' }}
                formatter={(value) => [`₹${value.toLocaleString()}`, 'Amount']}
              />
              <Line 
                type="monotone" 
                dataKey="amount" 
                stroke="#2563eb" 
                strokeWidth={3} 
                dot={{ r: 4, fill: '#2563eb', strokeWidth: 2, stroke: '#fff' }}
                activeDot={{ r: 6, strokeWidth: 0 }}
              />
            </LineChart>
          ) : (
            <BarChart data={data}>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
              <XAxis 
                dataKey="month" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#94a3b8' }}
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#94a3b8' }}
                tickFormatter={(value) => `₹${value / 100000}L`}
              />
              <Tooltip 
                contentStyle={{ borderRadius: '12px', border: 'none', boxShadow: '0 4px 12px rgba(0,0,0,0.1)', fontSize: '12px' }}
              />
              <Legend verticalAlign="top" height={36} iconType="circle" wrapperStyle={{ fontSize: '10px', textTransform: 'uppercase', fontWeight: 'bold' }} />
              <Bar dataKey="approved" fill="#94a3b8" radius={[4, 4, 0, 0]} barSize={20} />
              <Bar dataKey="paid" fill="#2563eb" radius={[4, 4, 0, 0]} barSize={20} />
            </BarChart>
          )}
        </ResponsiveContainer>
      </CardContent>
    </Card>
  );
};

export default FinanceTrendChart;
