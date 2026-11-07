import React from 'react';
import Input from '../../../../components/ui/Input';
import { User, Phone, Mail } from 'lucide-react';

const ContactInfoSection = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-1 bg-emerald-500 rounded-full" />
        <h3 className="text-sm font-bold text-text-primary uppercase tracking-wider">Contact & Personnel</h3>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          label="Principal / Headmaster Name"
          placeholder="Name of the institutional head..."
          {...register('contactPerson')}
          error={errors.contactPerson?.message}
          required
          icon={User}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Input
            label="Contact Mobile"
            placeholder="10-digit number"
            {...register('contactMobile')}
            error={errors.contactMobile?.message}
            icon={Phone}
          />
          <Input
            label="Institutional Email"
            placeholder="school@example.com"
            {...register('contactEmail')}
            error={errors.contactEmail?.message}
            icon={Mail}
          />
        </div>
      </div>
    </div>
  );
};

export default ContactInfoSection;
