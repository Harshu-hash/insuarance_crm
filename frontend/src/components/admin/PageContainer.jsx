import React from 'react';
import { cn } from '../../utils/cn';

const PageContainer = ({ children, className, maxWidth = "max-w-[1600px]" }) => {
  return (
    <div className={cn("w-full mx-auto p-4 md:p-6 lg:p-8 pt-4", maxWidth, className)}>
      {children}
    </div>
  );
};

export default PageContainer;
