import React from 'react';
import { cn } from '../../utils/cn';

export const Card = ({ children, className, title, icon, actions }) => {
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
    <div className={cn("bg-surface rounded-xl border border-border shadow-sm overflow-hidden", className)}>
      {(title || iconElement || actions) && (
        <div className="px-6 py-4 border-b border-border flex items-center justify-between">
          <div className="flex items-center space-x-3">
            {iconElement && <div className="flex-shrink-0">{iconElement}</div>}
            {title && <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">{title}</h3>}
          </div>
          {actions && <div className="flex items-center space-x-2">{actions}</div>}
        </div>
      )}
      <div className={cn(title || iconElement || actions ? "p-6" : "p-0")}>
        {children}
      </div>
    </div>
  );
};

export const CardHeader = ({ children, className }) => {
  return (
    <div className={cn("px-6 py-4 border-b border-border", className)}>
      {children}
    </div>
  );
};

export const CardTitle = ({ children, className }) => {
  return (
    <h3 className={cn("text-lg font-semibold text-text-primary", className)}>
      {children}
    </h3>
  );
};

export const CardContent = ({ children, className }) => {
  return (
    <div className={cn("px-6 py-4", className)}>
      {children}
    </div>
  );
};

export const CardFooter = ({ children, className }) => {
  return (
    <div className={cn("px-6 py-4 border-t border-border", className)}>
      {children}
    </div>
  );
};

export default Card;
