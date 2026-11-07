import React from 'react';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { Plus, LayoutTemplate, Search, Copy, Edit, MoreVertical } from 'lucide-react';
import Input from '../../../components/ui/Input';
import { useNotificationTemplates } from '../hooks/useNotificationTemplates';
import { NotificationChannelBadge } from '../components/NotificationBadges';

const NotificationTemplatesPage = () => {
  const { templates, isLoading } = useNotificationTemplates();

  return (
    <PageContainer>
      <PageHeader 
        title="Message Templates"
        subtitle="Manage reusable notification templates with dynamic variables for automated messaging."
        actions={
          <Button variant="primary" size="sm">
            <Plus size={14} className="mr-2" /> Create Template
          </Button>
        }
      />

      <div className="space-y-6">
        {/* Templates Toolbar */}
        <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex items-center space-x-4">
           <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" size={14} />
              <Input placeholder="Search templates..." className="pl-9 h-9 text-xs" />
           </div>
           <div className="flex items-center space-x-2">
              <Button variant="outline" size="sm" className="h-9 font-bold text-[10px] uppercase">All Categories</Button>
              <Button variant="outline" size="sm" className="h-9 font-bold text-[10px] uppercase">Active Only</Button>
           </div>
        </div>

        {/* Templates Grid/Table */}
        <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
           <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                 <thead>
                    <tr className="bg-slate-50 border-b border-slate-100">
                       <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider">Template Name</th>
                       <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider">Category</th>
                       <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider">Channels</th>
                       <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider">Status</th>
                       <th className="px-6 py-3 text-[10px] font-black text-slate-400 uppercase tracking-wider text-right">Actions</th>
                    </tr>
                 </thead>
                 <tbody className="divide-y divide-slate-50">
                    {isLoading ? (
                       [1, 2, 3].map(i => <tr key={i} className="h-16 animate-pulse"></tr>)
                    ) : (
                       templates.map(tmpl => (
                          <tr key={tmpl.id} className="hover:bg-slate-50/50 transition-colors group">
                             <td className="px-6 py-4">
                                <div className="flex flex-col">
                                   <span className="text-xs font-black text-slate-800">{tmpl.name}</span>
                                   <span className="text-[10px] text-slate-400 font-bold uppercase mt-0.5">{tmpl.id}</span>
                                </div>
                             </td>
                             <td className="px-6 py-4">
                                <span className="text-[10px] font-black text-primary uppercase bg-primary/5 px-2 py-0.5 rounded">{tmpl.category}</span>
                             </td>
                             <td className="px-6 py-4">
                                <div className="flex gap-1">
                                   {tmpl.channels.map(c => <NotificationChannelBadge key={c} channel={c} />)}
                                </div>
                             </td>
                             <td className="px-6 py-4">
                                <span className="inline-flex items-center px-2 py-0.5 rounded text-[9px] font-black bg-success/10 text-success uppercase tracking-widest border border-success/20">Active</span>
                             </td>
                             <td className="px-6 py-4 text-right">
                                <div className="flex items-center justify-end space-x-1">
                                   <Button variant="ghost" size="sm" title="Edit Template">
                                      <Edit size={14} className="text-slate-400" />
                                   </Button>
                                   <Button variant="ghost" size="sm" title="Duplicate">
                                      <Copy size={14} className="text-slate-400" />
                                   </Button>
                                   <Button variant="ghost" size="sm">
                                      <MoreVertical size={14} className="text-slate-400" />
                                   </Button>
                                </div>
                             </td>
                          </tr>
                       ))
                    )}
                 </tbody>
              </table>
           </div>
        </div>

        {/* Variables Info */}
        <div className="bg-slate-50 p-6 rounded-2xl border border-dashed border-slate-200">
           <h4 className="text-[10px] font-black text-slate-500 uppercase tracking-widest mb-3 flex items-center">
              <LayoutTemplate size={12} className="mr-2" /> Global Variables
           </h4>
           <div className="flex flex-wrap gap-2">
              {['studentName', 'policyYear', 'claimId', 'paymentAmount', 'dueDate', 'schoolName', 'districtName'].map(v => (
                <code key={v} className="px-2 py-1 bg-white border border-slate-200 rounded text-[10px] text-primary font-black uppercase">
                   &#123;&#123;{v}&#125;&#125;
                </code>
              ))}
           </div>
           <p className="text-[10px] text-slate-400 font-bold uppercase mt-3 tracking-tighter italic">Variables are automatically replaced by the system at the time of delivery.</p>
        </div>
      </div>
    </PageContainer>
  );
};

export default NotificationTemplatesPage;
