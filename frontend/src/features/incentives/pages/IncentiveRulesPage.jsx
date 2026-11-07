import React, { useState } from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { Plus, Info } from 'lucide-react';
import IncentiveRuleCard from '../components/IncentiveRuleCard';
import IncentiveRuleForm from '../components/IncentiveRuleForm';
import { useIncentiveRules } from '../hooks/useIncentiveRules';

const IncentiveRulesPage = () => {
  const { data: rules, isLoading, refetch } = useIncentiveRules();
  const [editingRule, setEditingRule] = useState(null);
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleEdit = (rule) => {
    setEditingRule(rule);
    setIsFormOpen(true);
  };

  const handleCancel = () => {
    setEditingRule(null);
    setIsFormOpen(false);
  };

  return (
    <PageContainer>
      <PageHeader 
        title="Incentive Rules"
        subtitle="Configure the logic for BM and DM incentive generation based on successful enrollments."
        actions={
          <Button variant="primary" size="sm" onClick={() => { setEditingRule(null); setIsFormOpen(true); }}>
            <Plus size={14} className="mr-2" /> Add New Rule
          </Button>
        }
      />

      <div className="space-y-8">
        {/* Info Banner */}
        <div className="bg-primary/5 p-4 rounded-2xl border border-primary/10 flex items-start space-x-4">
          <div className="p-2 bg-white rounded-xl text-primary shadow-sm">
            <Info size={18} />
          </div>
          <div>
            <h4 className="text-xs font-black text-primary uppercase tracking-widest mb-1">Active Calculation Logic</h4>
            <p className="text-[11px] text-slate-600 font-medium max-w-2xl leading-relaxed">
              Currently, BM receives ₹5 and DM receives ₹2 per successful paid enrollment. Incentives are generated instantly upon payment confirmation but marked as 'payable' only after internal finance reconciliation.
            </p>
          </div>
        </div>

        {isFormOpen ? (
          <div className="bg-white p-8 rounded-2xl border border-slate-200 shadow-sm animate-in fade-in slide-in-from-bottom-4">
            <div className="mb-6 pb-4 border-b border-slate-100 flex items-center justify-between">
               <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">
                {editingRule ? `Edit Rule: ${editingRule.name}` : 'Create New Incentive Rule'}
               </h3>
               <Button variant="ghost" size="sm" onClick={handleCancel}>Cancel</Button>
            </div>
            <IncentiveRuleForm 
              initialData={editingRule} 
              onCancel={handleCancel}
              onSubmit={() => { handleCancel(); refetch(); }}
            />
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {isLoading ? (
              [1, 2].map(i => <div key={i} className="h-64 bg-slate-50 animate-pulse rounded-2xl"></div>)
            ) : (
              rules.map(rule => (
                <IncentiveRuleCard 
                  key={rule.id} 
                  rule={rule} 
                  onEdit={handleEdit} 
                />
              ))
            )}
          </div>
        )}

        {/* History Placeholder */}
        {!isFormOpen && (
          <div className="pt-8 border-t border-slate-100">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest mb-4">Rule Change History</h3>
            <div className="bg-white p-8 rounded-2xl border border-dashed border-slate-200 flex flex-col items-center justify-center text-center">
               <div className="h-10 w-10 rounded-full bg-slate-50 flex items-center justify-center mb-3">
                  <History size={20} className="text-slate-300" />
               </div>
               <h4 className="text-xs font-bold text-slate-400 uppercase">No rule changes recorded recently</h4>
               <p className="text-[10px] text-slate-400 mt-1">Audit logs for incentive rule modifications will appear here.</p>
            </div>
          </div>
        )}
      </div>
    </PageContainer>
  );
};

// Placeholder for History icon if not imported
const History = ({ size, className }) => <div className={className} style={{ width: size, height: size }}>📜</div>;

export default IncentiveRulesPage;
