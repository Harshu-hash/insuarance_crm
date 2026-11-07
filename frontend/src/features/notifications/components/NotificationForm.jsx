import React, { useState } from 'react';
import Input from '../../../components/ui/Input';
import Select from '../../../components/ui/Select';
import TextArea from '../../../components/ui/TextArea';
import Button from '../../../components/ui/Button';
import NotificationChannelSelector from './NotificationChannelSelector';
import NotificationAudienceSelector from './NotificationAudienceSelector';
import NotificationPreviewCard from './NotificationPreviewCard';
import { NOTIFICATION_TYPES, NOTIFICATION_PRIORITY } from '../constants/notification.constants';
import { useNotificationTemplates } from '../hooks/useNotificationTemplates';

const NotificationForm = ({ onSubmit, isSubmitting }) => {
  const { templates } = useNotificationTemplates();
  const [formData, setFormData] = useState({
    title: '',
    type: NOTIFICATION_TYPES.GENERAL_ANNOUNCEMENT,
    priority: NOTIFICATION_PRIORITY.NORMAL,
    channels: [],
    audience: { type: 'all_users', district: '', block: '', school: '' },
    message: '',
    detailedMessage: '',
    isScheduled: false,
    scheduledDate: '',
  });

  const handleApplyTemplate = (templateId) => {
    const template = templates.find(t => t.id === templateId);
    if (template) {
      setFormData(prev => ({
        ...prev,
        message: template.message,
        channels: template.channels,
      }));
    }
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      <div className="lg:col-span-2 space-y-8">
        {/* Section 1: Basic Info */}
        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">1. Basic Information</h3>
            <div className="flex items-center space-x-2">
               <label className="text-[10px] font-black text-slate-400 uppercase">Use Template</label>
               <Select className="h-8 py-0 text-xs w-48" onChange={(e) => handleApplyTemplate(e.target.value)}>
                  <option value="">Select a template...</option>
                  {templates.map(t => <option key={t.id} value={t.id}>{t.name}</option>)}
               </Select>
            </div>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Notification Title</label>
              <Input 
                placeholder="Internal campaign title..." 
                value={formData.title}
                onChange={(e) => setFormData({ ...formData, title: e.target.value })}
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
               <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Type</label>
                  <Select value={formData.type} onChange={(e) => setFormData({ ...formData, type: e.target.value })}>
                    {Object.entries(NOTIFICATION_TYPES).map(([k, v]) => (
                      <option key={v} value={v}>{v.replace('_', ' ').toUpperCase()}</option>
                    ))}
                  </Select>
               </div>
               <div>
                  <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Priority</label>
                  <Select value={formData.priority} onChange={(e) => setFormData({ ...formData, priority: e.target.value })}>
                    {Object.entries(NOTIFICATION_PRIORITY).map(([k, v]) => (
                      <option key={v} value={v}>{v.toUpperCase()}</option>
                    ))}
                  </Select>
               </div>
            </div>
          </div>
        </section>

        {/* Section 2: Channels */}
        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">2. Select Channels</h3>
          <NotificationChannelSelector 
            selectedChannels={formData.channels} 
            onChange={(channels) => setFormData({ ...formData, channels })} 
          />
        </section>

        {/* Section 3: Audience */}
        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">3. Target Audience</h3>
          <NotificationAudienceSelector 
            value={formData.audience} 
            onChange={(audience) => setFormData({ ...formData, audience })} 
          />
        </section>

        {/* Section 4: Content */}
        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm space-y-4">
          <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">4. Message Content</h3>
          <div className="space-y-4">
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Short Message (Push/SMS)</label>
              <TextArea 
                placeholder="Brief message for alerts..." 
                rows={2} 
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <p className="text-[9px] text-slate-400 font-bold uppercase mt-1">Chars: {formData.message.length} / 160 (SMS limit)</p>
            </div>
            <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Detailed Message (Email/In-App)</label>
              <TextArea 
                placeholder="Full content for email or dashboard alert..." 
                rows={6}
                value={formData.detailedMessage}
                onChange={(e) => setFormData({ ...formData, detailedMessage: e.target.value })}
              />
            </div>
          </div>
        </section>

        {/* Section 5: Scheduling */}
        <section className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex items-center justify-between">
           <div>
              <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest">5. Scheduling</h3>
              <p className="text-[10px] text-slate-400 font-bold uppercase mt-1">Choose when to dispatch this notification.</p>
           </div>
           <div className="flex items-center space-x-4">
              <Button 
                variant={!formData.isScheduled ? "primary" : "outline"} 
                size="sm" 
                onClick={() => setFormData({ ...formData, isScheduled: false })}
                className="text-[10px] font-black uppercase"
              >
                Send Now
              </Button>
              <Button 
                variant={formData.isScheduled ? "primary" : "outline"} 
                size="sm" 
                onClick={() => setFormData({ ...formData, isScheduled: true })}
                className="text-[10px] font-black uppercase"
              >
                Schedule Later
              </Button>
           </div>
        </section>

        <div className="flex justify-end space-x-4 pt-4">
           <Button variant="ghost" className="text-slate-400 uppercase font-black tracking-widest">Discard Draft</Button>
           <Button 
             variant="primary" 
             className="px-12 uppercase font-black tracking-widest shadow-lg shadow-primary/20"
             onClick={() => onSubmit(formData)}
             disabled={isSubmitting || formData.channels.length === 0 || !formData.title || !formData.message}
           >
             {isSubmitting ? 'Dispatching...' : formData.isScheduled ? 'Schedule Campaign' : 'Send Notification'}
           </Button>
        </div>
      </div>

      <div className="lg:col-span-1">
        <div className="sticky top-8">
           <NotificationPreviewCard data={formData} />
        </div>
      </div>
    </div>
  );
};

export default NotificationForm;
