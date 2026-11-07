import { z } from 'zod';
import { DISTRICT_STATUS } from '../constants/district.constants';

/**
 * District Schema for valuation using Zod
 */
export const districtSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'District name must be at least 3 characters')
    .max(50, 'District name must be less than 50 characters'),
  code: z
    .string()
    .trim()
    .min(2, 'District code must be at least 2 characters')
    .regex(/^[A-Z0-9_]+$/, 'Code must be uppercase alphanumeric with underscores')
    .max(10, 'District code must be less than 10 characters'),
  region: z
    .string()
    .min(1, 'Region is required'),
  description: z
    .string()
    .trim()
    .max(250, 'Description must be less than 250 characters')
    .optional()
    .or(z.literal('')),
  status: z.nativeEnum(DISTRICT_STATUS).default(DISTRICT_STATUS.ACTIVE),
  managerId: z.string().optional().or(z.literal('')),
});

export const districtDefaultValues = {
  name: '',
  code: '',
  region: '',
  description: '',
  status: DISTRICT_STATUS.ACTIVE,
  managerId: '',
};
