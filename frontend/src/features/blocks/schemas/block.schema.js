import { z } from 'zod';
import { BLOCK_STATUS } from '../constants/block.constants';

export const blockSchema = z.object({
  name: z.string().trim().min(3, 'Block name must be at least 3 characters'),
  code: z.string().trim().toUpperCase().min(2, 'Block code must be at least 2 characters').max(10),
  districtId: z.string().min(1, 'Please select a parent district'),
  managerId: z.string().optional(),
  status: z.nativeEnum(BLOCK_STATUS).default(BLOCK_STATUS.ACTIVE),
  description: z.string().optional(),
  operationalSettings: z.object({
    enrollmentEnabled: z.boolean().default(true),
    claimsEnabled: z.boolean().default(true),
    visibleInPublic: z.boolean().default(false),
  }).default({}),
});

export const blockDefaultValues = {
  name: '',
  code: '',
  districtId: '',
  managerId: '',
  status: BLOCK_STATUS.ACTIVE,
  description: '',
  operationalSettings: {
    enrollmentEnabled: true,
    claimsEnabled: true,
    visibleInPublic: false,
  },
};
