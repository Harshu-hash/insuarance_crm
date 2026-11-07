import React from 'react';
import { MapPin, Trash2, Plus } from 'lucide-react';
import { Card, CardContent } from '../../../components/ui/Card';
import Button from '../../../components/ui/Button';
import Select from '../../../components/ui/Select';
import { MOCK_DISTRICTS, MOCK_BLOCKS } from '../mock/users.mock';

/**
 * A dedicated panel for managing geographic assignments.
 * Designed to be reused in both the Create/Edit form and the Details view.
 */
const UserAssignmentPanel = ({ district, block, onUpdate, isReadOnly = false }) => {
  return (
    <Card className="border-none shadow-sm shadow-slate-200/50 bg-white overflow-hidden">
      <div className="px-5 py-4 border-b border-slate-50 flex items-center justify-between bg-white">
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider flex items-center">
          <MapPin size={16} className="text-primary mr-2" />
          Primary Territory Assignment
        </h3>
        {!isReadOnly && (
          <span className="text-[10px] font-bold text-primary px-2 py-0.5 bg-primary/5 rounded">MODIFIABLE</span>
        )}
      </div>
      <CardContent className="p-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <Select
              label="Assigned District"
              value={district}
              onChange={(e) => onUpdate({ district: e.target.value, block: '' })}
              options={MOCK_DISTRICTS.map(d => ({ value: d, label: d }))}
              disabled={isReadOnly}
              placeholder="Select District"
            />
          </div>
          <div className="space-y-4">
            <Select
              label="Assigned Block"
              value={block}
              onChange={(e) => onUpdate({ block: e.target.value })}
              options={(MOCK_BLOCKS[district] || []).map(b => ({ value: b, label: b }))}
              disabled={isReadOnly || !district}
              placeholder="Select Block"
            />
          </div>
        </div>

        {district && (
          <div className="mt-8 p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-center justify-between">
            <div className="flex items-center">
              <div className="h-10 w-10 bg-white rounded-xl flex items-center justify-center mr-4 shadow-sm border border-slate-100">
                <MapPin size={18} className="text-primary" />
              </div>
              <div>
                <p className="text-xs font-bold text-text-primary uppercase tracking-tight">Active Jurisdiction</p>
                <p className="text-xs text-text-secondary mt-0.5">
                  {district} {block ? ` > ${block}` : '(District-wide)'}
                </p>
              </div>
            </div>
            {!isReadOnly && (
              <Button variant="outline" size="sm" className="h-8 text-[10px] px-3 font-bold text-danger border-danger/10 hover:bg-danger/5">
                <Trash2 size={12} className="mr-1" /> REMOVE
              </Button>
            )}
          </div>
        )}
        
        {!district && !isReadOnly && (
          <div className="mt-4 p-8 border-2 border-dashed border-slate-100 rounded-3xl flex flex-col items-center justify-center text-center">
            <div className="h-12 w-12 bg-slate-50 rounded-full flex items-center justify-center mb-3">
              <Plus size={20} className="text-slate-300" />
            </div>
            <p className="text-xs font-medium text-text-secondary">No territory assigned yet.</p>
            <p className="text-[10px] text-slate-400 mt-1">Select a district above to begin assignment.</p>
          </div>
        )}
      </CardContent>
    </Card>
  );
};

export default UserAssignmentPanel;
