import { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

import { AuthContext } from "./AuthContext";
import { loginApi, logoutApi } from "../../services/apis/auth";
import { registerApi } from "../../services/apis/register";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User object
  const [loading, setLoading] = useState(false); // Loading state
  const [error, setError] = useState(null); // Error state for login
  const isAuthenticated = !!user; // Boolean to check if user is logged in

  // Initialize user from localStorage on mount
  useEffect(() => {
    const storedUser = localStorage.getItem("authUser");
    if (storedUser) {
      setUser(JSON.parse(storedUser)); // Restore user from localStorage
    }
    setLoading(false); // Done loading
  }, []);

  // Login function
  const login = async (email, password) => {
    setLoading(true);
    setError(null); // Clear previous errors

    try {
      const { data } = await loginApi(email, password);

      setUser(data?.user);

      localStorage.setItem("authUser", JSON.stringify(data?.user));
      localStorage.setItem("authToken", data?.token);
    } catch (error) {
      console.error("Login failed:", error);
      setError("Invalid email or password. Please try again."); // Set error message
    } finally {
      setLoading(false);
    }
  };

  // Register function
  const register = async (formData) => {
    setLoading(true);
    setError(null);

    try {
      const { data } = await registerApi(formData); // Call the register API

      // Optionally log in the user after successful registration
      setUser(data?.user);
      localStorage.setItem("authUser", JSON.stringify(data?.user));
      localStorage.setItem("authToken", data?.token);

      return { success: true };
    } catch (error) {
      console.error("Registration failed:", error);
      setError(error.message || "Registration failed.");
      return { success: false, error: error.message };
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    try {
      await logoutApi(); // Call logout API
      setUser(null);
      localStorage.removeItem("authUser"); // Remove user from localStorage
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated,
      login,
      logout,
      register,
      error,
    }),
    [user, loading, isAuthenticated, error]
  );

  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
