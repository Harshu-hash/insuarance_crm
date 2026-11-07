import React from 'react';
import { Globe, MapPin, Layers, School, User } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { ROLE_SCOPES, ROLE_SCOPE_LABELS } from '../constants/role.constants';

const SCOPE_ICONS = {
  [ROLE_SCOPES.ALL]: Globe,
  [ROLE_SCOPES.DISTRICT]: MapPin,
  [ROLE_SCOPES.BLOCK]: Layers,
  [ROLE_SCOPES.SCHOOL]: School,
  [ROLE_SCOPES.OWN]: User,
};

const ScopeBadge = ({ scope, className }) => {
  const Icon = SCOPE_ICONS[scope] || Globe;

  return (
    <span
      className={cn(
        "inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md text-xs font-medium bg-slate-100 text-text-secondary border border-slate-200",
        className
      )}
    >
      <Icon className="h-3 w-3" />
      {ROLE_SCOPE_LABELS[scope]}
    </span>
  );
};

export default ScopeBadge;
