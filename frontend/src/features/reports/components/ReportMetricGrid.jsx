import React from 'react';

const ReportMetricGrid = ({ children, cols = 4 }) => {
  const gridCols = {
    1: 'grid-cols-1',
    2: 'grid-cols-1 md:grid-cols-2',
    3: 'grid-cols-1 md:grid-cols-3',
    4: 'grid-cols-1 md:grid-cols-2 lg:grid-cols-4',
    6: 'grid-cols-2 md:grid-cols-3 lg:grid-cols-6',
    8: 'grid-cols-2 md:grid-cols-4 lg:grid-cols-8',
  };

  return (
    <div className={`grid ${gridCols[cols] || gridCols[4]} gap-4`}>
      {children}
    </div>
  );
};

export default ReportMetricGrid;
