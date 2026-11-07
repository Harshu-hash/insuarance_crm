import React from 'react';
import Badge from '../../../components/ui/Badge';
import { NOTIFICATION_STATUS } from '../constants/notification.constants';

export const NotificationStatusBadge = ({ status }) => {
  const config = {
    [NOTIFICATION_STATUS.DRAFT]: { variant: 'secondary', label: 'Draft' },
    [NOTIFICATION_STATUS.SCHEDULED]: { variant: 'info', label: 'Scheduled' },
    [NOTIFICATION_STATUS.QUEUED]: { variant: 'warning', label: 'Queued' },
    [NOTIFICATION_STATUS.SENDING]: { variant: 'primary', label: 'Sending' },
    [NOTIFICATION_STATUS.SENT]: { variant: 'success', label: 'Sent' },
    [NOTIFICATION_STATUS.FAILED]: { variant: 'danger', label: 'Failed' },
    [NOTIFICATION_STATUS.CANCELLED]: { variant: 'secondary', label: 'Cancelled' },
    [NOTIFICATION_STATUS.PARTIALLY_FAILED]: { variant: 'warning', label: 'Partially Failed' },
  };

  const { variant, label } = config[status] || { variant: 'secondary', label: status };
  return <Badge variant={variant} className="uppercase text-[9px] font-black">{label}</Badge>;
};

export const NotificationChannelBadge = ({ channel }) => {
  return (
    <span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-slate-100 text-slate-600 border border-slate-200 uppercase tracking-tighter">
      {channel}
    </span>
  );
};

export const NotificationAudienceBadge = ({ audience }) => {
  return (
    <span className="text-[10px] font-black text-slate-500 uppercase tracking-widest bg-slate-50 px-2 py-0.5 rounded border border-slate-100">
      {audience?.replace('_', ' ')}
    </span>
  );
};

export const NotificationTypeBadge = ({ type }) => {
  return (
    <span className="text-[10px] font-black text-primary uppercase tracking-tighter bg-primary/5 px-2 py-0.5 rounded">
      {type?.replace('_', ' ')}
    </span>
  );
};
