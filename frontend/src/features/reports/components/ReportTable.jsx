import React from 'react';

const ReportTable = ({ headers = [], data = [], isLoading, title, subtitle }) => {
  if (isLoading) {
    return (
      <div className="w-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
        <div className="h-12 bg-slate-50 border-b border-slate-200 animate-pulse"></div>
        {[1, 2, 3, 4, 5].map(i => (
          <div key={i} className="h-16 border-b border-slate-100 animate-pulse"></div>
        ))}
      </div>
    );
  }

  return (
    <div className="w-full bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
      {(title || subtitle) && (
        <div className="px-6 py-4 border-b border-slate-100 bg-slate-50/50">
          {title && <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">{title}</h3>}
          {subtitle && <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">{subtitle}</p>}
        </div>
      )}
      <div className="overflow-x-auto">
        <table className="w-full text-left border-collapse">
          <thead>
            <tr className="bg-white border-b border-slate-100">
              {headers.map((header, idx) => (
                <th key={idx} className={`px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider ${header.align === 'right' ? 'text-right' : ''}`}>
                  {header.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-slate-50">
            {data.length === 0 ? (
              <tr>
                <td colSpan={headers.length} className="px-6 py-12 text-center text-xs text-slate-400 font-bold uppercase">
                  No reporting data found for selected filters
                </td>
              </tr>
            ) : (
              data.map((row, rowIdx) => (
                <tr key={rowIdx} className="hover:bg-slate-50/50 transition-colors">
                  {headers.map((header, colIdx) => {
                    const value = row[header.key];
                    return (
                      <td key={colIdx} className={`px-6 py-4 text-xs font-bold text-slate-700 ${header.align === 'right' ? 'text-right' : ''}`}>
                        {header.render ? header.render(value, row) : (
                          typeof value === 'number' && !header.label.toLowerCase().includes('count') && !header.label.toLowerCase().includes('rate')
                            ? `₹${value.toLocaleString('en-IN')}`
                            : value?.toLocaleString()
                        )}
                      </td>
                    );
                  })}
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportTable;
