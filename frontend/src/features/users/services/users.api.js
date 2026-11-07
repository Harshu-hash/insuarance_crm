import { MOCK_USERS, MOCK_DISTRICTS, MOCK_BLOCKS } from '../mock/users.mock';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const usersApi = {
  getUsers: async (params) => {
    await delay(1000);
    let users = [...MOCK_USERS];
    
    // Filtering logic placeholder
    if (params?.role) {
      users = users.filter(u => u.role === params.role);
    }
    if (params?.search) {
      const s = params.search.toLowerCase();
      users = users.filter(u => 
        u.fullName.toLowerCase().includes(s) || 
        u.email.toLowerCase().includes(s)
      );
    }
    
    return {
      data: users,
      total: users.length,
    };
  },

  getUserById: async (id) => {
    await delay(500);
    const user = MOCK_USERS.find(u => u.id === id);
    if (!user) throw new Error('User not found');
    return user;
  },

  createUser: async (userData) => {
    await delay(1500);
    const newUser = {
      ...userData,
      id: `U-${Math.floor(Math.random() * 1000)}`,
      createdAt: new Date().toISOString(),
      lastLogin: null,
    };
    // In a real app we'd push to DB, here we just return the "saved" object
    return newUser;
  },

  updateUser: async (id, userData) => {
    await delay(1200);
    return { id, ...userData };
  },

  toggleStatus: async (id, status) => {
    await delay(500);
    return { id, status };
  },

  getGeographyOptions: async () => {
    await delay(300);
    return {
      districts: MOCK_DISTRICTS,
      blocks: MOCK_BLOCKS,
    };
  }
};
