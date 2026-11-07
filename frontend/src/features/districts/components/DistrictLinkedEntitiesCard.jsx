import React from 'react';
import { Layers, School, Users, ChevronRight } from 'lucide-react';
import { cn } from '../../../utils/cn';

export const DistrictBlocksPreview = ({ blocks = [], totalCount = 0, onViewAll }) => {
  return (
    <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden flex flex-col">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <Layers className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-bold text-text-primary">Linked Blocks</h3>
        </div>
        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">
          {totalCount} Total
        </span>
      </div>
      <div className="p-4">
        {blocks.length > 0 ? (
          <div className="space-y-3">
            {blocks.map((block, idx) => (
              <div key={idx} className="flex items-center justify-between p-2 rounded-lg border border-slate-50 hover:bg-slate-50 transition-colors">
                <div>
                  <p className="text-xs font-bold text-text-primary">{block.name}</p>
                  <p className="text-[10px] text-text-secondary">{block.schoolsCount} Schools</p>
                </div>
                <ChevronRight className="h-3 w-3 text-slate-300" />
              </div>
            ))}
            {totalCount > blocks.length && (
              <button onClick={onViewAll} className="w-full py-2 text-[11px] font-bold text-primary hover:bg-primary/5 rounded-lg border border-dashed border-primary/20 transition-colors">
                Manage all {totalCount} blocks
              </button>
            )}
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-xs text-text-secondary font-medium">No blocks linked yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const DistrictSchoolsPreview = ({ schools = [], totalCount = 0, onViewAll }) => {
  return (
    <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden flex flex-col">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <School className="h-4 w-4 text-primary" />
          <h3 className="text-sm font-bold text-text-primary">Primary Schools</h3>
        </div>
        <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-bold">
          {totalCount} Total
        </span>
      </div>
      <div className="p-4">
        {schools.length > 0 ? (
          <div className="space-y-3">
            {schools.map((school, idx) => (
              <div key={idx} className="flex items-center gap-3 p-2 rounded-lg border border-slate-50 hover:bg-slate-50 transition-colors">
                <div className="h-8 w-8 rounded bg-slate-100 flex items-center justify-center text-slate-500 font-bold text-xs">
                  {school.name.charAt(0)}
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-xs font-bold text-text-primary truncate">{school.name}</p>
                  <p className="text-[10px] text-text-secondary">{school.enrollmentCount} Active</p>
                </div>
              </div>
            ))}
            <button onClick={onViewAll} className="w-full py-2 text-[11px] font-bold text-primary hover:bg-primary/5 rounded-lg border border-dashed border-primary/20 transition-colors">
              Manage all {totalCount} schools
            </button>
          </div>
        ) : (
          <div className="text-center py-6">
            <p className="text-xs text-text-secondary font-medium">No schools linked yet.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export const DistrictUsersPreview = ({ manager, blockManagersCount = 0, othersCount = 0, onViewAll }) => {
  return (
    <div className="bg-white rounded-xl border border-border shadow-sm overflow-hidden flex flex-col">
      <div className="p-4 border-b border-border bg-slate-50 flex items-center gap-2">
        <Users className="h-4 w-4 text-primary" />
        <h3 className="text-sm font-bold text-text-primary">Assigned Personnel</h3>
      </div>
      <div className="p-4 space-y-4">
        <div>
          <p className="text-[10px] font-bold text-text-secondary uppercase tracking-wider mb-2">District Manager</p>
          {manager ? (
            <div className="flex items-center gap-3 p-2 rounded-lg bg-primary/5 border border-primary/10">
              <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center text-white text-xs font-bold">
                {manager.name.charAt(0)}
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-primary truncate">{manager.name}</p>
                <p className="text-[10px] text-primary/70 truncate">{manager.email}</p>
              </div>
            </div>
          ) : (
            <div className="p-3 rounded-lg border border-dashed border-amber-200 bg-amber-50 text-center">
              <p className="text-[10px] font-bold text-amber-700">NO MANAGER ASSIGNED</p>
            </div>
          )}
        </div>

        <div className="grid grid-cols-2 gap-3">
          <div className="p-3 rounded-xl border border-border text-center">
            <p className="text-lg font-black text-text-primary leading-none">{blockManagersCount}</p>
            <p className="text-[9px] font-bold text-text-secondary uppercase mt-1">Block Mgrs</p>
          </div>
          <div className="p-3 rounded-xl border border-border text-center">
            <p className="text-lg font-black text-text-primary leading-none">{othersCount}</p>
            <p className="text-[9px] font-bold text-text-secondary uppercase mt-1">Other Users</p>
          </div>
        </div>
      </div>
      <div className="p-3 bg-slate-50 border-t border-border mt-auto">
        <button onClick={onViewAll} className="w-full py-1.5 text-[11px] font-bold text-text-secondary hover:text-primary transition-colors">
          View Membership Directory
        </button>
      </div>
    </div>
  );
};
