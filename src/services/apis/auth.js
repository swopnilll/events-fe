import { api } from "../api"; // Importing Axios instance

// Login API Call
export const loginApi = async (username, password) => {
  try {
    console.log({ username, password });

    //const response = await api.post("/login", { username, password });

    //const { userData } = response.data;

    const userData = {
      fullname: "swopnil",
    };

    return { userData }; // Return token and user data
  } catch (error) {
    throw new Error("Login failed");
  }
};

// Logout API Call
export const logoutApi = () => {
  return api.post("/logout");
};
