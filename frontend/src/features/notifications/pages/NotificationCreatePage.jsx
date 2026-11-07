import React from 'react';
import { useNavigate } from 'react-router-dom';
import PageContainer from '../../../components/admin/PageContainer';
import PageHeader from '../../../components/admin/PageHeader';
import Button from '../../../components/ui/Button';
import { ArrowLeft, Info } from 'lucide-react';
import NotificationForm from '../components/NotificationForm';
import { useCreateNotification } from '../hooks/useCreateNotification';

const NotificationCreatePage = () => {
  const navigate = useNavigate();
  const { createNotification, isSubmitting } = useCreateNotification();

  const handleSubmit = async (formData) => {
    try {
      await createNotification(formData);
      navigate('/admin/notifications');
    } catch (error) {
      console.error('Failed to dispatch notification:', error);
    }
  };

  return (
    <PageContainer>
      <div className="mb-6">
        <Button variant="ghost" size="sm" onClick={() => navigate(-1)} className="text-slate-500 font-black uppercase tracking-widest text-[10px] p-0 hover:bg-transparent">
          <ArrowLeft size={14} className="mr-2" /> Back to List
        </Button>
      </div>

      <PageHeader 
        title="Create Notification"
        subtitle="Compose and target a new operational message across multiple channels."
      />

      <div className="space-y-8">
         {/* Compliance/Guidance Banner */}
         <div className="bg-amber-50 border border-amber-100 p-4 rounded-2xl flex items-start space-x-4">
            <div className="p-2 bg-white rounded-xl text-amber-500 shadow-sm shrink-0">
               <Info size={18} />
            </div>
            <div>
               <h4 className="text-[10px] font-black text-amber-600 uppercase tracking-widest mb-1">Operational Guidance</h4>
               <p className="text-[11px] text-amber-800/80 font-medium leading-relaxed max-w-3xl">
                  Sending urgent or high-priority notifications to large audiences (e.g., all parents) may incur costs and should be used only for critical updates. Ensure that placeholders like student names are handled correctly if using custom segments.
               </p>
            </div>
         </div>

         <NotificationForm onSubmit={handleSubmit} isSubmitting={isSubmitting} />
      </div>
    </PageContainer>
  );
};

export default NotificationCreatePage;
