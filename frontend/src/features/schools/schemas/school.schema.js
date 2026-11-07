import { z } from 'zod';
import { SCHOOL_STATUS, SCHOOL_TYPE } from '../constants/school.constants';

export const schoolSchema = z.object({
  name: z.string().trim().min(3, 'School name must be at least 3 characters'),
  code: z.string().trim().toUpperCase().min(2, 'School code must be at least 2 characters').max(20),
  schoolType: z.nativeEnum(SCHOOL_TYPE, { errorMap: () => ({ message: 'Please select a valid school type' }) }),
  districtId: z.string().min(1, 'Please select a district'),
  blockId: z.string().min(1, 'Please select a block'),
  status: z.nativeEnum(SCHOOL_STATUS).default(SCHOOL_STATUS.ACTIVE),
  description: z.string().optional(),
  
  // Contact Info
  contactPerson: z.string().trim().min(1, 'Contact person name is required'),
  contactMobile: z.string().trim().optional().or(z.string().regex(/^[0-9]{10}$/, 'Invalid mobile number')),
  contactEmail: z.string().trim().email('Invalid email address').optional().or(z.literal('')),
  
  // Address
  address: z.object({
    line1: z.string().trim().min(1, 'Address line 1 is required'),
    line2: z.string().optional(),
    city: z.string().optional(),
    pincode: z.string().trim().optional().or(z.string().regex(/^[0-9]{6}$/, 'Invalid pincode')),
  }),

  operationalSettings: z.object({
    enrollmentEnabled: z.boolean().default(true),
    visibleInPublic: z.boolean().default(true),
  }).default({}),
});

export const schoolDefaultValues = {
  name: '',
  code: '',
  schoolType: SCHOOL_TYPE.GOVERNMENT,
  districtId: '',
  blockId: '',
  status: SCHOOL_STATUS.ACTIVE,
  description: '',
  contactPerson: '',
  contactMobile: '',
  contactEmail: '',
  address: {
    line1: '',
    line2: '',
    city: '',
    pincode: '',
  },
  operationalSettings: {
    enrollmentEnabled: true,
    visibleInPublic: true,
  },
};
