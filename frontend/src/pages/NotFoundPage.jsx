import React from 'react';
import { Link } from 'react-router-dom';
import { FileQuestion, Home, ArrowLeft } from 'lucide-react';
import Button from '../components/ui/Button';

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8FAFC] p-4 text-center">
      <div className="h-24 w-24 bg-primary/10 text-primary rounded-3xl flex items-center justify-center mb-8 shadow-sm">
        <FileQuestion size={48} />
      </div>
      
      <h1 className="text-4xl font-extrabold text-text-primary tracking-tight mb-2">404</h1>
      <h2 className="text-xl font-bold text-text-primary mb-4">Page Not Found</h2>
      <p className="text-text-secondary max-w-sm mx-auto mb-10">
        The page you are looking for might have been removed, had its name changed, or is temporarily unavailable.
      </p>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button variant="outline" onClick={() => window.history.back()}>
          <ArrowLeft className="mr-2 h-4 w-4" />
          Go Back
        </Button>
        <Link to="/admin/dashboard">
          <Button variant="primary">
            <Home className="mr-2 h-4 w-4" />
            Admin Dashboard
          </Button>
        </Link>
      </div>

      <div className="mt-16 pt-8 border-t border-slate-200">
        <p className="text-xs text-slate-400 font-medium uppercase tracking-widest">
          Insurance CRM v1.0 Foundation
        </p>
      </div>
    </div>
  );
};

export default NotFoundPage;
