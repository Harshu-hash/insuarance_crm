import React from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import Button from '../../../components/ui/Button';

const IncentiveRuleForm = ({ initialData, onSubmit, onCancel }) => {
  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Rule Name</label>
          <Input defaultValue={initialData?.name} placeholder="e.g. Standard BM Rule" className="h-10 text-sm font-bold" />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Role Type</label>
          <Select defaultValue={initialData?.roleType} className="h-10 text-sm font-bold">
            <option value="BM">Block Manager (BM)</option>
            <option value="DM">District Manager (DM)</option>
          </Select>
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Incentive Amount (₹)</label>
          <Input type="number" defaultValue={initialData?.amount} placeholder="5" className="h-10 text-sm font-bold font-mono" />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Calculation Type</label>
          <Select defaultValue={initialData?.calculationType} className="h-10 text-sm font-bold">
            <option value="fixed">Fixed Per Enrollment</option>
            <option value="percentage">Percentage Placeholder</option>
          </Select>
        </div>
      </div>

      <div className="space-y-1">
        <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Payable Condition</label>
        <Input defaultValue={initialData?.payableCondition} placeholder="e.g. After premium reconciliation" className="h-10 text-sm font-bold" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-1">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Effective From</label>
          <Input type="date" defaultValue={initialData?.effectiveFrom} className="h-10 text-sm font-bold" />
        </div>
        <div className="space-y-1">
          <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Status</label>
          <Select defaultValue={initialData?.status} className="h-10 text-sm font-bold">
            <option value="active">Active</option>
            <option value="draft">Draft</option>
            <option value="inactive">Inactive</option>
          </Select>
        </div>
      </div>

      <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
        <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-2 flex items-center">
          <div className="h-1 w-1 rounded-full bg-primary mr-2" />
          Rule Logic Simulation
        </h4>
        <p className="text-[11px] text-slate-600 font-medium">
          Incentives will be generated automatically when a <span className="font-bold text-slate-900">Paid Enrollment</span> is detected.
          If the enrollment is later cancelled or refunded, the system will <span className="font-bold text-danger">Reverse</span> this record.
        </p>
      </div>

      <div className="flex justify-end space-x-3 pt-4 border-t border-slate-100">
        <Button variant="outline" onClick={onCancel}>Cancel</Button>
        <Button variant="primary" onClick={() => onSubmit({})}>Save Rule Configuration</Button>
      </div>
    </div>
  );
};

export default IncentiveRuleForm;
