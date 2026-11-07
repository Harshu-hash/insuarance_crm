import React from 'react';
import { Lock } from 'lucide-react';
import { Card, CardContent } from '../../../../components/ui/Card';

const SecuritySection = () => {
  return (
    <section className="space-y-4">
      <div className="flex items-center space-x-2 text-text-primary px-1">
        <Lock size={18} className="text-primary" />
        <h2 className="text-sm font-bold uppercase tracking-wider">Security Settings</h2>
      </div>
      <Card className="border-none shadow-sm shadow-slate-200/50">
        <CardContent className="p-6">
          <div className="flex items-center justify-between p-4 bg-slate-50 rounded-xl border border-slate-100">
            <div>
              <p className="text-xs font-bold text-text-primary">Two-Factor Authentication (Internal Only)</p>
              <p className="text-[10px] text-text-secondary mt-1">Status: Disabled. This will be configurable once the user activates their account.</p>
            </div>
            <span className="px-2 py-1 bg-slate-200 text-slate-500 rounded text-[10px] font-bold">LOCKED</span>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};

export default SecuritySection;
