import { z } from 'zod';
import { STUDENT_STATUS } from '../constants/student.constants';

export const studentSchema = z.object({
  name: z.string().trim().min(2, 'Name must be at least 2 characters'),
  studentId: z.string().trim().optional(), // System generated or admission number
  dob: z.string().min(1, 'Date of birth is required'),
  gender: z.enum(['male', 'female', 'other'], { errorMap: () => ({ message: 'Please select a gender' }) }),
  status: z.nativeEnum(STUDENT_STATUS).default(STUDENT_STATUS.ACTIVE),
  remarks: z.string().optional(),
  
  // Guardian Info
  guardianName: z.string().trim().min(1, 'Guardian name is required'),
  guardianRelation: z.string().trim().optional(),
  guardianMobile: z.string().trim().regex(/^[0-9]{10}$/, 'Invalid 10-digit mobile number').optional().or(z.literal('')),
  alternateMobile: z.string().trim().optional().or(z.string().regex(/^[0-9]{10}$/, 'Invalid 10-digit mobile number')).or(z.literal('')),
  guardianEmail: z.string().trim().email('Invalid email address').optional().or(z.literal('')),
  
  // Academic & Mapping
  class: z.string().min(1, 'Please select a class'),
  section: z.string().optional(),
  rollNumber: z.string().optional(),
  academicYear: z.string().optional(),
  
  districtId: z.string().min(1, 'Please select a district'),
  blockId: z.string().min(1, 'Please select a block'),
  schoolId: z.string().min(1, 'Please select a school'),
});

export const studentDefaultValues = {
  name: '',
  studentId: '',
  dob: '',
  gender: 'male',
  status: STUDENT_STATUS.ACTIVE,
  remarks: '',
  guardianName: '',
  guardianRelation: '',
  guardianMobile: '',
  alternateMobile: '',
  guardianEmail: '',
  class: '',
  section: '',
  rollNumber: '',
  academicYear: '2026-27',
  districtId: '',
  blockId: '',
  schoolId: '',
};
