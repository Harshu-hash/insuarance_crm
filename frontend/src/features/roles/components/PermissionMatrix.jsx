import React, { useMemo } from 'react';
import { Shield, Check, Info } from 'lucide-react';
import { cn } from '../../../utils/cn';
import { PERMISSION_CATALOG, PERMISSION_ACTIONS } from '../constants/permission.constants';
import Checkbox from '../../../components/ui/Checkbox';

const ACTIONS_ORDER = [
  PERMISSION_ACTIONS.READ,
  PERMISSION_ACTIONS.CREATE,
  PERMISSION_ACTIONS.UPDATE,
  PERMISSION_ACTIONS.DELETE,
  PERMISSION_ACTIONS.EXPORT,
  PERMISSION_ACTIONS.APPROVE,
  PERMISSION_ACTIONS.ASSIGN,
  PERMISSION_ACTIONS.MANAGE,
];

const PermissionMatrix = ({ selectedPermissions = [], onChange, disabled = false }) => {
  // Convert permission strings like 'users.read' to a more manageable structure
  // if needed, but here we can just use strings directly.
  
  const isSuperAdmin = selectedPermissions.includes('all');

  const handleActionToggle = (module, action) => {
    if (disabled || isSuperAdmin) return;
    
    const permissionKey = `${module}.${action}`;
    let newPermissions;
    
    if (selectedPermissions.includes(permissionKey)) {
      newPermissions = selectedPermissions.filter((p) => p !== permissionKey);
    } else {
      newPermissions = [...selectedPermissions, permissionKey];
    }
    
    onChange(newPermissions);
  };

  const handleModuleToggle = (module, moduleActions) => {
    if (disabled || isSuperAdmin) return;
    
    const modulePermissionKeys = moduleActions.map(action => `${module}.${action}`);
    const allSelected = modulePermissionKeys.every(key => selectedPermissions.includes(key));
    
    let newPermissions;
    if (allSelected) {
      // Remove all for this module
      newPermissions = selectedPermissions.filter(p => !modulePermissionKeys.includes(p));
    } else {
      // Add all missing for this module
      const toAdd = modulePermissionKeys.filter(key => !selectedPermissions.includes(key));
      newPermissions = [...selectedPermissions, ...toAdd];
    }
    
    onChange(newPermissions);
  };

  const handleSelectAll = () => {
    if (disabled || isSuperAdmin) return;
    
    const allKeys = [];
    PERMISSION_CATALOG.forEach(group => {
      group.actions.forEach(action => {
        allKeys.push(`${group.module}.${action}`);
      });
    });
    
    const allSelected = allKeys.every(key => selectedPermissions.includes(key));
    onChange(allSelected ? [] : allKeys);
  };

  const stats = useMemo(() => {
    if (isSuperAdmin) return 'Full Access';
    return `${selectedPermissions.length} permissions active`;
  }, [selectedPermissions, isSuperAdmin]);

  return (
    <div className="space-y-4">
      {/* Header & Bulk Actions */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 bg-slate-50 p-4 rounded-xl border border-slate-200">
        <div className="flex items-center gap-3">
          <div className="h-10 w-10 bg-primary/10 rounded-lg flex items-center justify-center">
            <Shield className="h-5 w-5 text-primary" />
          </div>
          <div>
            <h3 className="text-sm font-bold text-text-primary">Permission Matrix</h3>
            <p className="text-xs text-text-secondary">{stats}</p>
          </div>
        </div>
        
        {!disabled && !isSuperAdmin && (
          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={() => onChange([])}
              className="text-xs font-medium text-text-secondary hover:text-red-600 transition-colors"
            >
              Clear All
            </button>
            <button
              type="button"
              onClick={handleSelectAll}
              className="text-xs font-medium text-primary hover:underline"
            >
              Select All Permissions
            </button>
          </div>
        )}
      </div>

      {/* Matrix Table */}
      <div className="overflow-x-auto rounded-xl border border-border shadow-sm bg-white">
        <table className="w-full text-left border-collapse min-w-[800px]">
          <thead>
            <tr className="bg-slate-50/80 border-b border-border">
              <th className="px-6 py-4 text-xs font-bold text-text-secondary uppercase tracking-wider sticky left-0 bg-slate-50 z-10 w-64 shadow-[2px_0_5px_rgba(0,0,0,0.05)]">
                Module / Action
              </th>
              {ACTIONS_ORDER.map(action => (
                <th key={action} className="px-4 py-4 text-center text-xs font-bold text-text-secondary uppercase tracking-wider">
                  {action}
                </th>
              ))}
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {PERMISSION_CATALOG.map((group) => {
              const moduleKeys = group.actions.map(action => `${group.module}.${action}`);
              const allModuleSelected = moduleKeys.every(key => selectedPermissions.includes(key));
              const someModuleSelected = moduleKeys.some(key => selectedPermissions.includes(key));

              return (
                <tr key={group.module} className="hover:bg-slate-50/50 transition-colors group">
                  <td className="px-6 py-4 sticky left-0 bg-white group-hover:bg-slate-50 z-10 shadow-[2px_0_5px_rgba(0,0,0,0.05)]">
                    <div className="flex items-center gap-3">
                      <Checkbox
                        id={`module-${group.module}`}
                        checked={isSuperAdmin || allModuleSelected}
                        disabled={disabled || isSuperAdmin}
                        onChange={() => handleModuleToggle(group.module, group.actions)}
                        className={cn(
                          "transition-opacity",
                          someModuleSelected && !allModuleSelected && "opacity-70"
                        )}
                      />
                      <label 
                        htmlFor={`module-${group.module}`}
                        className="text-sm font-bold text-text-primary cursor-pointer"
                      >
                        {group.label}
                      </label>
                    </div>
                  </td>
                  
                  {ACTIONS_ORDER.map(action => {
                    const hasAction = group.actions.includes(action);
                    const permissionKey = `${group.module}.${action}`;
                    const isSelected = selectedPermissions.includes(permissionKey);

                    return (
                      <td key={action} className="px-4 py-4 text-center">
                        {hasAction ? (
                          <div className="flex justify-center">
                            <Checkbox
                              checked={isSuperAdmin || isSelected}
                              disabled={disabled || isSuperAdmin}
                              onChange={() => handleActionToggle(group.module, action)}
                            />
                          </div>
                        ) : (
                          <span className="text-[10px] text-slate-200">—</span>
                        )}
                      </td>
                    );
                  })}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      <div className="flex items-start gap-2 p-3 bg-blue-50/50 rounded-lg border border-blue-100">
        <Info className="h-4 w-4 text-blue-500 mt-0.5 flex-shrink-0" />
        <p className="text-[11px] text-blue-700 leading-relaxed">
          Permissions are granular. Selecting a module checkbox will toggle all available actions for that module. 
          System roles may have locked permissions that cannot be modified.
        </p>
      </div>
    </div>
  );
};

export default PermissionMatrix;
