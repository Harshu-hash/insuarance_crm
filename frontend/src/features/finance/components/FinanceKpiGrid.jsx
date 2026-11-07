import React from 'react';
import FinanceSummaryCard from './FinanceSummaryCard';

const FinanceKpiGrid = ({ data, isLoading }) => {
  const kpis = [
    { title: "Total Premium Collected", value: data?.totalPremiumCollected, icon: "Banknote", color: "primary" },
    { title: "This Month Collection", value: data?.thisMonthCollection, icon: "TrendingUp", color: "success" },
    { title: "Pending Collection", value: data?.pendingPremiumCollection, icon: "Clock", color: "warning" },
    { title: "Failed Transactions", value: data?.failedTransactions, icon: "AlertCircle", color: "danger", subtitle: "Needs manual review" },
    { title: "Receipts Pending", value: data?.receiptsPending, icon: "FileText", color: "warning" },
    { title: "BM Incentive Payable", value: data?.totalBMIncentivePayable, icon: "UserCheck", color: "primary" },
    { title: "DM Incentive Payable", value: data?.totalDMIncentivePayable, icon: "Users", color: "primary" },
    { title: "Incentives Paid", value: data?.incentivesPaid, icon: "CheckCircle2", color: "success" },
    { title: "Claim Payout Pending", value: data?.claimPayoutPending, icon: "Hospital", color: "warning" },
    { title: "Claim Payout Completed", value: data?.claimPayoutCompleted, icon: "ShieldCheck", color: "success" },
    { title: "Reconciliation Exceptions", value: data?.reconciliationExceptions, icon: "SearchX", color: "danger" },
    { title: "Net Operational Liability", value: data?.netOperationalLiability, icon: "Calculator", color: "primary" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
      {kpis.map((kpi, index) => (
        <FinanceSummaryCard 
          key={index}
          {...kpi}
          isLoading={isLoading}
        />
      ))}
    </div>
  );
};

export default FinanceKpiGrid;
