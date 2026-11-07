import React from 'react';
import Breadcrumb from '../common/Breadcrumb';
import { cn } from '../../utils/cn';

const PageHeader = ({ title, subtitle, actions, className }) => {
  return (
    <div className={cn("flex flex-col md:flex-row md:items-center justify-between gap-4 mb-6", className)}>
      <div className="space-y-1">
        <Breadcrumb className="mb-1" />
        <h1 className="text-2xl font-bold text-text-primary tracking-tight">{title}</h1>
        {subtitle && <p className="text-sm text-text-secondary">{subtitle}</p>}
      </div>
      {actions && (
        <div className="flex items-center gap-3">
          {actions}
        </div>
      )}
    </div>
  );
};

export default PageHeader;
