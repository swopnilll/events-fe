import { api } from "../api"; // Importing Axios instance

// Login API Call
export const registerApi = async (formData) => {
  const payload = {
    name: formData?.fullName,
    email: formData?.email,
    password: formData?.password,
    password_confirmation: formData?.password,
  };

  try {
    const response = await api.post("/register", payload);

    const { data } = response;

    return { data }; // Return token and user data
  } catch (error) {
    throw new Error("Registration failed");
  }
};
