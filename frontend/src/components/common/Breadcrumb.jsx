import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';
import { cn } from '../../utils/cn';

const Breadcrumb = ({ className }) => {
  const location = useLocation();
  const pathnames = location.pathname.split('/').filter((x) => x && x !== 'admin');

  return (
    <nav className={cn("flex", className)} aria-label="Breadcrumb">
      <ol className="inline-flex items-center space-x-1 md:space-x-2 text-xs">
        <li className="inline-flex items-center">
          <Link
            to="/admin/dashboard"
            className="inline-flex items-center text-text-secondary hover:text-primary transition-colors"
          >
            <Home className="w-3 h-3 mr-1" />
            Dashboard
          </Link>
        </li>
        {pathnames.map((name, index) => {
          const routeTo = `/admin/${pathnames.slice(0, index + 1).join('/')}`;
          const isLast = index === pathnames.length - 1;
          const label = name.charAt(0).toUpperCase() + name.slice(1);

          if (name === 'dashboard') return null;

          return (
            <li key={routeTo} className="inline-flex items-center">
              <ChevronRight className="w-3 h-3 text-slate-300 mx-1" />
              {isLast ? (
                <span className="font-bold text-primary capitalize">{label}</span>
              ) : (
                <Link
                  to={routeTo}
                  className="text-text-secondary hover:text-primary transition-colors capitalize"
                >
                  {label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
