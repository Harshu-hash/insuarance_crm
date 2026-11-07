import React from 'react';
import { cn } from '../../utils/cn';

const Button = React.forwardRef(({ 
  className, 
  variant = 'primary', 
  size = 'md', 
  isLoading = false,
  disabled = false,
  children,
  ...props 
}, ref) => {
  const variants = {
    primary: 'bg-primary text-white hover:bg-primary/90 shadow-sm',
    secondary: 'bg-secondary text-white hover:bg-secondary/90',
    danger: 'bg-danger text-white hover:bg-danger/90',
    ghost: 'bg-transparent hover:bg-slate-100 text-slate-700',
    outline: 'border border-border bg-transparent hover:bg-slate-50 text-slate-700',
  };

  const sizes = {
    sm: 'h-8 px-3 text-xs',
    md: 'h-10 px-4 text-sm',
    lg: 'h-12 px-6 text-base',
  };

  return (
    <button
      ref={ref}
      disabled={isLoading || disabled}
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50',
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
      ) : null}
      {children}
    </button>
  );
});

Button.displayName = 'Button';

export default Button;
