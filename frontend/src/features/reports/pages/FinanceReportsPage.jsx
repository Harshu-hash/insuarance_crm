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
import { useFinanceReports } from '../hooks/useFinanceReports';

const FinanceReportsPage = () => {
  const [filters, setFilters] = useState({ period: 'this_month' });
  const { data, isLoading } = useFinanceReports(filters);

  const collectionHeaders = [
    { label: 'District', key: 'district' },
    { label: 'Block', key: 'block' },
    { label: 'School', key: 'school' },
    { label: 'Enrollments', key: 'enrollments' },
    { label: 'Premium Collected', key: 'collected', align: 'right' },
    { label: 'Pending', key: 'pending', align: 'right' },
    { label: 'Failed Txns', key: 'failed' },
  ];

  return (
    <PageContainer>
      <PageHeader 
        title="Finance Reports"
        subtitle="Track premium collections, liabilities, and reconciliation trends."
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
            <ReportSummaryCard key={idx} {...kpi} isLoading={isLoading} color="success" />
          ))}
        </ReportMetricGrid>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ReportChartCard title="Collection Mode Breakdown" isLoading={isLoading}>
            <ReportBreakdownChart data={data?.trends.modes} />
          </ReportChartCard>
          <ReportChartCard title="Premium Collection Trend" isLoading={isLoading}>
            <ReportTrendChart data={[{ name: 'W1', value: 1200000 }, { name: 'W2', value: 1500000 }, { name: 'W3', value: 1800000 }, { name: 'W4', value: 2200000 }]} color="#10b981" />
          </ReportChartCard>
        </div>

        <ReportTable 
          title="Regional Collection Analysis"
          headers={collectionHeaders}
          data={[
            { district: 'Patna', block: 'Block A', school: 'School X', enrollments: 125, collected: 187500, pending: 15000, failed: 2 },
            { district: 'Patna', block: 'Block B', school: 'School Y', enrollments: 98, collected: 147000, pending: 8000, failed: 1 },
          ]}
          isLoading={isLoading}
        />
      </div>
    </PageContainer>
  );
};

export default FinanceReportsPage;
