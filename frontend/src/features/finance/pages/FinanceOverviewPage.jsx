import React from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { Download, RefreshCw } from 'lucide-react';
import FinanceKpiGrid from '../components/FinanceKpiGrid';
import FinanceTrendChart from '../components/FinanceTrendChart';
import FinanceBreakdownCard from '../components/FinanceBreakdownCard';
import FinanceAlertCard from '../components/FinanceAlertCard';
import FinanceActivityTable from '../components/FinanceActivityTable';
import { useFinanceOverview } from '../hooks/useFinanceOverview';
import { MOCK_RECENT_ACTIVITY } from '../mock/finance.mock';

const FinanceOverviewPage = () => {
  const { data, isLoading, refetch } = useFinanceOverview();

  return (
    <PageContainer>
      <PageHeader 
        title="Finance Overview"
        subtitle="Monitor premium collections, incentives, claim payouts, and reconciliation health."
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
        {/* KPIs */}
        <FinanceKpiGrid data={data} isLoading={isLoading} />

        {/* Alerts Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          <FinanceAlertCard 
            title="Failed Transactions" 
            count={data?.failedTransactions || 0} 
            description="Premium payments that failed and need manual reconciliation or re-initiation."
            color="danger"
          />
          <FinanceAlertCard 
            title="Pending Receipts" 
            count={data?.receiptsPending || 0} 
            description="Transactions successful but receipts not yet generated for students."
            color="warning"
          />
          <FinanceAlertCard 
            title="Recon Exceptions" 
            count={data?.reconciliationExceptions || 0} 
            description="Discrepancies detected between enrollment records and bank statements."
            color="danger"
            actionLabel="View Exceptions"
          />
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <FinanceTrendChart 
              title="Premium Collection Trend" 
              subtitle="Monthly collection volume (Last 4 Months)"
              data={data?.trends?.premiumCollection || []}
            />
          </div>
          <div>
            <FinanceBreakdownCard 
              title="Payment Mode Breakdown" 
              subtitle="Distribution of collection channels"
              data={data?.trends?.paymentModes || []}
            />
          </div>
        </div>

        {/* More Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
             <FinanceBreakdownCard 
              title="Finance Liability" 
              subtitle="Breakdown of pending payouts & incentives"
              data={[
                { name: 'Incentives', value: 35 },
                { name: 'Claim Payouts', value: 55 },
                { name: 'Refunds', value: 10 },
              ]}
            />
          </div>
          <div className="lg:col-span-2">
            <FinanceTrendChart 
              type="bar"
              title="Claim Payout Trend" 
              subtitle="Approved vs Disbursed Payouts"
              data={data?.trends?.payouts || []}
            />
          </div>
        </div>

        {/* Recent Activity */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-sm font-black text-slate-800 uppercase tracking-wider">Recent Finance Activity</h3>
            <Button variant="ghost" size="sm" className="text-xs font-bold text-primary">View All Transactions</Button>
          </div>
          <FinanceActivityTable data={MOCK_RECENT_ACTIVITY} isLoading={isLoading} />
        </div>
      </div>
    </PageContainer>
  );
};

export default FinanceOverviewPage;
