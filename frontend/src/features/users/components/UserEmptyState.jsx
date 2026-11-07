import React from 'react';
import { Search, PlusCircle } from 'lucide-react';
import Button from '../../../components/ui/Button';

const UserEmptyState = ({ onClear, onAdd }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20 bg-white rounded-3xl border border-slate-100 border-dashed">
      <div className="h-16 w-16 bg-slate-50 flex items-center justify-center rounded-2xl mb-4">
        <Search className="h-8 w-8 text-slate-200" />
      </div>
      <h3 className="text-sm font-bold text-text-primary">No users found</h3>
      <p className="text-xs text-text-secondary mt-1 max-w-xs text-center">
        Try adjusting your filters or search terms to find what you're looking for.
      </p>
      <div className="flex items-center space-x-3 mt-6">
        <Button variant="outline" size="sm" onClick={onClear}>Clear All Filters</Button>
        <Button variant="primary" size="sm" onClick={onAdd}>
          <PlusCircle size={14} className="mr-2" /> Add New User
        </Button>
      </div>
    </div>
  );
};

export default UserEmptyState;
