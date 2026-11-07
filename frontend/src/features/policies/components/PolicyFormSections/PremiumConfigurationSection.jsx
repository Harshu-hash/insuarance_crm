import React from 'react';
import { Card } from '../../../../components/ui/Card';
import Input from '../../../../components/ui/Input';
import { Banknote } from 'lucide-react';

const PremiumConfigurationSection = ({ register, errors }) => {
  return (
    <Card 
      title="Premium Configuration" 
      icon={<Banknote className="h-5 w-5 text-emerald-600" />}
      className="mb-6"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Input
          label="Annual Premium Amount (₹)"
          type="number"
          placeholder="500"
          {...register('premiumAmount')}
          error={errors.premiumAmount?.message}
        />
        <div className="p-4 bg-emerald-50 rounded-xl border border-emerald-100 flex items-start space-x-3">
          <div className="h-8 w-8 bg-white rounded-full flex items-center justify-center flex-shrink-0 text-emerald-600">
            ₹
          </div>
          <p className="text-xs text-emerald-800 leading-relaxed font-medium">
            This amount will be charged annually per student enrollment. The standard platform fee is ₹500.
          </p>
        </div>
      </div>
    </Card>
  );
};

export default PremiumConfigurationSection;
