import React, { Suspense, lazy } from 'react';
import { createBrowserRouter, RouterProvider, Navigate, Outlet } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { PublicRoute, ProtectedRoute } from './RouteGuards';
import AdminLayout from '../../modules/admin/layouts/AdminLayout';
import Button from '../../components/ui/Button';

// Lazy loading pages
const LoginPage = lazy(() => import('../../modules/admin/pages/auth/LoginPage'));
const DashboardPage = lazy(() => import('../../features/dashboard/pages/DashboardPage'));
const UnauthorizedPage = lazy(() => import('../../modules/admin/pages/UnauthorizedPage'));
const NotFoundPage = lazy(() => import('../../pages/NotFoundPage'));

// Users Module Pages
const UsersListPage = lazy(() => import('../../features/users/pages/UsersListPage'));
const UserDetailsPage = lazy(() => import('../../features/users/pages/UserDetailsPage'));
const UserCreatePage = lazy(() => import('../../features/users/pages/UserCreatePage'));
const UserEditPage = lazy(() => import('../../features/users/pages/UserEditPage'));

// Roles Module Pages
const RolesListPage = lazy(() => import('../../features/roles/pages/RolesListPage'));
const RoleDetailsPage = lazy(() => import('../../features/roles/pages/RoleDetailsPage'));
const RoleCreatePage = lazy(() => import('../../features/roles/pages/RoleCreatePage'));
const RoleEditPage = lazy(() => import('../../features/roles/pages/RoleEditPage'));

// Districts Module Pages
const DistrictsListPage = lazy(() => import('../../features/districts/pages/DistrictsListPage'));
const DistrictDetailsPage = lazy(() => import('../../features/districts/pages/DistrictDetailsPage'));
const DistrictCreatePage = lazy(() => import('../../features/districts/pages/DistrictCreatePage'));
const DistrictEditPage = lazy(() => import('../../features/districts/pages/DistrictEditPage'));

// Blocks Module Pages
const BlocksListPage = lazy(() => import('../../features/blocks/pages/BlocksListPage'));
const BlockDetailsPage = lazy(() => import('../../features/blocks/pages/BlockDetailsPage'));
const BlockCreatePage = lazy(() => import('../../features/blocks/pages/BlockCreatePage'));
const BlockEditPage = lazy(() => import('../../features/blocks/pages/BlockEditPage'));

// Schools Module Pages
const SchoolsListPage = lazy(() => import('../../features/schools/pages/SchoolsListPage'));
const SchoolDetailsPage = lazy(() => import('../../features/schools/pages/SchoolDetailsPage'));
const SchoolCreatePage = lazy(() => import('../../features/schools/pages/SchoolCreatePage'));
const SchoolEditPage = lazy(() => import('../../features/schools/pages/SchoolEditPage'));

// Students Module Pages
const StudentsListPage = lazy(() => import('../../features/students/pages/StudentsListPage'));
const StudentDetailsPage = lazy(() => import('../../features/students/pages/StudentDetailsPage'));
const StudentEditPage = lazy(() => import('../../features/students/pages/StudentEditPage'));

// Enrollments Module Pages
const EnrollmentsListPage = lazy(() => import('../../features/enrollments/pages/EnrollmentsListPage'));
const EnrollmentDetailsPage = lazy(() => import('../../features/enrollments/pages/EnrollmentDetailsPage'));

// Policies Module Pages
const PoliciesListPage = lazy(() => import('../../features/policies/pages/PoliciesListPage'));
const PolicyCreatePage = lazy(() => import('../../features/policies/pages/PolicyCreatePage'));
const PolicyDetailsPage = lazy(() => import('../../features/policies/pages/PolicyDetailsPage'));
const PolicyEditPage = lazy(() => import('../../features/policies/pages/PolicyEditPage'));

// Claims Module Pages
const ClaimsListPage = lazy(() => import('../../features/claims/pages/ClaimsListPage'));
const ClaimDetailsPage = lazy(() => import('../../features/claims/pages/ClaimDetailsPage'));
const ClaimReviewPage = lazy(() => import('../../features/claims/pages/ClaimReviewPage'));

// Finance Module Pages
const FinanceOverviewPage = lazy(() => import('../../features/finance/pages/FinanceOverviewPage'));
const TransactionsPage = lazy(() => import('../../features/finance/pages/TransactionsPage'));
const FinanceIncentivesPage = lazy(() => import('../../features/finance/pages/FinanceIncentivesPage'));
const PayoutsPage = lazy(() => import('../../features/finance/pages/PayoutsPage'));
const ReconciliationPage = lazy(() => import('../../features/finance/pages/ReconciliationPage'));

