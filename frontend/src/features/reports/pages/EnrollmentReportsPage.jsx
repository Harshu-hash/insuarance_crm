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
import { useEnrollmentReports } from '../hooks/useEnrollmentReports';

const EnrollmentReportsPage = () => {
  const [filters, setFilters] = useState({ period: 'this_month', policyYear: '2024-25' });
  const { data, isLoading } = useEnrollmentReports(filters);

  const tableHeaders = [
    { label: 'District', key: 'district' },
    { label: 'Blocks', key: 'blocks' },
    { label: 'Schools', key: 'schools' },
    { label: 'Total Students', key: 'students' },
    { label: 'Enrollments', key: 'enrollments' },
    { label: 'Active Policies', key: 'active' },
    { label: 'Premium Collected', key: 'premium', align: 'right' },
  ];

  return (
    <PageContainer>
      <PageHeader 
        title="Enrollment Reports"
        subtitle="Analyze student coverage and policy uptake across geographies."
      />

      <div className="space-y-6">
        <ReportFilterBar 
          filters={filters} 
          onFilterChange={(f) => setFilters(prev => ({ ...prev, ...f }))}
          onReset={() => setFilters({ period: 'this_month', policyYear: '2024-25' })}
          isLoading={isLoading}
        />

        <ReportMetricGrid cols={4}>
          {data?.summary.map((kpi, idx) => (
            <ReportSummaryCard key={idx} {...kpi} isLoading={isLoading} color="primary" />
          ))}
        </ReportMetricGrid>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ReportChartCard title="Monthly Enrollment Trend" isLoading={isLoading}>
            <ReportTrendChart data={data?.trends.monthly} dataKey="enrollments" />
          </ReportChartCard>
          <ReportChartCard title="District-wise Coverage" isLoading={isLoading}>
            <ReportTrendChart type="bar" data={data?.trends.district} color="#10b981" />
          </ReportChartCard>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-1">
            <ReportChartCard title="Class-wise Split" isLoading={isLoading}>
              <ReportBreakdownChart data={data?.trends.classBreakdown} />
            </ReportChartCard>
          </div>
          <div className="lg:col-span-2">
            <ReportTable 
              title="District Performance Summary"
              headers={tableHeaders}
              data={data?.tables.districts || []}
              isLoading={isLoading}
            />
          </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default EnrollmentReportsPage;
