// Function to get auth token from localStorage
export const getAuthToken = () => {
  return localStorage.getItem("authToken");
};

// Function to get the base URL from environment variables with a fallback to localhost
export const getBaseURL = () => {
  return import.meta.env.VITE_API_URL || "http://localhost:3000/api";
};

// Function to add Authorization header to the request config
export const addAuthorizationHeader = (config) => {
  const token = getAuthToken();

  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }

  return config;
};

// Function to handle request errors
export const handleRequestError = (error) => {
  // Here you can add any custom error handling logic for request errors if needed
  return Promise.reject(error); // Reject the error to pass it to the next handler
};
