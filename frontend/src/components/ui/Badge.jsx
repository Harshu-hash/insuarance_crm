import React from 'react';
import { cn } from '../../utils/cn';

const Badge = ({ children, variant = 'primary', size = 'md', className }) => {
  const variants = {
    primary: 'bg-primary/10 text-primary border-primary/20',
    secondary: 'bg-slate-100 text-slate-600 border-slate-200',
    success: 'bg-success/10 text-success border-success/20',
    warning: 'bg-warning/10 text-warning border-warning/20',
    danger: 'bg-danger/10 text-danger border-danger/20',
    info: 'bg-info/10 text-info border-info/20',
    outline: 'bg-transparent text-slate-600 border-slate-300',
  };

  const sizes = {
    sm: 'px-1.5 py-0.5 text-[10px]',
    md: 'px-2 py-1 text-xs',
    lg: 'px-3 py-1.5 text-sm',
  };

  return (
    <span className={cn(
      "inline-flex items-center font-bold border rounded-full uppercase tracking-wider leading-none",
      variants[variant],
      sizes[size],
      className
    )}>
      {children}
    </span>
  );
};

export default Badge;
