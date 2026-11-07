import React from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { Download, RefreshCw, BarChart3, TrendingUp } from 'lucide-react';
import IncentivePerformanceCard from '../components/IncentivePerformanceCard';
import IncentiveRankingTable from '../components/IncentiveRankingTable';
import FinanceTrendChart from '../../finance/components/FinanceTrendChart';
import { useIncentivePerformance } from '../hooks/useIncentivePerformance';

const IncentivePerformancePage = () => {
  const { data, isLoading, refetch } = useIncentivePerformance();

  return (
    <PageContainer>
      <PageHeader 
        title="Incentive Performance"
        subtitle="Track BM and DM performance based on student enrollment and incentive earning."
        actions={
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={refetch}>
              <RefreshCw size={14} className={`mr-2 ${isLoading ? 'animate-spin' : ''}`} /> Refresh
            </Button>
            <Button variant="primary" size="sm">
              <Download size={14} className="mr-2" /> Export Performance
            </Button>
          </div>
        }
      />

      <div className="space-y-6">
        {/* Performance KPIs */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
          <IncentivePerformanceCard 
            title="Total Field Users" 
            value="142" 
            description="Active BMs and DMs"
            color="primary"
          />
          <IncentivePerformanceCard 
            title="Top BM Enrollments" 
            value="450" 
            description="Highest individual BM"
            color="success"
          />
          <IncentivePerformanceCard 
            title="Top DM Network" 
            value="2,500" 
            description="Highest individual DM"
            color="warning"
          />
          <IncentivePerformanceCard 
            title="Avg BM Earning" 
            value="₹1,850" 
            description="Monthly average"
            color="primary"
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
           <FinanceTrendChart 
              type="bar"
              title="Enrollment vs Incentive" 
              subtitle="Comparison of field productivity and liability"
              data={[
                { month: 'Jan', approved: 450, paid: 2250 },
                { month: 'Feb', approved: 520, paid: 2600 },
                { month: 'Mar', approved: 600, paid: 3000 },
                { month: 'Apr', approved: 850, paid: 4250 },
              ]}
            />
            <FinanceTrendChart 
              title="BM Performance by Block" 
              subtitle="Top 5 blocks by incentive generation"
              data={[
                { month: 'Block A', amount: 85000 },
                { month: 'Block B', amount: 72000 },
                { month: 'Block C', amount: 65000 },
                { month: 'Block D', amount: 48000 },
              ]}
            />
        </div>

        {/* Ranking Tables */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <IncentiveRankingTable data={data.bm} type="BM" isLoading={isLoading} />
          <IncentiveRankingTable data={data.dm} type="DM" isLoading={isLoading} />
        </div>
      </div>
    </PageContainer>
  );
};

export default IncentivePerformancePage;
