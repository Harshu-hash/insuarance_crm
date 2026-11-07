export const REPORT_TYPES = {
  OVERVIEW: 'overview',
  ENROLLMENT: 'enrollment',
  CLAIMS: 'claims',
  FINANCE: 'finance',
  INCENTIVES: 'incentives',
  GEOGRAPHY: 'geography',
  POLICIES: 'policies',
};

export const EXPORT_FORMATS = {
  CSV: 'csv',
  EXCEL: 'excel',
  PDF: 'pdf',
};

export const DATE_PRESETS = [
  { label: 'Today', value: 'today' },
  { label: 'Yesterday', value: 'yesterday' },
  { label: 'Last 7 Days', value: 'last_7_days' },
  { label: 'Last 30 Days', value: 'last_30_days' },
  { label: 'This Month', value: 'this_month' },
  { label: 'Last Month', value: 'last_month' },
  { label: 'Custom Range', value: 'custom' },
];

export const POLICY_YEARS = ['2023-24', '2024-25', '2025-26'];
