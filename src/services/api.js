import axios from "axios";

import handleResponseError from "./handleApiError";
import { getBaseURL, addAuthorizationHeader, handleRequestError } from "./utls";

// Base Axios instance
export const api = axios.create({
  baseURL: getBaseURL(),
  headers: {
    "Content-Type": "application/json",
  },
});

// Request Interceptor to add the Authorization token if it exists
api.interceptors.request.use(
  addAuthorizationHeader, // Add Authorization header
  handleRequestError // Handle request errors
);

// Response Interceptor to handle responses and errors globally
api.interceptors.response.use(
  (response) => response,
  handleResponseError // Handle response errors
);
