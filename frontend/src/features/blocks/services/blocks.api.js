import { MOCK_BLOCKS } from '../mock/blocks.mock';

/**
 * Blocks API Service (Mock)
 */
export const blocksApi = {
  getBlocks: async (params = {}) => {
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network
    
    let filtered = [...MOCK_BLOCKS];
    
    if (params.search) {
      const search = params.search.toLowerCase();
      filtered = filtered.filter(b => 
        b.name.toLowerCase().includes(search) || 
        b.code.toLowerCase().includes(search)
      );
    }
    
    if (params.districtId) {
      filtered = filtered.filter(b => b.districtId === params.districtId);
    }
    
    if (params.status) {
      filtered = filtered.filter(b => b.status === params.status);
    }

    if (params.managerType) {
      if (params.managerType === 'assigned') {
        filtered = filtered.filter(b => b.manager !== null);
      } else {
        filtered = filtered.filter(b => b.manager === null);
      }
    }

    if (params.performance) {
      filtered = filtered.filter(b => b.performance === params.performance);
    }
    
    return {
      success: true,
      data: filtered,
      total: filtered.length,
    };
  },

  getBlockById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const block = MOCK_BLOCKS.find(b => b.id === id);
    
    if (!block) {
      throw new Error('Block not found');
    }
    
    return {
      success: true,
      data: block,
    };
  },

  createBlock: async (payload) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newBlock = {
      ...payload,
      id: `block-${Math.floor(Math.random() * 1000)}`,
      districtName: 'Mock District', // In real API, this would be joined
      metrics: {
        totalSchools: 0,
        totalStudents: 0,
        activeEnrollments: 0,
        claimsCount: 0,
        incentiveGenerated: 0,
      },
      performance: 'stable',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    return {
      success: true,
      data: newBlock,
    };
  },

  updateBlock: async (id, payload) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true,
      data: { ...payload, id, updatedAt: new Date().toISOString() },
    };
  },

  toggleBlockStatus: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true };
  },

  getManagerOptions: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    return {
      success: true,
      data: [
        { value: 'U-101', label: 'Amitabh Singh (Existing BM)' },
        { value: 'U-102', label: 'Priya Verma (Existing BM)' },
        { value: 'U-105', label: 'Sanjay Dutt (Existing BM)' },
        { value: 'U-200', label: 'Ravi Teja (Available)' },
        { value: 'U-201', label: 'Nisha Aggarwal (Available)' },
      ]
    };
  }
};
