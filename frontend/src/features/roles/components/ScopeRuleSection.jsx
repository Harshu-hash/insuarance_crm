import React from 'react';
import { Globe, MapPin, Layers, School, User } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { ROLE_SCOPES, ROLE_SCOPE_LABELS, ROLE_SCOPE_DESCRIPTIONS } from '../constants/role.constants';

const SCOPE_ICONS = {
  [ROLE_SCOPES.ALL]: Globe,
  [ROLE_SCOPES.DISTRICT]: MapPin,
  [ROLE_SCOPES.BLOCK]: Layers,
  [ROLE_SCOPES.SCHOOL]: School,
  [ROLE_SCOPES.OWN]: User,
};

const ScopeRuleSection = ({ value, onChange, disabledSize = false }) => {
  return (
    <div className="space-y-4">
      <div className="bg-slate-50 p-4 rounded-xl border border-slate-200">
        <h3 className="text-sm font-bold text-text-primary">Data Access Scope</h3>
        <p className="text-xs text-text-secondary">Define the boundary of data this role can access.</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.values(ROLE_SCOPES).map((scope) => {
          const Icon = SCOPE_ICONS[scope];
          const isSelected = value === scope;

          return (
            <label
              key={scope}
              className={cn(
                "relative flex items-start gap-4 p-4 rounded-xl border-2 cursor-pointer transition-all",
                isSelected 
                  ? "border-primary bg-primary/5 ring-1 ring-primary/20" 
                  : "border-border bg-white hover:border-slate-300",
                disabledSize && "opacity-50 cursor-not-allowed pointer-events-none"
              )}
            >
              <input
                type="radio"
                name="role-scope"
                value={scope}
                checked={isSelected}
                onChange={() => onChange(scope)}
                className="sr-only"
                disabled={disabledSize}
              />
              
              <div className={cn(
                "h-10 w-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors",
                isSelected ? "bg-primary text-white" : "bg-slate-100 text-slate-500"
              )}>
                <Icon className="h-5 w-5" />
              </div>

              <div className="flex-1">
                <div className="flex items-center justify-between">
                  <span className={cn(
                    "text-sm font-bold",
                    isSelected ? "text-primary" : "text-text-primary"
                  )}>
                    {ROLE_SCOPE_LABELS[scope]}
                  </span>
                  {isSelected && (
                    <div className="h-5 w-5 rounded-full bg-primary flex items-center justify-center">
                      <div className="h-2 w-2 rounded-full bg-white" />
                    </div>
                  )}
                </div>
                <p className="text-xs text-text-secondary mt-1 leading-relaxed">
                  {ROLE_SCOPE_DESCRIPTIONS[scope]}
                </p>
              </div>
            </label>
          );
        })}
      </div>
    </div>
  );
};

export default ScopeRuleSection;
