import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { Bell, Smartphone } from 'lucide-react';

const NotificationPreviewCard = ({ data }) => {
  return (
    <div className="space-y-6">
      <h3 className="text-xs font-black text-slate-800 uppercase tracking-widest mb-4">Device Preview</h3>
      
      {/* Mobile Push Preview */}
      <div className="relative mx-auto w-[280px] h-[580px] border-[10px] border-slate-900 rounded-[40px] shadow-2xl bg-slate-100 overflow-hidden">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-900 rounded-b-2xl z-20"></div>
        
        {/* Lock Screen Wallpaper Placeholder */}
        <div className="absolute inset-0 bg-gradient-to-br from-indigo-500 to-purple-600 opacity-80"></div>
        
        {/* Push Notification Card */}
        <div className="relative mt-24 px-4">
           <div className="bg-white/90 backdrop-blur-md rounded-2xl p-3 shadow-lg border border-white/20 animate-in fade-in slide-in-from-top-4 duration-500">
              <div className="flex items-center space-x-2 mb-2">
                 <div className="p-1 bg-primary rounded shadow-sm">
                    <Bell size={10} className="text-white" />
                 </div>
                 <span className="text-[10px] font-bold text-slate-500 uppercase tracking-tighter">Insurance App • Just Now</span>
              </div>
              <h4 className="text-[11px] font-black text-slate-800 line-clamp-1">
                {data.title || 'Notification Title'}
              </h4>
              <p className="text-[10px] text-slate-600 leading-tight mt-1 line-clamp-2">
                {data.message || 'The short notification message will appear here...'}
              </p>
           </div>
        </div>

        {/* Home Screen Bar */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 w-24 h-1 bg-white/40 rounded-full"></div>
      </div>

      <div className="text-center">
         <p className="text-[10px] text-slate-400 font-bold uppercase tracking-widest">Preview on iOS / Android</p>
      </div>
    </div>
  );
};

export default NotificationPreviewCard;
