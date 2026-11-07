import { z } from 'zod';
import { POLICY_STATUS, POLICY_TYPE } from '../constants/policy.constants';

export const policySchema = z.object({
  name: z.string().min(3, 'Policy name must be at least 3 characters'),
  code: z.string().min(2, 'Policy code is required'),
  type: z.nativeEnum(POLICY_TYPE),
  insurer: z.string().min(2, 'Insurer name is required'),
  premiumAmount: z.coerce.number().positive('Premium must be a positive number'),
  claimThreshold: z.coerce.number().nonnegative('Threshold must be zero or positive'),
  policyYear: z.string().regex(/^\d{4}-\d{4}$/, 'Policy year must be in YYYY-YYYY format'),
  startDate: z.string().min(1, 'Start date is required'),
  endDate: z.string().min(1, 'End date is required'),
  applicableClasses: z.array(z.string()).min(1, 'At least one class must be selected'),
  status: z.nativeEnum(POLICY_STATUS),
  coverageSummary: z.string().min(10, 'Coverage summary must be at least 10 characters'),
  hospitalBillOnly: z.boolean().default(true),
  maturityBenefit: z.boolean().default(false),
  accidentOnly: z.boolean().default(true),
  notes: z.string().optional(),
}).refine((data) => {
  const start = new Date(data.startDate);
  const end = new Date(data.endDate);
  return end > start;
}, {
  message: "End date must be after start date",
  path: ["endDate"],
});
