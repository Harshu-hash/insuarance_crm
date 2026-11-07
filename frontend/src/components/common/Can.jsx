import React from 'react';
import { useAuthStore } from '../../app/store/auth.store';

/**
 * A wrapper component that only renders its children if the user has the required permission.
 */
export const Can = ({ permission, permissions, all = false, children, fallback = null }) => {
  const userPermissions = useAuthStore((state) => state.permissions) || [];
  const role = useAuthStore((state) => state.role);

  // Super Admin bypass
  if (role === 'SuperAdmin') return <>{children}</>;

  let hasAccess = false;

  if (permission) {
    hasAccess = userPermissions.includes(permission);
  } else if (permissions && Array.isArray(permissions)) {
    if (all) {
      hasAccess = permissions.every((p) => userPermissions.includes(p));
    } else {
      hasAccess = permissions.some((p) => userPermissions.includes(p));
    }
  }

  if (!hasAccess) return fallback;

  return <>{children}</>;
};

export default Can;
