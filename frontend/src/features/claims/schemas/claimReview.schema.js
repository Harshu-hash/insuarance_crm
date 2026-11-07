import { z } from 'zod';

export const claimReviewSchema = z.object({
  decision: z.enum(['approve', 'reject', 'raise_query', 'mark_under_review'], {
    required_error: "Please select a decision",
  }),
  approvedAmount: z.coerce.number().optional(),
  rejectionReason: z.string().optional(),
  queryMessage: z.string().optional(),
  reviewerNotes: z.string().min(5, "Reviewer notes must be at least 5 characters"),
}).refine((data) => {
  if (data.decision === 'approve') {
    return data.approvedAmount && data.approvedAmount > 0;
  }
  return true;
}, {
  message: "Approved amount is required and must be greater than 0",
  path: ["approvedAmount"],
}).refine((data) => {
  if (data.decision === 'reject') {
    return data.rejectionReason && data.rejectionReason.length > 0;
  }
  return true;
}, {
  message: "Rejection reason is required",
  path: ["rejectionReason"],
}).refine((data) => {
  if (data.decision === 'raise_query') {
    return data.queryMessage && data.queryMessage.length > 0;
  }
  return true;
}, {
  message: "Query message is required",
  path: ["queryMessage"],
});
