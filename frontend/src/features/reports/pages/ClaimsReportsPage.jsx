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
import { useClaimsReports } from '../hooks/useClaimsReports';

const ClaimsReportsPage = () => {
  const [filters, setFilters] = useState({ period: 'this_month' });
  const { data, isLoading } = useClaimsReports(filters);

  const tableHeaders = [
    { label: 'District', key: 'district' },
    { label: 'Total Claims', key: 'total' },
    { label: 'Approved', key: 'approved' },
    { label: 'Rejected', key: 'rejected' },
    { label: 'Approval Rate', key: 'rate' },
    { label: 'Payout Pending', key: 'pending', align: 'right' },
    { label: 'Payout Done', key: 'paid', align: 'right' },
  ];

  const agingHeaders = [
    { label: 'Claim ID', key: 'id' },
    { label: 'Student', key: 'student' },
    { label: 'Status', key: 'status' },
    { label: 'Days Pending', key: 'days' },
    { label: 'Reviewer', key: 'reviewer' },
  ];

  return (
    <PageContainer>
      <PageHeader 
        title="Claims Reports"
        subtitle="Monitor claim lifecycle, approval rates, and payout status."
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
            <ReportSummaryCard key={idx} {...kpi} isLoading={isLoading} color="danger" />
          ))}
        </ReportMetricGrid>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <ReportChartCard title="Status Distribution" isLoading={isLoading}>
            <ReportBreakdownChart data={data?.trends.status} />
          </ReportChartCard>
          <div className="lg:col-span-2">
            <ReportChartCard title="Claims Trend (Appr vs Rej)" isLoading={isLoading}>
              <ReportTrendChart data={data?.trends.monthly} dataKey="approved" />
            </ReportChartCard>
          </div>
        </div>

        <ReportTable 
          title="District Claims Analytics"
          headers={tableHeaders}
          data={[
            { district: 'Patna', total: 450, approved: 320, rejected: 80, rate: '71%', pending: 450000, paid: 2500000 },
            { district: 'Gaya', total: 320, approved: 210, rejected: 60, rate: '65%', pending: 320000, paid: 1800000 },
          ]}
          isLoading={isLoading}
        />
      </div>
    </PageContainer>
  );
};

export default ClaimsReportsPage;
