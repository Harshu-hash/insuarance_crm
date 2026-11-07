import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import { Plus, RefreshCw, Download, Search, Filter, LayoutTemplate } from 'lucide-react';
import NotificationTable from '../components/NotificationTable';
import NotificationSummaryCard from '../components/NotificationSummaryCard';
import { useNotificationsList } from '../hooks/useNotificationsList';
import { NOTIFICATION_TYPES, NOTIFICATION_STATUS } from '../constants/notification.constants';

const NotificationsListPage = () => {
  const navigate = useNavigate();
  const { data, total, isLoading, params, updateParams, refetch } = useNotificationsList();

  return (
    <PageContainer>
      <PageHeader 
        title="Notifications"
        subtitle="Manage operational messages, alerts, reminders, and announcements."
        actions={
          <div className="flex items-center space-x-3">
            <Button variant="outline" size="sm" onClick={() => navigate('/admin/notifications/templates')}>
              <LayoutTemplate size={14} className="mr-2" /> Templates
            </Button>
            <Button variant="primary" size="sm" onClick={() => navigate('/admin/notifications/create')}>
              <Plus size={14} className="mr-2" /> Create Notification
            </Button>
          </div>
        }
      />

      <div className="space-y-6">
        {/* KPI Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
           <NotificationSummaryCard title="Total" value={total} icon="Bell" />
           <NotificationSummaryCard title="Sent" value={384} icon="Send" color="success" />
           <NotificationSummaryCard title="Scheduled" value={12} icon="Calendar" color="info" />
           <NotificationSummaryCard title="Failed" value={5} icon="AlertCircle" color="danger" />
           <NotificationSummaryCard title="In-App" value={210} icon="Smartphone" color="primary" />
        </div>

        {/* Filters Bar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-wrap gap-4 items-end">
           <div className="flex-1 min-w-[200px]">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Search Message</label>
              <div className="relative">
                 <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
                 <Input 
                   placeholder="Title or message content..." 
                   className="pl-9 h-9 text-xs" 
                   value={params.search || ''}
                   onChange={(e) => updateParams({ search: e.target.value })}
                 />
              </div>
           </div>
           <div className="w-40">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Type</label>
              <Select className="h-9 text-xs" value={params.type || ''} onChange={(e) => updateParams({ type: e.target.value })}>
                 <option value="">All Types</option>
                 {Object.values(NOTIFICATION_TYPES).map(v => <option key={v} value={v}>{v.replace('_', ' ').toUpperCase()}</option>)}
              </Select>
           </div>
           <div className="w-40">
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Status</label>
              <Select className="h-9 text-xs" value={params.status || ''} onChange={(e) => updateParams({ status: e.target.value })}>
                 <option value="">All Statuses</option>
                 {Object.values(NOTIFICATION_STATUS).map(v => <option key={v} value={v}>{v.toUpperCase()}</option>)}
              </Select>
           </div>
           <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="h-9 px-4 font-bold text-[10px] uppercase" onClick={refetch}>
                 <RefreshCw size={14} className={isLoading ? 'animate-spin' : ''} />
              </Button>
              <Button variant="outline" size="sm" className="h-9 px-4 font-bold text-[10px] uppercase tracking-widest border-primary text-primary hover:bg-primary/5">
                 <Download size={14} className="mr-2" /> Export
              </Button>
           </div>
        </div>

        {/* Results Table */}
        <NotificationTable data={data} isLoading={isLoading} />

        {/* Pagination */}
        <div className="flex items-center justify-between bg-white p-4 rounded-xl border border-slate-200">
           <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">
              Showing <span className="text-slate-800">{data.length}</span> of <span className="text-slate-800">{total}</span> notifications
           </p>
           <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" disabled={params.page === 1} onClick={() => updateParams({ page: params.page - 1 })}>Previous</Button>
              <Button variant="outline" size="sm" disabled={data.length < params.limit} onClick={() => updateParams({ page: params.page + 1 })}>Next</Button>
           </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default NotificationsListPage;
