import React from 'react';
import { Navigate, Outlet, useLocation } from 'react-router-dom';
import { useAuthStore } from '../store/auth.store';

export const ProtectedRoute = ({ requiredPermission, allowedRoles }) => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);
  const userPermissions = useAuthStore((state) => state.permissions) || [];
  const userRole = useAuthStore((state) => state.role);
  const location = useLocation();

  if (!isAuthenticated) {
    // Redirect to login but save the current location they were trying to access
    return <Navigate to="/admin/login" state={{ from: location }} replace />;
  }

  // Super Admin bypass for all roles/permissions
  if (userRole === 'SuperAdmin') {
    return <Outlet />;
  }

  // Role check
  if (allowedRoles && !allowedRoles.includes(userRole)) {
    return <Navigate to="/admin/unauthorized" replace />;
  }

  // Permission check
  if (requiredPermission && !userPermissions.includes(requiredPermission)) {
    return <Navigate to="/admin/unauthorized" replace />;
  }

  return <Outlet />;
};

export const PublicRoute = () => {
  const isAuthenticated = useAuthStore((state) => state.isAuthenticated);

  if (isAuthenticated) {
    return <Navigate to="/admin/dashboard" replace />;
  }

  return <Outlet />;
};
