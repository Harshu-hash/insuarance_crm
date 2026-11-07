import React from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { Download, RefreshCw, TrendingUp, AlertCircle } from 'lucide-react';
import IncentiveSummaryCard from '../components/IncentiveSummaryCard';
import IncentiveTable from '../components/IncentiveTable';
import FinanceTrendChart from '../../finance/components/FinanceTrendChart';
import FinanceBreakdownCard from '../../finance/components/FinanceBreakdownCard';
import FinanceAlertCard from '../../finance/components/FinanceAlertCard';
import { useIncentivesOverview } from '../hooks/useIncentivesOverview';
import { MOCK_INCENTIVE_RECORDS } from '../mock/incentives.mock';

const IncentivesOverviewPage = () => {
  const { data, isLoading, refetch } = useIncentivesOverview();

  return (
    <PageContainer>
      <PageHeader 
        title="Incentives Overview"
        subtitle="Monitor BM and DM incentive generation, payout readiness, and field performance."
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

      <div className="space-y-6">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <IncentiveSummaryCard title="Total Generated" value={data?.totalGenerated} icon="Banknote" color="primary" trend="up" trendValue={12} />
          <IncentiveSummaryCard title="BM Generated" value={data?.bmIncentiveGenerated} icon="UserCheck" color="primary" />
          <IncentiveSummaryCard title="DM Generated" value={data?.dmIncentiveGenerated} icon="Users" color="primary" />
          <IncentiveSummaryCard title="Payable Amount" value={data?.payableIncentives} icon="Clock" color="warning" />
          <IncentiveSummaryCard title="Paid Amount" value={data?.paidIncentives} icon="CheckCircle2" color="success" />
          <IncentiveSummaryCard title="On Hold" value={data?.onHoldIncentives} icon="AlertTriangle" color="warning" />
          <IncentiveSummaryCard title="Reversed" value={data?.reversedIncentives} icon="RotateCcw" color="danger" />
          <IncentiveSummaryCard title="This Month" value={data?.thisMonthIncentives} icon="Calendar" color="primary" />
        </div>

        {/* Alerts */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
           <FinanceAlertCard 
            title="On-Hold Incentives" 
            count={8} 
            description="Incentives flagged for review due to enrollment verification delays."
            color="warning"
          />
          <FinanceAlertCard 
            title="Duplicate Risks" 
            count={3} 
            description="Potential duplicate incentive generation detected for same enrollments."
            color="danger"
          />
          <FinanceAlertCard 
            title="Payout Ready" 
            count={450} 
            description="Incentive records marked as payable and ready for finance batching."
            color="primary"
            actionLabel="View Ready"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
             <FinanceTrendChart 
              type="bar"
              title="Incentive Generation Trend" 
              subtitle="BM vs DM monthly generation volume"
              data={data?.trends?.generation || []}
            />
          </div>
          <div>
            <FinanceBreakdownCard 
              title="Status Distribution" 
              subtitle="Current lifecycle status of generated records"
              data={data?.trends?.statusDistribution || []}
            />
          </div>
        </div>

        {/* Recent Records */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-widest">Recent Incentive Records</h3>
            <Button variant="ghost" size="sm" className="text-xs font-bold text-primary">View All Records</Button>
          </div>
          <IncentiveTable data={MOCK_INCENTIVE_RECORDS.slice(0, 5)} isLoading={isLoading} />
        </div>
      </div>
    </PageContainer>
  );
};

export default IncentivesOverviewPage;
