export const NAV_CONFIG = [
  {
    group: "Overview",
    items: [
      {
        label: "Dashboard",
        path: "/admin/dashboard",
        icon: "LayoutDashboard",
        permission: "dashboard.view",
      },
    ],
  },
  {
    group: "Management",
    items: [
      {
        label: "Districts",
        path: "/admin/districts",
        icon: "Map",
        permission: "districts.read",
      },
      {
        label: "Blocks",
        path: "/admin/blocks",
        icon: "Layers",
        permission: "blocks.read",
      },
      {
        label: "Schools",
        path: "/admin/schools",
        icon: "Building2",
        permission: "schools.read",
      },
      {
        label: "Managers",
        path: "/admin/managers",
        icon: "UserCog",
        permission: "managers.read",
      },
    ],
  },
  {
    group: "Policy Management",
    items: [
      {
        label: "Policies",
        path: "/admin/policies",
        icon: "Shield",
        permission: "policies.read",
      },
    ],
  },
  {
    group: "Operations",
    items: [
      {
        label: "Students",
        path: "/admin/students",
        icon: "Users",
        permission: "students.read",
      },
      {
        label: "Enrollments",
        path: "/admin/enrollments",
        icon: "FileCheck",
        permission: "enrollments.read",
      },
      {
        label: "Claims",
        path: "/admin/claims",
        icon: "ClipboardCheck",
        permission: "claims.read",
      },
      {
        label: "Finance",
        path: "/admin/finance",
        icon: "Banknote",
        permission: "finance.read",
        children: [
          { label: "Overview", path: "/admin/finance", permission: "finance.read" },
          { label: "Transactions", path: "/admin/finance/transactions", permission: "finance.transactions.read" },
          { label: "Incentives", path: "/admin/finance/incentives", permission: "finance.incentives.read" },
          { label: "Payouts", path: "/admin/finance/payouts", permission: "finance.payouts.read" },
          { label: "Reconciliation", path: "/admin/finance/reconciliation", permission: "finance.reconciliation.read" },
        ]
      },
      {
        label: "Incentives",
        path: "/admin/incentives",
        icon: "Gift",
        permission: "incentives.read",
        children: [
          { label: "Overview", path: "/admin/incentives", permission: "incentives.read" },
          { label: "Records", path: "/admin/incentives/records", permission: "incentives.read" },
          { label: "Rules", path: "/admin/incentives/rules", permission: "incentives.rules.read" },
          { label: "Performance", path: "/admin/incentives/performance", permission: "incentives.read" },
        ]
      },
      {
        label: "Reports",
        path: "/admin/reports",
        icon: "BarChart3",
        permission: "reports.read",
        children: [
          { label: "Overview", path: "/admin/reports", permission: "reports.read" },
          { label: "Enrollments", path: "/admin/reports/enrollment", permission: "reports.enrollment.read" },
          { label: "Claims", path: "/admin/reports/claims", permission: "reports.claims.read" },
          { label: "Finance", path: "/admin/reports/finance", permission: "reports.finance.read" },
          { label: "Incentives", path: "/admin/reports/incentives", permission: "reports.incentives.read" },
          { label: "Geography", path: "/admin/reports/geography", permission: "reports.geography.read" },
          { label: "Policies", path: "/admin/reports/policies", permission: "reports.policies.read" },
        ]
      },
      {
        label: "Notifications",
        path: "/admin/notifications",
        icon: "Bell",
        permission: "notifications.read",
        children: [
          { label: "Alert Logs", path: "/admin/notifications", permission: "notifications.read" },
          { label: "Send Alert", path: "/admin/notifications/create", permission: "notifications.create" },
          { label: "Templates", path: "/admin/notifications/templates", permission: "notifications.templates.read" },
        ]
      },
    ],
  },
  {
    group: "System",
    items: [
      {
        label: "Users",
        path: "/admin/users",
        icon: "Users",
        permission: "users.read",
      },
      {
        label: "Roles & Permissions",
        path: "/admin/roles",
        icon: "ShieldAlert",
        permission: "roles.read",
      },
      {
        label: "Audit Logs",
        path: "/admin/audit-logs",
        icon: "History",
        permission: "audit_logs.read",
      },
      {
        label: "Settings",
        path: "/admin/settings",
        icon: "Settings",
        permission: "settings.read",
      },
    ],
  },
];
