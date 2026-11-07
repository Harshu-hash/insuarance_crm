import React from 'react';
import Card from '../../../components/ui/Card';
import { User, Shield, Monitor, MapPin } from 'lucide-react';

const AuditActorCard = ({ actor, metadata }) => {
  return (
    <Card title="Actor Information" icon={<User size={18} />} className="h-full">
      <div className="space-y-4">
        <div className="flex items-center">
          <div className="h-10 w-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-bold mr-3">
            {actor.name.charAt(0)}
          </div>
          <div>
            <h4 className="text-sm font-semibold text-slate-900">{actor.name}</h4>
            <p className="text-xs text-slate-500">{actor.email}</p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 pt-2">
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">Role</span>
            <div className="flex items-center text-sm text-slate-700">
              <Shield size={14} className="mr-1.5 text-slate-400" />
              {actor.role}
            </div>
          </div>
          <div className="space-y-1">
            <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider">User ID</span>
            <div className="text-sm text-slate-700 font-mono">
              {actor.id}
            </div>
          </div>
        </div>

        {metadata && (
          <div className="pt-4 border-t border-slate-100 space-y-3">
            <div className="flex items-start">
              <Monitor size={14} className="mr-2 text-slate-400 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Device</span>
                <span className="text-sm text-slate-600">{metadata.device || 'Unknown Device'}</span>
              </div>
            </div>
            <div className="flex items-start">
              <MapPin size={14} className="mr-2 text-slate-400 mt-0.5" />
              <div>
                <span className="text-[10px] uppercase font-bold text-slate-400 tracking-wider block">Location</span>
                <span className="text-sm text-slate-600">{metadata.location || 'Unknown Location'}</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </Card>
  );
};

export default AuditActorCard;
