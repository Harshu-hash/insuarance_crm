import { z } from 'zod';
import { ROLE_TYPES, ROLE_STATUS, ROLE_SCOPES } from '../constants/role.constants';

/**
 * Role Schema for validation using Zod
 */
export const roleSchema = z.object({
  name: z
    .string()
    .trim()
    .min(3, 'Role name must be at least 3 characters')
    .max(50, 'Role name must be less than 50 characters'),
  key: z
    .string()
    .trim()
    .min(3, 'Role key must be at least 3 characters')
    .regex(/^[a-z0-9_]+$/, 'Role key must be lowercase alphanumeric with underscores')
    .max(50, 'Role key must be less than 50 characters'),
  description: z
    .string()
    .trim()
    .max(200, 'Description must be less than 200 characters')
    .optional()
    .or(z.literal('')),
  type: z.nativeEnum(ROLE_TYPES).default(ROLE_TYPES.CUSTOM),
  status: z.nativeEnum(ROLE_STATUS).default(ROLE_STATUS.ACTIVE),
  scope: z.nativeEnum(ROLE_SCOPES).default(ROLE_SCOPES.ALL),
  permissions: z
    .array(z.string())
    .min(1, 'At least one permission must be assigned'),
});

export const roleDefaultValues = {
  name: '',
  key: '',
  description: '',
  type: ROLE_TYPES.CUSTOM,
  status: ROLE_STATUS.ACTIVE,
  scope: ROLE_SCOPES.ALL,
  permissions: [],
};
