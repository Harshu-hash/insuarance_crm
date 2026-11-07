import { MOCK_SCHOOLS } from '../mock/schools.mock';

/**
 * Schools API Service (Mock)
 */
export const schoolsApi = {
  getSchools: async (params = {}) => {
    await new Promise(resolve => setTimeout(resolve, 800)); // Simulate network
    
    let filtered = [...MOCK_SCHOOLS];
    
    if (params.search) {
      const search = params.search.toLowerCase();
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(search) || 
        s.code.toLowerCase().includes(search)
      );
    }
    
    if (params.districtId) {
      filtered = filtered.filter(s => s.districtId === params.districtId);
    }
    
    if (params.blockId) {
      filtered = filtered.filter(s => s.blockId === params.blockId);
    }
    
    if (params.status) {
      filtered = filtered.filter(s => s.status === params.status);
    }

    if (params.schoolType) {
      filtered = filtered.filter(s => s.schoolType === params.schoolType);
    }

    if (params.activity) {
      filtered = filtered.filter(s => s.performance === params.activity);
    }
    
    return {
      success: true,
      data: filtered,
      total: filtered.length,
    };
  },

  getSchoolById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    const school = MOCK_SCHOOLS.find(s => s.id === id);
    
    if (!school) {
      throw new Error('School not found');
    }
    
    return {
      success: true,
      data: {
        ...school,
        description: 'Primary educational institution serving local communities with a focus on holistic development.',
        address: {
          line1: '123, Institutional Area',
          line2: 'Sector 5',
          city: 'Lucknow',
          pincode: '226001'
        },
        coordinator: {
          name: 'Ms. Anita Sharma',
          mobile: '9876543210',
          email: 'anita.s@example.com'
        }
      },
    };
  },

  createSchool: async (payload) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    const newSchool = {
      ...payload,
      id: `sch-${Math.floor(Math.random() * 1000)}`,
      districtName: 'Mock District',
      blockName: 'Mock Block',
      metrics: {
        totalStudents: 0,
        activeEnrollments: 0,
        claimsCount: 0,
        premiumCollected: 0,
      },
      performance: 'stable',
      createdAt: new Date().toISOString(),
    };
    
    return {
      success: true,
      data: newSchool,
    };
  },

  updateSchool: async (id, payload) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    return {
      success: true,
      data: { ...payload, id, updatedAt: new Date().toISOString() },
    };
  },

  toggleSchoolStatus: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 500));
    return { success: true };
  }
};
