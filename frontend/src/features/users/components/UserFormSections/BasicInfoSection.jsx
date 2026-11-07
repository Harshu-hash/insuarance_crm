import React from 'react';
import { User } from 'lucide-react';
import { Card, CardContent } from '../../../../components/ui/Card';
import Input from '../../../../components/ui/Input';

const BasicInfoSection = ({ register, errors }) => {
  return (
    <section className="space-y-4">
      <div className="flex items-center space-x-2 text-text-primary px-1">
        <User size={18} className="text-primary" />
        <h2 className="text-sm font-bold uppercase tracking-wider">Basic Information</h2>
      </div>
      <Card className="border-none shadow-sm shadow-slate-200/50">
        <CardContent className="p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
          <Input
            label="Full Name"
            placeholder="e.g. Rajesh Kumar"
            {...register('fullName')}
            error={errors.fullName?.message}
          />
          <Input
            label="Email Address"
            type="email"
            placeholder="e.g. rajesh@insurance.gov.in"
            {...register('email')}
            error={errors.email?.message}
          />
          <Input
            label="Mobile Number"
            placeholder="10-digit mobile number"
            {...register('mobile')}
            error={errors.mobile?.message}
          />
          <Input
            label="Employee/User Code (Optional)"
            placeholder="e.g. EMP12345"
            {...register('userCode')}
          />
        </CardContent>
      </Card>
    </section>
  );
};

export default BasicInfoSection;
