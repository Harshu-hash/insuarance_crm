import React from 'react';

const AuditSummaryCard = ({ title, value, icon, trend, variant = 'default' }) => {
  const variants = {
    default: 'from-white to-slate-50 border-slate-200',
    primary: 'from-primary/5 to-primary/10 border-primary/20',
    danger: 'from-danger/5 to-danger/10 border-danger/20',
    warning: 'from-warning/5 to-warning/10 border-warning/20',
    success: 'from-success/5 to-success/10 border-success/20',
  };

  const textColors = {
    default: 'text-slate-600',
    primary: 'text-primary',
    danger: 'text-danger',
    warning: 'text-warning',
    success: 'text-success',
  };

  const renderIcon = () => {
    if (!icon) return null;
    if (React.isValidElement(icon)) return icon;
    if (typeof icon === 'function' || typeof icon === 'object') {
      const IconComponent = icon;
      return <IconComponent className="h-5 w-5" />;
    }
    return icon;
  };

  const iconElement = renderIcon();

  return (
    <div className={`bg-gradient-to-br ${variants[variant]} border rounded-xl p-4 shadow-sm hover:shadow-md transition-all duration-300`}>
      <div className="flex justify-between items-start mb-3">
        <div className={`p-2 rounded-lg bg-white shadow-sm ${textColors[variant]}`}>
          {iconElement}
        </div>
        {trend && (
          <span className={`text-[10px] font-bold px-1.5 py-0.5 rounded-full ${trend > 0 ? 'bg-success/10 text-success' : 'bg-danger/10 text-danger'}`}>
            {trend > 0 ? '+' : ''}{trend}%
          </span>
        )}
      </div>
      <div>
        <h3 className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">{title}</h3>
        <p className="text-2xl font-bold text-slate-900 leading-none">{value}</p>
      </div>
    </div>
  );
};

export default AuditSummaryCard;
