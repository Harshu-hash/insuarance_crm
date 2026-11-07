import React from 'react';
import { MapPin } from 'lucide-react';
import { Card, CardContent } from '../../../../components/ui/Card';
import Select from '../../../../components/ui/Select';
import { USER_ROLES } from '../../constants/user.constants';
import { MOCK_DISTRICTS, MOCK_BLOCKS } from '../../mock/users.mock';

const GeographicScopeSection = ({ register, errors, selectedRole, watch }) => {
  const needsDistrict = [
    USER_ROLES.DISTRICT_ADMIN, 
    USER_ROLES.DISTRICT_MANAGER, 
    USER_ROLES.BLOCK_MANAGER
  ].includes(selectedRole);

  const needsBlock = selectedRole === USER_ROLES.BLOCK_MANAGER;

  if (!needsDistrict && !needsBlock) return null;

  return (
    <section className="space-y-4 animate-in fade-in slide-in-from-top-2 duration-300">
      <div className="flex items-center space-x-2 text-text-primary px-1">
        <MapPin size={18} className="text-primary" />
        <h2 className="text-sm font-bold uppercase tracking-wider">Geographic Scope</h2>
      </div>
      <Card className="border-none shadow-sm shadow-slate-200/50">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          {needsDistrict && (
            <Select
              label="Assigned District"
              {...register('district')}
              options={MOCK_DISTRICTS.map(d => ({ value: d, label: d }))}
              error={errors.district?.message}
              placeholder="Select a district"
            />
          )}
          {needsBlock && (
            <Select
              label="Assigned Block"
              {...register('block')}
              options={(MOCK_BLOCKS[watch('district')] || []).map(b => ({ value: b, label: b }))}
              error={errors.block?.message}
              placeholder="Select a block"
              disabled={!watch('district')}
            />
          )}
        </CardContent>
      </Card>
    </section>
  );
};

export default GeographicScopeSection;
