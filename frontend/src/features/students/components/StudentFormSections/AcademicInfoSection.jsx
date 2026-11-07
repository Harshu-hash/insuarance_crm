import React from 'react';
import Select from '../../../../components/ui/Select';
import Input from '../../../../components/ui/Input';
import { STUDENT_CLASS } from '../../constants/student.constants';

const AcademicInfoSection = ({ register, errors }) => {
  const classOptions = STUDENT_CLASS.map(c => ({
    value: c,
    label: `Class ${c}`
  }));

  return (
    <div className="space-y-6">
      <div className="flex items-center gap-2 mb-4">
        <div className="h-6 w-1 bg-indigo-500 rounded-full" />
        <h3 className="text-sm font-black text-text-primary uppercase tracking-wider">Academic Placement</h3>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5">
        <Select
          label="Class / Grade"
          {...register('class')}
          options={[{ value: '', label: 'Select Class' }, ...classOptions]}
          error={errors.class?.message}
          required
        />
        <Input
          label="Section / Stream"
          placeholder="e.g. A, Science..."
          {...register('section')}
          error={errors.section?.message}
        />
        <Input
          label="Roll Number"
          placeholder="e.g. 101"
          {...register('rollNumber')}
          error={errors.rollNumber?.message}
        />
        <Input
          label="Academic Session"
          placeholder="e.g. 2026-27"
          {...register('academicYear')}
          error={errors.academicYear?.message}
        />
      </div>
    </div>
  );
};

export default AcademicInfoSection;
