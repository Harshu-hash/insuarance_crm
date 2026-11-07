import React from 'react';
import ScopeRuleSection from '../ScopeRuleSection';

const ScopeAccessSection = ({ watch, setValue, disabled = false }) => {
  const scope = watch('scope');

  const handleScopeChange = (newScope) => {
    setValue('scope', newScope, { 
      shouldDirty: true 
    });
  };

  return (
    <ScopeRuleSection
      value={scope}
      onChange={handleScopeChange}
      disabled={disabled}
    />
  );
};

export default ScopeAccessSection;
