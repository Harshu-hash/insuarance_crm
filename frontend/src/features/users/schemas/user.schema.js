import * as z from 'zod';
import { USER_ROLES, USER_STATUS, APPROVAL_STATUS } from '../constants/user.constants';

export const userSchema = z.object({
  fullName: z.string().min(3, 'Full name must be at least 3 characters').trim(),
  email: z.string().email('Invalid email address').min(1, 'Email is required'),
  mobile: z.string().regex(/^[6-9]\d{9}$/, 'Invalid Indian mobile number'),
  role: z.nativeEnum(USER_ROLES, {
    errorMap: () => ({ message: 'Please select a valid role' }),
  }),
  district: z.string().optional(),
  block: z.string().optional(),
  status: z.nativeEnum(USER_STATUS).default(USER_STATUS.ACTIVE),
  approvalStatus: z.nativeEnum(APPROVAL_STATUS).default(APPROVAL_STATUS.APPROVED),
  notes: z.string().max(500, 'Notes must be less than 500 characters').optional(),
}).refine((data) => {
  // Role-based geography validation
  if (data.role === USER_ROLES.DISTRICT_MANAGER && !data.district) {
    return false;
  }
  if (data.role === USER_ROLES.BLOCK_MANAGER && (!data.district || !data.block)) {
    return false;
  }
  return true;
}, {
  message: "District/Block assignment is required for this role",
  path: ["district"], // Assigning it to district by default
});
