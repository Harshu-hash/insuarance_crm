import { useState, useEffect, useCallback } from 'react';
import { claimsApi } from '../services/claims.api';

export const useClaimDetails = (id) => {
  const [claim, setClaim] = useState(null);
  const [documents, setDocuments] = useState([]);
  const [timeline, setTimeline] = useState([]);
  const [eligibility, setEligibility] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchDetails = useCallback(async () => {
    if (!id) return;
    setLoading(true);
    try {
      const [claimData, docData, timelineData, eligibilityData] = await Promise.all([
        claimsApi.getClaimById(id),
        claimsApi.getClaimDocuments(id),
        claimsApi.getClaimTimeline(id),
        claimsApi.getClaimEligibility(id)
      ]);
      
      setClaim(claimData);
      setDocuments(docData);
      setTimeline(timelineData);
      setEligibility(eligibilityData);
      setError(null);
    } catch (err) {
      setError(err.message || 'Failed to fetch claim details');
    } finally {
      setLoading(false);
    }
  }, [id]);

  useEffect(() => {
    fetchDetails();
  }, [fetchDetails]);

  return {
    claim,
    documents,
    timeline,
    eligibility,
    loading,
    error,
    refresh: fetchDetails
  };
};
