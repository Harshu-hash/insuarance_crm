import React from 'react';
import { Card, CardContent } from '../../../components/ui/Card';
import { User, MapPin, Phone, Mail } from 'lucide-react';
import IncentiveTypeBadge from './IncentiveTypeBadge';

const IncentiveRecipientCard = ({ recipient }) => {
  return (
    <Card className="border-none shadow-sm shadow-slate-200/50">
      <CardContent className="p-6">
        <div className="flex items-start justify-between mb-6">
          <div className="flex items-center space-x-4">
            <div className="h-12 w-12 rounded-2xl bg-primary/10 flex items-center justify-center text-primary">
              <User size={24} />
            </div>
            <div>
              <h3 className="text-base font-black text-slate-800">{recipient.recipientName}</h3>
              <IncentiveTypeBadge type={recipient.recipientRole} />
            </div>
          </div>
          <div className="text-right">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest block mb-1">Status</span>
            <span className="text-xs font-bold text-success">Active Field User</span>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-slate-600">
              <MapPin size={16} className="text-slate-400" />
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase block">District / Block</span>
                <p className="text-xs font-bold">{recipient.district} / {recipient.block}</p>
              </div>
            </div>
          </div>
          <div className="space-y-4">
            <div className="flex items-center space-x-3 text-slate-600">
              <Phone size={16} className="text-slate-400" />
              <div>
                <span className="text-[9px] font-bold text-slate-400 uppercase block">Contact</span>
                <p className="text-xs font-bold">+91 98765 43210</p>
              </div>
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

export default IncentiveRecipientCard;
