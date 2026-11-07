import dayjs from 'dayjs';

/**
 * Formats a date string into a readable format
 */
export const formatDate = (date, format = 'DD MMM YYYY') => {
  if (!date) return '-';
  return dayjs(date).format(format);
};

/**
 * Formats a number as Indian Currency (INR)
 */
export const formatCurrency = (amount) => {
  return new Intl.NumberFormat('en-IN', {
    style: 'currency',
    currency: 'INR',
    maximumFractionDigits: 0,
  }).format(amount);
};

/**
 * Simple helper to truncate text
 */
export const truncateText = (text, length = 30) => {
  if (!text) return '';
  if (text.length <= length) return text;
  return text.substring(0, length) + '...';
};
