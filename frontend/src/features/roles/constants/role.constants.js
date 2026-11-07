/**
 * Role Constants
 * Defines role types, scopes, and statuses.
 */

export const ROLE_TYPES = {
  SYSTEM: 'system',
  CUSTOM: 'custom',
};

export const ROLE_STATUS = {
  ACTIVE: 'active',
  INACTIVE: 'inactive',
};

export const ROLE_SCOPES = {
  ALL: 'all',
  DISTRICT: 'district',
  BLOCK: 'block',
  SCHOOL: 'school',
  OWN: 'own',
};

export const ROLE_SCOPE_LABELS = {
  [ROLE_SCOPES.ALL]: 'All Access',
  [ROLE_SCOPES.DISTRICT]: 'Assigned Districts Only',
  [ROLE_SCOPES.BLOCK]: 'Assigned Blocks Only',
  [ROLE_SCOPES.SCHOOL]: 'Assigned Schools Only',
  [ROLE_SCOPES.OWN]: 'Own Records Only',
};

export const ROLE_SCOPE_DESCRIPTIONS = {
  [ROLE_SCOPES.ALL]: 'Can access all platform records across the system.',
  [ROLE_SCOPES.DISTRICT]: 'Restricted to data mapped to assigned districts.',
  [ROLE_SCOPES.BLOCK]: 'Restricted to records within assigned blocks.',
  [ROLE_SCOPES.SCHOOL]: 'Restricted to school-level operational data.',
  [ROLE_SCOPES.OWN]: 'Can only access data they created or are assigned to.',
};