// Incentives Module Pages
const IncentivesOverviewPage = lazy(() => import('../../features/incentives/pages/IncentivesOverviewPage'));
const IncentiveRecordsPage = lazy(() => import('../../features/incentives/pages/IncentiveRecordsPage'));
const IncentiveRulesPage = lazy(() => import('../../features/incentives/pages/IncentiveRulesPage'));
const IncentivePerformancePage = lazy(() => import('../../features/incentives/pages/IncentivePerformancePage'));
const IncentiveDetailsPage = lazy(() => import('../../features/incentives/pages/IncentiveDetailsPage'));

// Reports Module Pages
const ReportsOverviewPage = lazy(() => import('../../features/reports/pages/ReportsOverviewPage'));
const EnrollmentReportsPage = lazy(() => import('../../features/reports/pages/EnrollmentReportsPage'));
const ClaimsReportsPage = lazy(() => import('../../features/reports/pages/ClaimsReportsPage'));
const FinanceReportsPage = lazy(() => import('../../features/reports/pages/FinanceReportsPage'));
const IncentiveReportsPage = lazy(() => import('../../features/reports/pages/IncentiveReportsPage'));
const GeographyReportsPage = lazy(() => import('../../features/reports/pages/GeographyReportsPage'));
const PolicyReportsPage = lazy(() => import('../../features/reports/pages/PolicyReportsPage'));

// Notifications Module Pages
const NotificationsListPage = lazy(() => import('../../features/notifications/pages/NotificationsListPage'));
const NotificationCreatePage = lazy(() => import('../../features/notifications/pages/NotificationCreatePage'));
const NotificationTemplatesPage = lazy(() => import('../../features/notifications/pages/NotificationTemplatesPage'));
const NotificationDetailsPage = lazy(() => import('../../features/notifications/pages/NotificationDetailsPage'));

// Audit Logs Module Pages
const AuditLogsPage = lazy(() => import('../../features/audit/pages/AuditLogsPage'));
const AuditLogDetailsPage = lazy(() => import('../../features/audit/pages/AuditLogDetailsPage'));

import PageContainer from '../../components/admin/PageContainer';
import PageHeader from '../../components/admin/PageHeader';

// Simple placeholder for other routes
const Placeholder = ({ title }) => (
  <PageContainer>
    <PageHeader title={title} subtitle={`Management portal for ${title.toLowerCase()}`} />
    <div className="p-8 bg-white rounded-2xl border border-dashed border-slate-200 flex items-center justify-center min-h-[400px] shadow-sm">
      <div className="text-center">
        <div className="h-16 w-16 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-4">
          <Settings className="h-8 w-8 text-slate-300 animate-spin-slow" />
        </div>
        <h2 className="text-xl font-bold text-text-primary">{title} Module</h2>
        <p className="text-text-secondary mt-2 max-w-xs mx-auto">This functional module is currently under development in Phase 4.</p>
        <div className="mt-6">
          <Button variant="outline" size="sm" onClick={() => window.history.back()}>
            Go Back
          </Button>
        </div>
      </div>
    </div>
  </PageContainer>
);

