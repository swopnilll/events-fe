import { useState, useMemo, useEffect } from "react";
import PropTypes from "prop-types";

import { AuthContext } from "./AuthContext";
import { loginApi, logoutApi } from "../../services/apis/auth";

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
