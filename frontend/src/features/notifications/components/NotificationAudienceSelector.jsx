import React from 'react';
import Select from '../../../components/ui/Select';
import { AUDIENCE_TYPES } from '../constants/notification.constants';
import { Users, MapPin, Building2, ShieldCheck, UserCheck } from 'lucide-react';

const NotificationAudienceSelector = ({ value, onChange }) => {
  const audienceTypes = [
    { value: AUDIENCE_TYPES.ALL_USERS, label: 'All Platform Users', icon: Users },
    { value: AUDIENCE_TYPES.DISTRICT_MANAGERS, label: 'All District Managers', icon: ShieldCheck },
    { value: AUDIENCE_TYPES.BLOCK_MANAGERS, label: 'All Block Managers', icon: UserCheck },
    { value: AUDIENCE_TYPES.SPECIFIC_DISTRICT, label: 'Specific District', icon: MapPin },
    { value: AUDIENCE_TYPES.SPECIFIC_BLOCK, label: 'Specific Block', icon: MapPin },
    { value: AUDIENCE_TYPES.SPECIFIC_SCHOOL, label: 'Specific School', icon: Building2 },
    { value: AUDIENCE_TYPES.PARENTS_CONSUMERS, label: 'All Registered Parents', icon: Users },
  ];

  const handleTypeChange = (type) => {
    onChange({ ...value, type, district: '', block: '', school: '' });
  };

  return (
    <div className="space-y-6">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3">
        {audienceTypes.map((opt) => {
          const Icon = opt.icon;
          const isActive = value.type === opt.value;
          return (
            <div 
              key={opt.value}
              onClick={() => handleTypeChange(opt.value)}
              className={`p-4 rounded-xl border-2 cursor-pointer transition-all flex items-center space-x-3 ${
                isActive ? 'border-primary bg-primary/5' : 'border-slate-100 bg-white hover:border-slate-200'
              }`}
            >
              <div className={`p-2 rounded-lg ${isActive ? 'bg-primary text-white' : 'bg-slate-50 text-slate-400'}`}>
                <Icon size={16} />
              </div>
              <span className={`text-[11px] font-black uppercase tracking-tight ${isActive ? 'text-primary' : 'text-slate-600'}`}>
                {opt.label}
              </span>
            </div>
          );
        })}
      </div>

      {/* Dynamic Filters based on Selection */}
      {(value.type === AUDIENCE_TYPES.SPECIFIC_DISTRICT || value.type === AUDIENCE_TYPES.SPECIFIC_BLOCK || value.type === AUDIENCE_TYPES.SPECIFIC_SCHOOL) && (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-4 border-t border-slate-100 animate-in fade-in slide-in-from-top-2">
           <div>
              <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">District</label>
              <Select value={value.district} onChange={(e) => onChange({ ...value, district: e.target.value })}>
                <option value="">Select District</option>
                <option value="Patna">Patna</option>
                <option value="Gaya">Gaya</option>
              </Select>
           </div>
           
           {(value.type === AUDIENCE_TYPES.SPECIFIC_BLOCK || value.type === AUDIENCE_TYPES.SPECIFIC_SCHOOL) && (
             <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">Block</label>
                <Select value={value.block} onChange={(e) => onChange({ ...value, block: e.target.value })}>
                  <option value="">Select Block</option>
                  <option value="Block A">Block A</option>
                  <option value="Block B">Block B</option>
                </Select>
             </div>
           )}

           {value.type === AUDIENCE_TYPES.SPECIFIC_SCHOOL && (
             <div>
                <label className="text-[10px] font-black text-slate-400 uppercase tracking-widest mb-1 block">School</label>
                <Select value={value.school} onChange={(e) => onChange({ ...value, school: e.target.value })}>
                  <option value="">Select School</option>
                  <option value="School X">School X</option>
                  <option value="School Y">School Y</option>
                </Select>
             </div>
           )}
        </div>
      )}

      <div className="bg-slate-50 p-4 rounded-xl border border-dashed border-slate-200">
         <div className="flex items-center justify-between">
            <span className="text-[10px] font-black text-slate-400 uppercase tracking-widest">Estimated Reach</span>
            <span className="text-xs font-black text-slate-800">~ 42,500 Users</span>
         </div>
         <p className="text-[10px] text-slate-400 font-bold uppercase mt-1 tracking-tighter italic">Recipients will be calculated at the time of sending based on active status.</p>
      </div>
    </div>
  );
};

export default NotificationAudienceSelector;
