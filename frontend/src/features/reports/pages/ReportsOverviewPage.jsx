import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { Download, RefreshCw, ChevronRight, PieChart, Users, ShieldCheck, Banknote, Map, FileText } from 'lucide-react';
import ReportSummaryCard from '../components/ReportSummaryCard';
import ReportMetricGrid from '../components/ReportMetricGrid';
import ReportInsightCard from '../components/ReportInsightCard';
import { useReportsOverview } from '../hooks/useReportsOverview';

const ReportsOverviewPage = () => {
  const navigate = useNavigate();
  const { data, isLoading, refetch } = useReportsOverview();

  const categories = [
    { id: 'enrollment', title: 'Enrollment Reports', desc: 'Student enrollment trends and coverage.', icon: Users, color: 'text-primary', path: '/admin/reports/enrollment' },
    { id: 'claims', title: 'Claims Reports', desc: 'Status analysis and payout tracking.', icon: FileText, color: 'text-danger', path: '/admin/reports/claims' },
    { id: 'finance', title: 'Finance Reports', desc: 'Collections, liabilities, and exceptions.', icon: Banknote, color: 'text-success', path: '/admin/reports/finance' },
    { id: 'incentives', title: 'Incentive Reports', desc: 'BM/DM earnings and performance.', icon: PieChart, color: 'text-warning', path: '/admin/reports/incentives' },
    { id: 'geography', title: 'Geography Reports', desc: 'District and block performance.', icon: Map, color: 'text-primary', path: '/admin/reports/geography' },
    { id: 'policies', title: 'Policy Reports', desc: 'Usage and policy-year analysis.', icon: ShieldCheck, color: 'text-success', path: '/admin/reports/policies' },
  ];

  return (
    <PageContainer>
      <PageHeader 
        title="Reports Hub"
        subtitle="Analyze enrollments, claims, finance, incentives, policies, and geography performance."
        actions={
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={refetch}>
              <RefreshCw size={14} className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} /> Refresh
            </Button>
            <Button variant="primary" size="sm">
              <Download size={14} className="mr-2" /> Export Summary
            </Button>
          </div>
        }
      />

      <div className="space-y-8">
        {/* Global KPIs */}
        <ReportMetricGrid>
          {data?.summary.map((kpi, idx) => (
            <ReportSummaryCard key={idx} {...kpi} isLoading={isLoading} />
          ))}
        </ReportMetricGrid>

        {/* Insights Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {data?.insights.map((insight, idx) => (
            <ReportInsightCard key={idx} {...insight} />
          ))}
        </div>

        {/* Category Navigation */}
        <div className="space-y-4">
          <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest px-1">Detailed Analytics</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {categories.map((cat) => {
              const Icon = cat.icon;
              const metric = data?.categoryMetrics?.[cat.id];
              return (
                <div 
                  key={cat.id} 
                  onClick={() => navigate(cat.path)}
                  className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm hover:shadow-md hover:border-primary/20 transition-all cursor-pointer group"
                >
                  <div className="flex items-start justify-between mb-6">
                    <div className={`p-3 rounded-2xl bg-slate-50 ${cat.color} group-hover:bg-primary group-hover:text-white transition-colors`}>
                      <Icon size={24} />
                    </div>
                    <ChevronRight size={20} className="text-slate-300 group-hover:text-primary transition-colors" />
                  </div>
                  <div>
                    <h4 className="text-sm font-black text-slate-800 mb-1">{cat.title}</h4>
                    <p className="text-[11px] text-slate-400 font-bold uppercase mb-6 tracking-tighter leading-tight">{cat.desc}</p>
                    
                    <div className="pt-4 border-t border-slate-50 flex items-center justify-between">
                       <div>
                          <span className="text-[10px] font-black text-slate-300 uppercase block">Principal Metric</span>
                          <span className="text-xs font-black text-slate-700">{metric?.total || '-'}</span>
                       </div>
                       <div className="text-right">
                          <span className="text-[10px] font-black text-slate-300 uppercase block">Last Sync</span>
                          <span className="text-[10px] font-bold text-slate-500 italic">{metric?.lastUpdated || '-'}</span>
                       </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default ReportsOverviewPage;
