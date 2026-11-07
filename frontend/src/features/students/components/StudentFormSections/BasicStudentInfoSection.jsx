import React from 'react';
import Input from '../../../../components/ui/Input';
import Select from '../../../../components/ui/Select';
import { GENDER_OPTIONS } from '../../constants/student.constants';

const BasicStudentInfoSection = ({ register, errors }) => {
  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-1 bg-primary rounded-full" />
        <h3 className="text-sm font-black text-text-primary uppercase tracking-wider">Student Identity</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
        <Input
          label="Full Name"
          placeholder="Enter student's legal name..."
          {...register('name')}
          error={errors.name?.message}
          required
        />
        <Input
          label="System / Admission ID"
          placeholder="e.g. ST-2026-X"
          {...register('studentId')}
          error={errors.studentId?.message}
        />
        <Input
          label="Date of Birth"
          type="date"
          {...register('dob')}
          error={errors.dob?.message}
          required
        />
        <Select
          label="Gender"
          {...register('gender')}
          options={GENDER_OPTIONS}
          error={errors.gender?.message}
          required
        />
      </div>
      
      <Input
        label="Internal Remarks"
        placeholder="Admins notes for this student record..."
        {...register('remarks')}
        error={errors.remarks?.message}
      />
    </div>
  );
};

export default BasicStudentInfoSection;
