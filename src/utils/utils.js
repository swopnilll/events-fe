/**
 * Converts a date string to a user-friendly format.
 * @param {string} dateString - The date string in "YYYY-MM-DD HH:mm:ss" format.
 * @param {object} options - Optional configuration for custom format.
 * @returns {string} Formatted date string.
 */
export const formatDate = (dateString, options = {}) => {
  // Default options for date formatting
  const defaultOptions = {
    weekday: undefined, // e.g., "Monday" (set to 'long' for full day name)
    year: "numeric",
    month: "long", // e.g., "May"
    day: "numeric", // e.g., "10"
  };

  // Combine default options with any provided options
  const formatOptions = { ...defaultOptions, ...options };

  // Parse the date string into a Date object
  const date = new Date(dateString);

  // Handle invalid date
  if (isNaN(date)) {
    return "Invalid Date";
  }

  // Format the date using Intl.DateTimeFormat
  return new Intl.DateTimeFormat("en-US", formatOptions).format(date);
};
