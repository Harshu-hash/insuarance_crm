import React from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { ArrowLeft, Copy, RotateCcw, XCircle, Users, Layout, MapPin } from 'lucide-react';
import { useNotificationDetails } from '../hooks/useNotificationDetails';
import { NotificationStatusBadge, NotificationTypeBadge, NotificationChannelBadge } from '../components/NotificationBadges';
import NotificationDeliveryCard from '../components/NotificationDeliveryCard';
import NotificationTimelineCard from '../components/NotificationTimelineCard';

const NotificationDetailsPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { data: notification, isLoading } = useNotificationDetails(id);

  if (isLoading) {
    return (
      <PageContainer>
        <div className="h-8 w-32 bg-slate-100 animate-pulse mb-6 rounded"></div>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2 space-y-6">
            <div className="h-64 bg-slate-50 animate-pulse rounded-2xl"></div>
          </div>
          <div className="space-y-6">
            <div className="h-48 bg-slate-50 animate-pulse rounded-2xl"></div>
          </div>
        </div>
      </PageContainer>
    );
  }

  return (
    <PageContainer>
      <div className="mb-6">
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="text-slate-500 font-black uppercase tracking-widest text-[10px] p-0">
          <ArrowLeft size={14} className="mr-2" /> Back to Notifications
        </Button>
      </div>

      <PageHeader 
        title={notification.title}
        subtitle={`Campaign ${notification.id} tracking and delivery logs.`}
        actions={
          <div className="flex items-center space-x-3">
             {notification.status === 'scheduled' && (
                <Button variant="outline" size="sm" className="text-danger border-danger/20 hover:bg-danger/5">
                   <XCircle size={14} className="mr-2" /> Cancel Campaign
                </Button>
             )}
             <Button variant="outline" size="sm">
               <Copy size={14} className="mr-2" /> Duplicate
             </Button>
             <Button variant="primary" size="sm">
               <RotateCcw size={14} className="mr-2" /> Resend Notification
             </Button>
          </div>
        }
      >
        <div className="flex items-center space-x-3 mt-3">
           <NotificationStatusBadge status={notification.status} />
           <NotificationTypeBadge type={notification.type} />
           <div className="flex gap-1">
              {notification.channels.map(c => <NotificationChannelBadge key={c} channel={c} />)}
           </div>
        </div>
      </PageHeader>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
           {/* Message Content */}
           <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Message Content</h4>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 mb-6">
                 <p className="text-xs font-black text-slate-800 mb-2 uppercase tracking-tight">Short Alert (Push/SMS)</p>
                 <p className="text-sm text-slate-600 font-medium leading-relaxed">{notification.message}</p>
              </div>
              {notification.detailedMessage && (
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                   <p className="text-xs font-black text-slate-800 mb-2 uppercase tracking-tight">Detailed Content (Email/In-App)</p>
                   <p className="text-sm text-slate-600 font-medium leading-relaxed whitespace-pre-wrap">{notification.detailedMessage}</p>
                </div>
              )}
           </div>

           {/* Audience Analysis */}
           <div className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm">
              <h4 className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-4">Target Audience</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                 <div className="flex items-start space-x-4">
                    <div className="p-3 bg-primary/5 text-primary rounded-xl">
                       <Users size={20} />
                    </div>
                    <div>
                       <span className="text-[10px] font-black text-slate-400 uppercase block tracking-widest">Audience Segment</span>
                       <span className="text-sm font-black text-slate-800 uppercase tracking-tight">{notification.audience?.replace('_', ' ')}</span>
                    </div>
                 </div>
                 {notification.district && (
                    <div className="flex items-start space-x-4">
                       <div className="p-3 bg-success/5 text-success rounded-xl">
                          <MapPin size={20} />
                       </div>
                       <div>
                          <span className="text-[10px] font-black text-slate-400 uppercase block tracking-widest">Location Filter</span>
                          <span className="text-sm font-black text-slate-800">{notification.district} District</span>
                       </div>
                    </div>
                 )}
              </div>
           </div>
        </div>

        <div className="space-y-8">
           {/* Delivery Status */}
           <div className="space-y-4">
              <h4 className="text-[10px] font-black text-slate-800 uppercase tracking-widest px-1">Delivery Analytics</h4>
              <NotificationDeliveryCard stats={notification.deliveryStats} />
           </div>

           {/* Timeline */}
           <NotificationTimelineCard notification={notification} />

           {/* Export Action */}
           <div className="p-4 bg-slate-900 rounded-2xl text-center">
              <Layout size={24} className="text-slate-700 mx-auto mb-3" />
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest mb-4 px-4">Download detailed delivery logs with per-user status.</p>
              <Button variant="outline" className="w-full text-white border-slate-700 hover:bg-slate-800 text-[10px] uppercase font-black tracking-widest">
                 Export Delivery Logs
              </Button>
           </div>
        </div>
      </div>
    </PageContainer>
  );
};

export default NotificationDetailsPage;
