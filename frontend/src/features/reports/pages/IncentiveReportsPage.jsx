import React, { useState } from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import ReportFilterBar from '../components/ReportFilterBar';
import ReportSummaryCard from '../components/ReportSummaryCard';
import ReportMetricGrid from '../components/ReportMetricGrid';
import ReportChartCard from '../components/ReportChartCard';
import ReportTrendChart from '../components/ReportTrendChart';
import ReportBreakdownChart from '../components/ReportBreakdownChart';
import ReportTable from '../components/ReportTable';
import { useIncentiveReports } from '../hooks/useIncentiveReports';

const IncentiveReportsPage = () => {
  const [filters, setFilters] = useState({ period: 'this_month' });
  const { data, isLoading } = useIncentiveReports(filters);

  const bmHeaders = [
    { label: 'BM Name', key: 'name' },
    { label: 'District', key: 'district' },
    { label: 'Block', key: 'block' },
    { label: 'Enrollments', key: 'enrollments' },
    { label: 'Generated', key: 'generated', align: 'right' },
    { label: 'Paid', key: 'paid', align: 'right' },
    { label: 'Pending', key: 'pending', align: 'right' },
  ];

  return (
    <PageContainer>
      <PageHeader 
        title="Incentive Reports"
        subtitle="Analyze BM and DM productivity and incentive liability."
      />

      <div className="space-y-6">
        <ReportFilterBar 
          filters={filters} 
          onFilterChange={(f) => setFilters(prev => ({ ...prev, ...f }))}
          onReset={() => setFilters({ period: 'this_month' })}
          isLoading={isLoading}
        />

        <ReportMetricGrid cols={4}>
          {data?.summary.map((kpi, idx) => (
            <ReportSummaryCard key={idx} {...kpi} isLoading={isLoading} color="warning" />
          ))}
        </ReportMetricGrid>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <ReportChartCard title="BM vs DM Generation Trend" isLoading={isLoading}>
              <ReportTrendChart data={[{ name: 'Jan', bm: 45000, dm: 22000 }, { name: 'Feb', bm: 52000, dm: 26000 }, { name: 'Mar', bm: 61000, dm: 31000 }]} dataKey="bm" color="#f59e0b" />
            </ReportChartCard>
          </div>
          <ReportChartCard title="Payable vs Paid Distribution" isLoading={isLoading}>
             <ReportBreakdownChart data={[{ name: 'Paid', value: 75 }, { name: 'Pending', value: 25 }]} />
          </ReportChartCard>
        </div>

        <ReportTable 
          title="Top BM Performance Report"
          headers={bmHeaders}
          data={[
            { name: 'BM Rajesh Kumar', district: 'Patna', block: 'Block A', enrollments: 450, generated: 2250, paid: 1800, pending: 450 },
            { name: 'BM Anjali Singh', district: 'Gaya', block: 'Block C', enrollments: 320, generated: 1600, paid: 1600, pending: 0 },
          ]}
          isLoading={isLoading}
        />
      </div>
    </PageContainer>
  );
};

export default IncentiveReportsPage;
