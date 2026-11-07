import React, { useState } from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import ReportFilterBar from '../components/ReportFilterBar';
import ReportSummaryCard from '../components/ReportSummaryCard';
import ReportMetricGrid from '../components/ReportMetricGrid';
import ReportChartCard from '../components/ReportChartCard';
import ReportBreakdownChart from '../components/ReportBreakdownChart';
import ReportTable from '../components/ReportTable';
import { usePolicyReports } from '../hooks/usePolicyReports';

const PolicyReportsPage = () => {
  const [filters, setFilters] = useState({ period: 'this_month' });
  const { data, isLoading } = usePolicyReports(filters);

  const policyHeaders = [
    { label: 'Policy Name', key: 'name' },
    { label: 'Policy Code', key: 'code' },
    { label: 'Year', key: 'year' },
    { label: 'Premium', key: 'premium', align: 'right' },
    { label: 'Enrollments', key: 'enrollments' },
    { label: 'Claims', key: 'claims' },
    { label: 'Net Collected', key: 'collected', align: 'right' },
  ];

  return (
    <PageContainer>
      <PageHeader 
        title="Policy Reports"
        subtitle="Analyze policy uptake, performance, and coverage efficiency."
      />

      <div className="space-y-6">
        <ReportFilterBar 
          filters={filters} 
          onFilterChange={(f) => setFilters(prev => ({ ...prev, ...f }))}
          onReset={() => setFilters({ period: 'this_month' })}
          isLoading={isLoading}
        />

        <ReportMetricGrid cols={4}>
          <ReportSummaryCard title="Total Policies" value={3} icon="Shield" />
          <ReportSummaryCard title="Active Policies" value={3} icon="CheckCircle2" color="success" />
          <ReportSummaryCard title="Most Popular" value="Standard Plan" icon="TrendingUp" color="primary" />
          <ReportSummaryCard title="Policy Revenue" value={57600000} icon="Banknote" color="success" />
        </ReportMetricGrid>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ReportChartCard title="Policy-wise Enrollment Usage" isLoading={isLoading}>
            <ReportBreakdownChart data={[{ name: 'Student Standard', value: 75 }, { name: 'Premium Plan', value: 15 }, { name: 'Basic Plan', value: 10 }]} />
          </ReportChartCard>
          <ReportChartCard title="Claims by Policy Type" isLoading={isLoading}>
            <ReportBreakdownChart data={[{ name: 'Student Standard', value: 85 }, { name: 'Premium Plan', value: 10 }, { name: 'Basic Plan', value: 5 }]} />
          </ReportChartCard>
        </div>

        <ReportTable 
          title="Policy Performance Summary"
          headers={policyHeaders}
          data={[
            { name: 'Student Standard Plan', code: 'STD-001', year: '2024-25', premium: 1500, enrollments: 34500, claims: 980, collected: 51750000 },
            { name: 'Premium Student Plan', code: 'PRM-001', year: '2024-25', premium: 2500, enrollments: 4200, claims: 150, collected: 10500000 },
          ]}
          isLoading={isLoading}
        />
      </div>
    </PageContainer>
  );
};

export default PolicyReportsPage;
