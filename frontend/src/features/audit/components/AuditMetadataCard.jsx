import React from 'react';
import Card from '../../../components/ui/Card';
import { Info, Hash, Globe, Activity, Terminal } from 'lucide-react';

const AuditMetadataCard = ({ metadata, ip, timestamp, id }) => {
  return (
    <Card title="System Metadata" icon={<Info size={18} />}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-y-4 gap-x-8">
        <div className="space-y-1">
          <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            <Hash size={12} className="mr-1" />
            Log ID
          </div>
          <div className="text-sm font-mono text-slate-700">{id}</div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            <Activity size={12} className="mr-1" />
            IP Address
          </div>
          <div className="text-sm font-mono text-slate-700">{ip}</div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            <Globe size={12} className="mr-1" />
            Request ID
          </div>
          <div className="text-sm font-mono text-slate-700">{metadata?.requestId || 'N/A'}</div>
        </div>

        <div className="space-y-1">
          <div className="flex items-center text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-1">
            <Terminal size={12} className="mr-1" />
            Timestamp
          </div>
          <div className="text-sm text-slate-700">
            {new Date(timestamp).toLocaleString()}
          </div>
        </div>
      </div>

      <div className="mt-6 pt-4 border-t border-slate-100">
        <div className="text-[10px] font-bold text-slate-400 uppercase tracking-wider mb-3">API Context (Placeholder)</div>
        <div className="bg-slate-900 rounded-lg p-3 overflow-x-auto">
          <pre className="text-[10px] text-green-400 font-mono">
            {`GET /api/v1/resources/${id}\nHost: api.insurancecrm.com\nUser-Agent: ${metadata?.device || 'Mozilla/5.0...'}`}
          </pre>
        </div>
      </div>
    </Card>
  );
};

export default AuditMetadataCard;
