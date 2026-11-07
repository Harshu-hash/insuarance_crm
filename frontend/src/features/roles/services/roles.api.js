import { MOCK_ROLES } from '../mock/roles.mock';

/**
 * Roles API Service (Mock)
 * In a real app, this would use axios to call the backend.
 */

// Simulate network delay
const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const rolesApi = {
  getRoles: async (params = {}) => {
    await delay(600);
    let filtered = [...MOCK_ROLES];
    
    if (params.search) {
      const q = params.search.toLowerCase();
      filtered = filtered.filter(r => 
        r.name.toLowerCase().includes(q) || 
        r.key.toLowerCase().includes(q)
      );
    }
    
    if (params.status) {
      filtered = filtered.filter(r => r.status === params.status);
    }
    
    if (params.type) {
      filtered = filtered.filter(r => r.type === params.type);
    }
    
    if (params.scope) {
      filtered = filtered.filter(r => r.scope === params.scope);
    }
    
    return {
      data: filtered,
      total: filtered.length,
      page: 1,
      limit: 10
    };
  },

  getRoleById: async (id) => {
    await delay(400);
    const role = MOCK_ROLES.find(r => r.id === id);
    if (!role) throw new Error('Role not found');
    return { data: role };
  },

  createRole: async (payload) => {
    await delay(800);
    const newRole = {
      ...payload,
      id: `role-${Math.random().toString(36).substr(2, 9)}`,
      assignedUsers: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    // In mock, we don't persist to a real DB, but we'll return it
    return { data: newRole };
  },

  updateRole: async (id, payload) => {
    await delay(700);
    const index = MOCK_ROLES.findIndex(r => r.id === id);
    if (index === -1) throw new Error('Role not found');
    
    const updated = {
      ...MOCK_ROLES[index],
      ...payload,
      updatedAt: new Date().toISOString()
    };
    return { data: updated };
  },

  toggleRoleStatus: async (id) => {
    await delay(400);
    const role = MOCK_ROLES.find(r => r.id === id);
    if (!role) throw new Error('Role not found');
    
    const newStatus = role.status === 'active' ? 'inactive' : 'active';
    return { data: { ...role, status: newStatus } };
  },

  cloneRole: async (id) => {
    await delay(600);
    const role = MOCK_ROLES.find(r => r.id === id);
    if (!role) throw new Error('Role not found');
    
    const clone = {
      ...role,
      id: `role-${Math.random().toString(36).substr(2, 9)}`,
      name: `${role.name} (Copy)`,
      key: `${role.key}_copy`,
      type: 'custom',
      assignedUsers: 0,
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    return { data: clone };
  },

  getRoleUsers: async (id) => {
    await delay(300);
    // Return sample users
    return {
      data: [
        { name: 'Amit Sharma', email: 'amit.s@example.com' },
        { name: 'Priya Verma', email: 'priya.v@example.com' },
        { name: 'Rahul Gupta', email: 'rahul.g@example.com' },
      ],
      total: 3
    };
  }
};
