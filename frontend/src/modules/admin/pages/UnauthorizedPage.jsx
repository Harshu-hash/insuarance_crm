import React from 'react';
import { Link } from 'react-router-dom';
import { ShieldAlert, ArrowLeft } from 'lucide-react';
import Button from '../../../components/ui/Button';

const UnauthorizedPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-background p-4 text-center">
      <div className="h-20 w-20 bg-danger/10 text-danger rounded-full flex items-center justify-center mb-6">
        <ShieldAlert size={40} />
      </div>
      
      <h1 className="text-3xl font-bold text-text-primary tracking-tight">Access Denied</h1>
      <p className="text-text-secondary mt-2 max-w-md">
        You do not have the necessary permissions to access this section of the portal. 
        Please contact your system administrator if you believe this is an error.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row gap-4">
        <Link to="/admin/dashboard">
          <Button variant="outline" className="w-full sm:w-auto">
            <ArrowLeft className="mr-2 h-4 w-4" />
            Back to Dashboard
          </Button>
        </Link>
        <Button variant="primary" className="w-full sm:w-auto" onClick={() => window.location.reload()}>
          Try Again
        </Button>
      </div>

      <p className="mt-12 text-xs text-slate-400">
        Error Code: 403 Forbidden
      </p>
    </div>
  );
};

export default UnauthorizedPage;
