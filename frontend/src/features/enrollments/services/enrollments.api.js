import { MOCK_ENROLLMENTS, MOCK_ENROLLMENT_SUMMARY } from '../mock/enrollments.mock';

const delay = (ms) => new Promise(resolve => setTimeout(resolve, ms));

export const enrollmentsApi = {
  getEnrollments: async (params = {}) => {
    console.log('Fetching enrollments with params:', params);
    await delay(800);
    
    let filteredData = [...MOCK_ENROLLMENTS];
    
    if (params.search) {
      const search = params.search.toLowerCase();
      filteredData = filteredData.filter(enr => 
        enr.id.toLowerCase().includes(search) ||
        enr.studentName.toLowerCase().includes(search) ||
        enr.studentId.toLowerCase().includes(search) ||
        enr.guardianMobile.includes(search)
      );
    }
    
    if (params.districtId) {
      filteredData = filteredData.filter(enr => enr.district === params.districtId);
    }
    
    if (params.blockId) {
      filteredData = filteredData.filter(enr => enr.block === params.blockId);
    }
    
    if (params.schoolId) {
      filteredData = filteredData.filter(enr => enr.school === params.schoolId);
    }
    
    if (params.paymentStatus) {
      filteredData = filteredData.filter(enr => enr.paymentStatus === params.paymentStatus);
    }
    
    if (params.policyStatus) {
      filteredData = filteredData.filter(enr => enr.policyStatus === params.policyStatus);
    }

    return {
      data: filteredData,
      total: filteredData.length,
      page: params.page || 1,
      limit: params.limit || 10
    };
  },

  getEnrollmentById: async (id) => {
    await delay(500);
    const enrollment = MOCK_ENROLLMENTS.find(enr => enr.id === id);
    if (!enrollment) throw new Error('Enrollment not found');
    return enrollment;
  },

  getEnrollmentSummary: async () => {
    await delay(400);
    return MOCK_ENROLLMENT_SUMMARY;
  },

  exportEnrollments: async (params = {}) => {
    await delay(1500);
    return { success: true, message: 'Export started' };
  }
};
