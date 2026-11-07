import React, { useState } from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import ReportFilterBar from '../components/ReportFilterBar';
import ReportSummaryCard from '../components/ReportSummaryCard';
import ReportMetricGrid from '../components/ReportMetricGrid';
import ReportChartCard from '../components/ReportChartCard';
import ReportTrendChart from '../components/ReportTrendChart';
import ReportTable from '../components/ReportTable';
import { useGeographyReports } from '../hooks/useGeographyReports';
import Badge from '../../../components/ui/Badge';

const GeographyReportsPage = () => {
  const [filters, setFilters] = useState({ period: 'this_month' });
  const { data, isLoading } = useGeographyReports(filters);

  const districtHeaders = [
    { label: 'District', key: 'name' },
    { label: 'Student Target', key: 'students' },
    { label: 'Actual Enrollments', key: 'enrollments' },
    { label: 'Enrollment Rate', key: 'enrollmentRate', render: (val) => `${val}%` },
    { 
      label: 'Performance', 
      key: 'status',
      render: (val) => (
        <Badge variant={val === 'high' ? 'success' : val === 'medium' ? 'warning' : 'danger'} className="uppercase text-[9px]">
          {val}
        </Badge>
      )
    },
  ];

  return (
    <PageContainer>
      <PageHeader 
        title="Geography Reports"
        subtitle="Compare performance across districts, blocks, and individual schools."
      />

      <div className="space-y-6">
        <ReportFilterBar 
          filters={filters} 
          onFilterChange={(f) => setFilters(prev => ({ ...prev, ...f }))}
          onReset={() => setFilters({ period: 'this_month' })}
          isLoading={isLoading}
        />

        <ReportMetricGrid cols={6}>
          <ReportSummaryCard title="Districts" value={12} icon="Map" />
          <ReportSummaryCard title="Active Blocks" value={85} icon="Users" />
          <ReportSummaryCard title="Total Schools" value={450} icon="Building2" />
          <ReportSummaryCard title="High Activity" value={8} icon="TrendingUp" color="success" />
          <ReportSummaryCard title="Low Activity" value={2} icon="TrendingDown" color="danger" />
          <ReportSummaryCard title="Zero Enrollment" value={15} icon="AlertCircle" color="danger" subtitle="Schools" />
        </ReportMetricGrid>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ReportChartCard title="Regional Enrollment Comparison" isLoading={isLoading}>
            <ReportTrendChart type="bar" data={data?.districts.map(d => ({ name: d.name, value: d.enrollmentRate }))} dataKey="value" color="#2563eb" />
          </ReportChartCard>
          <ReportChartCard title="Block Activity Spread" isLoading={isLoading}>
            <ReportTrendChart type="bar" data={[{ name: 'Block A', v: 450 }, { name: 'Block B', v: 380 }, { name: 'Block C', v: 420 }]} dataKey="v" color="#8b5cf6" />
          </ReportChartCard>
        </div>

        <ReportTable 
          title="District Performance Leaderboard"
          headers={districtHeaders}
          data={data?.districts || []}
          isLoading={isLoading}
        />
      </div>
    </PageContainer>
  );
};

export default GeographyReportsPage;
