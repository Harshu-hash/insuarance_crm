import { MOCK_DISTRICTS } from '../mock/districts.mock';
import { DISTRICT_STATUS } from '../constants/district.constants';

/**
 * Districts API Service (Mock)
 */
export const districtsApi = {
  getDistricts: async (params = {}) => {
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network
    
    let filtered = [...MOCK_DISTRICTS];
    
    if (params.search) {
      const search = params.search.toLowerCase();
      filtered = filtered.filter(d => 
        d.name.toLowerCase().includes(search) || 
        d.code.toLowerCase().includes(search)
      );
    }
    
    if (params.status) {
      filtered = filtered.filter(d => d.status === params.status);
    }

    if (params.managerType) {
      if (params.managerType === 'assigned') {
        filtered = filtered.filter(d => d.manager !== null);
      } else {
        filtered = filtered.filter(d => d.manager === null);
      }
    }

    if (params.performance) {
      filtered = filtered.filter(d => d.performance === params.performance);
    }
    
    return {
      success: true,
      data: filtered,
      total: filtered.length,
    };
  },

  getDistrictById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const district = MOCK_DISTRICTS.find(d => d.id === id);
    
    if (!district) {
      throw new Error('District not found');
    }
    
    return {
      success: true,
      data: district,
    };
  },

  createDistrict: async (payload) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newDistrict = {
      ...payload,
      id: `dist-${Math.floor(Math.random() * 1000)}`,
      metrics: {
        totalBlocks: 0,
        totalSchools: 0,
        totalStudents: 0,
        activeEnrollments: 0,
        claimsCount: 0,
        premiumCollected: 0,
        incentivesGenerated: 0,
      },
      performance: 'low_activity',
      createdAt: new Date().toISOString(),
      updatedAt: new Date().toISOString(),
    };
    
    return {
      success: true,
      data: newDistrict,
    };
  },

  updateDistrict: async (id, payload) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true,
      data: { ...payload, id, updatedAt: new Date().toISOString() },
    };
  },

  toggleDistrictStatus: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true };
  },

  getManagerOptions: async () => {
    await new Promise(resolve => setTimeout(resolve, 300));
    // Simulated from user list
    return {
      success: true,
      data: [
        { value: 'U-003', label: 'Rajesh Kumar (Lucknow DM)' },
        { value: 'U-007', label: 'Suresh Raina (Kanpur DM)' },
        { value: 'U-009', label: 'Vikas Khanna (Agra DM)' },
        { value: 'U-012', label: 'Anjali Gupta (Jhansi DM)' },
        { value: 'U-015', label: 'Mohit Sharma (Unassigned)' },
      ]
    };
  }
};
