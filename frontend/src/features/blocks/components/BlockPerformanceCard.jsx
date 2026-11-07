import React from 'react';
import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';
import { Activity, TrendingUp, AlertCircle } from 'lucide-react';
import { cn } from '../../../utils/cn';

const BlockPerformanceCard = ({ data = [], healthStatus = 'stable' }) => {
  const statusConfig = {
    high: { color: 'text-emerald-600', bg: 'bg-emerald-50', label: 'Exceptional', icon: TrendingUp },
    stable: { color: 'text-blue-600', bg: 'bg-blue-50', label: 'Healthy', icon: Activity },
    low: { color: 'text-amber-600', bg: 'bg-amber-50', label: 'Low Registration', icon: AlertCircle },
  };

  const config = statusConfig[healthStatus] || statusConfig.stable;
  const StatusIcon = config.icon;

  return (
    <div className="bg-white rounded-2xl border border-border shadow-sm overflow-hidden flex flex-col h-fit">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Activity className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-bold text-text-primary uppercase tracking-tight">Block Enrollment Health</h3>
        </div>
        <div className={cn("px-2 py-0.5 rounded-full text-[10px] font-bold flex items-center gap-1", config.bg, config.color)}>
          <StatusIcon className="h-3 w-3" />
          {config.label}
        </div>
      </div>

      <div className="p-6 pb-2 min-h-[180px]">
        {data.length > 0 ? (
          <ResponsiveContainer width="100%" height={160}>
            <AreaChart data={data} margin={{ top: 5, right: 10, left: -20, bottom: 0 }}>
              <defs>
                <linearGradient id="blockPerformanceGradient" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#3b82f6" stopOpacity={0.1}/>
                  <stop offset="95%" stopColor="#3b82f6" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#e2e8f0" />
              <XAxis 
                dataKey="name" 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#64748b' }} 
              />
              <YAxis 
                axisLine={false} 
                tickLine={false} 
                tick={{ fontSize: 10, fill: '#64748b' }} 
              />
              <Tooltip 
                contentStyle={{ borderRadius: '8px', border: 'none', boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)' }}
                labelStyle={{ fontWeight: 'bold', fontSize: '12px' }}
              />
              <Area 
                type="monotone" 
                dataKey="value" 
                stroke="#3b82f6" 
                strokeWidth={2} 
                fillOpacity={1} 
                fill="url(#blockPerformanceGradient)" 
              />
            </AreaChart>
          </ResponsiveContainer>
        ) : (
          <div className="h-[160px] flex items-center justify-center bg-slate-50 rounded-lg border border-dashed border-slate-200">
            <span className="text-[10px] uppercase font-bold text-slate-400">No recent enrollment data</span>
          </div>
        )}
      </div>

      <div className="p-4 bg-slate-50 border-t border-border flex items-center justify-between">
        <span className="text-[10px] text-text-secondary uppercase font-bold tracking-wider">BM Efficiency</span>
        <div className="flex items-center gap-1.5">
          <div className="h-1.5 w-24 bg-slate-200 rounded-full overflow-hidden">
            <div className="h-full bg-emerald-500 rounded-full" style={{ width: '82%' }} />
          </div>
          <span className="text-[10px] font-bold text-emerald-600">82%</span>
        </div>
      </div>
    </div>
  );
};

export default BlockPerformanceCard;
