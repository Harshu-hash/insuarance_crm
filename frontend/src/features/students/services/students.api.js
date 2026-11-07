import { MOCK_STUDENTS } from '../mock/students.mock';

/**
 * Students API Service (Mock)
 */
export const studentsApi = {
  getStudents: async (params = {}) => {
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    let filtered = [...MOCK_STUDENTS];
    
    if (params.search) {
      const search = params.search.toLowerCase();
      filtered = filtered.filter(s => 
        s.name.toLowerCase().includes(search) || 
        s.studentId.toLowerCase().includes(search) ||
        s.guardianMobile.includes(search)
      );
    }
    
    if (params.districtId) {
      filtered = filtered.filter(s => s.districtId === params.districtId);
    }
    
    if (params.blockId) {
      filtered = filtered.filter(s => s.blockId === params.blockId);
    }
    
    if (params.schoolId) {
      filtered = filtered.filter(s => s.schoolId === params.schoolId);
    }
    
    if (params.class) {
      filtered = filtered.filter(s => s.class === params.class);
    }
    
    if (params.status) {
      filtered = filtered.filter(s => s.status === params.status);
    }

    if (params.policyStatus) {
      filtered = filtered.filter(s => s.policyStatus === params.policyStatus);
    }

    if (params.hasClaim === 'true') {
      filtered = filtered.filter(s => s.claimsCount > 0);
    } else if (params.hasClaim === 'false') {
      filtered = filtered.filter(s => s.claimsCount === 0);
    }
    
    return {
      success: true,
      data: filtered,
      total: filtered.length,
    };
  },

  getStudentById: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 600));
    const student = MOCK_STUDENTS.find(s => s.id === id);
    
    if (!student) {
      throw new Error('Student not found');
    }
    
    return {
      success: true,
      data: {
        ...student,
        academicYear: '2026-27',
        section: 'A',
        rollNumber: '101',
        guardianRelation: 'Father',
        alternateMobile: '9998887776',
        guardianEmail: 'guardian@example.com',
        remarks: 'Punctual and consistent in academic participation.',
      },
    };
  },

  updateStudent: async (id, payload) => {
    await new Promise(resolve => setTimeout(resolve, 1200));
    return {
      success: true,
      data: { ...payload, id, updatedAt: new Date().toISOString() },
    };
  },

  getStudentSummary: async (id) => {
    await new Promise(resolve => setTimeout(resolve, 400));
    return {
      success: true,
      data: {
        activeEnrollment: true,
        policyNo: 'POL-330404',
        premiumPaid: 500,
        expiryDate: '2027-04-19',
        totalClaims: 1,
        approvedClaims: 1,
        pendingClaims: 0,
        rejectedClaims: 0,
      }
    };
  }
};
