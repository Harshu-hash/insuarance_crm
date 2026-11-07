import React from 'react';
import PermissionMatrix from '../PermissionMatrix';

const PermissionAssignmentSection = ({ watch, setValue, errors, disabled = false }) => {
  const permissions = watch('permissions') || [];

  const handlePermissionsChange = (newPermissions) => {
    setValue('permissions', newPermissions, { 
      shouldValidate: true,
      shouldDirty: true 
    });
  };

  return (
    <div className="space-y-4">
      <PermissionMatrix
        selectedPermissions={permissions}
        onChange={handlePermissionsChange}
        disabled={disabled}
      />
      {errors.permissions && (
        <div className="p-3 bg-red-50 border border-red-100 rounded-lg">
          <p className="text-xs font-bold text-red-600">{errors.permissions.message}</p>
        </div>
      )}
    </div>
  );
};

export default PermissionAssignmentSection;