const router = createBrowserRouter([
  {
    path: '/',
    element: <Navigate to="/admin/dashboard" replace />,
  },
  {
    path: '/admin',
    children: [
      {
        element: <PublicRoute />,
        children: [
          {
            path: 'login',
            element: (
              <Suspense fallback={<div className="h-screen w-full flex items-center justify-center">Loading...</div>}>
                <LoginPage />
              </Suspense>
            ),
          },
        ],
      },
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <AdminLayout />,
            children: [
              {
                path: 'dashboard',
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <DashboardPage />
                  </Suspense>
                ),
              },
              {
                path: 'unauthorized',
                element: (
                  <Suspense fallback={<div>Loading...</div>}>
                    <UnauthorizedPage />
                  </Suspense>
                ),
              },
              {
                path: 'districts',
                children: [
                  { index: true, element: <Suspense fallback={<div className="p-8">Loading...</div>}><DistrictsListPage /></Suspense> },
                  { path: 'create', element: <Suspense fallback={<div className="p-8">Loading...</div>}><DistrictCreatePage /></Suspense> },
                  { path: ':id', element: <Suspense fallback={<div className="p-8">Loading...</div>}><DistrictDetailsPage /></Suspense> },
                  { path: ':id/edit', element: <Suspense fallback={<div className="p-8">Loading...</div>}><DistrictEditPage /></Suspense> },
                ]
              },
              {
                path: 'blocks',
                children: [
                   { index: true, element: <Suspense fallback={<div className="p-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Loading Blocks Inventory...</div>}><BlocksListPage /></Suspense> },
                   { path: 'create', element: <Suspense fallback={<div className="p-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Initializing Block...</div>}><BlockCreatePage /></Suspense> },
                   { path: ':id', element: <Suspense fallback={<div className="p-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Opening Dashboard...</div>}><BlockDetailsPage /></Suspense> },
                   { path: ':id/edit', element: <Suspense fallback={<div className="p-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Loading Configuration...</div>}><BlockEditPage /></Suspense> },
                ]
              },
              {
                path: 'managers',
                element: <Placeholder title="Managers" />,
              },
              {
                path: 'finance',
                children: [
                  { index: true, element: <Suspense fallback={<div className="p-8">Loading Overview...</div>}><FinanceOverviewPage /></Suspense> },
                  { path: 'transactions', element: <Suspense fallback={<div className="p-8">Loading Transactions...</div>}><TransactionsPage /></Suspense> },
                  { path: 'incentives', element: <Suspense fallback={<div className="p-8">Loading Incentives...</div>}><FinanceIncentivesPage /></Suspense> },
                  { path: 'payouts', element: <Suspense fallback={<div className="p-8">Loading Payouts...</div>}><PayoutsPage /></Suspense> },
                  { path: 'reconciliation', element: <Suspense fallback={<div className="p-8">Loading Reconciliation...</div>}><ReconciliationPage /></Suspense> },
                ]
              },
              {
                path: 'incentives',
                children: [
                  { index: true, element: <Suspense fallback={<div className="p-8">Loading Overview...</div>}><IncentivesOverviewPage /></Suspense> },
                  { path: 'records', element: <Suspense fallback={<div className="p-8">Loading Records...</div>}><IncentiveRecordsPage /></Suspense> },
                  { path: 'rules', element: <Suspense fallback={<div className="p-8">Loading Rules...</div>}><IncentiveRulesPage /></Suspense> },
                  { path: 'performance', element: <Suspense fallback={<div className="p-8">Loading Performance...</div>}><IncentivePerformancePage /></Suspense> },
                  { path: ':id', element: <Suspense fallback={<div className="p-8">Loading Details...</div>}><IncentiveDetailsPage /></Suspense> },
                ]
              },
              {
                path: 'reports',
                children: [
                  { index: true, element: <Suspense fallback={<div className="p-8">Loading Overview...</div>}><ReportsOverviewPage /></Suspense> },
                  { path: 'enrollment', element: <Suspense fallback={<div className="p-8">Loading Enrollments...</div>}><EnrollmentReportsPage /></Suspense> },
                  { path: 'claims', element: <Suspense fallback={<div className="p-8">Loading Claims...</div>}><ClaimsReportsPage /></Suspense> },
                  { path: 'finance', element: <Suspense fallback={<div className="p-8">Loading Finance...</div>}><FinanceReportsPage /></Suspense> },
                  { path: 'incentives', element: <Suspense fallback={<div className="p-8">Loading Incentives...</div>}><IncentiveReportsPage /></Suspense> },
                  { path: 'geography', element: <Suspense fallback={<div className="p-8">Loading Geography...</div>}><GeographyReportsPage /></Suspense> },
                  { path: 'policies', element: <Suspense fallback={<div className="p-8">Loading Policies...</div>}><PolicyReportsPage /></Suspense> },
                ]
              },
              {
                path: 'notifications',
                children: [
                  { index: true, element: <Suspense fallback={<div className="p-8">Loading...</div>}><NotificationsListPage /></Suspense> },
                  { path: 'create', element: <Suspense fallback={<div className="p-8">Loading...</div>}><NotificationCreatePage /></Suspense> },
                  { path: 'templates', element: <Suspense fallback={<div className="p-8">Loading...</div>}><NotificationTemplatesPage /></Suspense> },
                  { path: ':id', element: <Suspense fallback={<div className="p-8">Loading...</div>}><NotificationDetailsPage /></Suspense> },
                ]
              },
              {
                path: 'policies',
                children: [
                  { index: true, element: <Suspense fallback={<div className="p-8">Loading...</div>}><PoliciesListPage /></Suspense> },
                  { path: 'create', element: <Suspense fallback={<div className="p-8">Loading...</div>}><PolicyCreatePage /></Suspense> },
                  { path: ':id', element: <Suspense fallback={<div className="p-8">Loading...</div>}><PolicyDetailsPage /></Suspense> },
                  { path: ':id/edit', element: <Suspense fallback={<div className="p-8">Loading...</div>}><PolicyEditPage /></Suspense> },
                ]
              },
              {
                path: 'enrollments',
                children: [
                  { index: true, element: <Suspense fallback={<div className="p-8">Loading...</div>}><EnrollmentsListPage /></Suspense> },
                  { path: ':id', element: <Suspense fallback={<div className="p-8">Loading...</div>}><EnrollmentDetailsPage /></Suspense> },
                ]
              },
              {
                path: 'students',
                children: [
                   { index: true, element: <Suspense fallback={<div className="p-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Loading Student Registry...</div>}><StudentsListPage /></Suspense> },
                   { path: ':id', element: <Suspense fallback={<div className="p-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Opening Profile Dashboard...</div>}><StudentDetailsPage /></Suspense> },
                   { path: ':id/edit', element: <Suspense fallback={<div className="p-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Loading Maintenance Record...</div>}><StudentEditPage /></Suspense> },
                ]
              },
              {
                path: 'schools',
                children: [
                   { index: true, element: <Suspense fallback={<div className="p-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Loading Schools Inventory...</div>}><SchoolsListPage /></Suspense> },
                   { path: 'create', element: <Suspense fallback={<div className="p-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Initializing School...</div>}><SchoolCreatePage /></Suspense> },
                   { path: ':id', element: <Suspense fallback={<div className="p-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Opening Dashboard...</div>}><SchoolDetailsPage /></Suspense> },
                   { path: ':id/edit', element: <Suspense fallback={<div className="p-8 text-center text-xs font-bold uppercase tracking-widest text-slate-400">Loading Profile...</div>}><SchoolEditPage /></Suspense> },
                ]
              },
              {
                path: 'claims',
                children: [
                  { index: true, element: <Suspense fallback={<div className="p-8">Loading...</div>}><ClaimsListPage /></Suspense> },
                  { path: ':id', element: <Suspense fallback={<div className="p-8">Loading...</div>}><ClaimDetailsPage /></Suspense> },
                  { path: ':id/review', element: <Suspense fallback={<div className="p-8">Loading...</div>}><ClaimReviewPage /></Suspense> },
                ]
              },
              {
                path: 'users',
                children: [
                  { index: true, element: <Suspense fallback={<div className="p-8">Loading...</div>}><UsersListPage /></Suspense> },
                  { path: 'create', element: <Suspense fallback={<div className="p-8">Loading...</div>}><UserCreatePage /></Suspense> },
                  { path: ':id', element: <Suspense fallback={<div className="p-8">Loading...</div>}><UserDetailsPage /></Suspense> },
                  { path: ':id/edit', element: <Suspense fallback={<div className="p-8">Loading...</div>}><UserEditPage /></Suspense> },
                ]
              },
              {
                path: 'roles',
                children: [
                  { index: true, element: <Suspense fallback={<div className="p-8">Loading...</div>}><RolesListPage /></Suspense> },
                  { path: 'create', element: <Suspense fallback={<div className="p-8">Loading...</div>}><RoleCreatePage /></Suspense> },
                  { path: ':id', element: <Suspense fallback={<div className="p-8">Loading...</div>}><RoleDetailsPage /></Suspense> },
                  { path: ':id/edit', element: <Suspense fallback={<div className="p-8">Loading...</div>}><RoleEditPage /></Suspense> },
                ]
              },
              {
                path: 'audit-logs',
                children: [
                  { index: true, element: <Suspense fallback={<div className="p-8">Loading Audit Logs...</div>}><AuditLogsPage /></Suspense> },
                  { path: ':id', element: <Suspense fallback={<div className="p-8">Loading Details...</div>}><AuditLogDetailsPage /></Suspense> },
                ]
              },
              {
                path: 'settings',
                element: <Placeholder title="Settings" />,
              },
            ],
          },
        ],
      },
    ],
  },
  {
    path: '*',
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <NotFoundPage />
      </Suspense>
    ),
  },
]);

const AppRouter = () => {
  return <RouterProvider router={router} />;
};

export default AppRouter;
