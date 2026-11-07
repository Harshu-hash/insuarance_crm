import { useAuthStore } from '../app/store/auth.store';

/**
 * Checks if the current user has a specific permission
 */
export const hasPermission = (permission) => {
  const permissions = useAuthStore.getState().permissions || [];
  const role = useAuthStore.getState().role;

  // Super Admin bypass: they have all permissions
  if (role === 'SuperAdmin') return true;

  return permissions.includes(permission);
};

/**
 * Checks if the current user has any of the listed permissions
 */
export const hasAnyPermission = (requiredPermissions) => {
  const permissions = useAuthStore.getState().permissions || [];
  const role = useAuthStore.getState().role;

  if (role === 'SuperAdmin') return true;

  return requiredPermissions.some(p => permissions.includes(p));
};

/**
 * Checks if the current user has all of the listed permissions
 */
export const hasAllPermissions = (requiredPermissions) => {
  const permissions = useAuthStore.getState().permissions || [];
  const role = useAuthStore.getState().role;

  if (role === 'SuperAdmin') return true;

  return requiredPermissions.every(p => permissions.includes(p));
};
