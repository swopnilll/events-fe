import { api } from "../api"; // Importing Axios instance

// Login API Call
export const loginApi = async (email, password) => {
  try {
    const response = await api.post("/login", { email, password });

    const { data } = response;

    return { data }; // Return token and user data
  } catch (error) {
    throw new Error("Login failed");
  }
};

// Logout API Call
export const logoutApi = () => {
  return api.post("/logout");
};
