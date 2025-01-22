import { useState, useMemo } from "react";

import PropTypes from "prop-types";

import { AuthContext } from "./AuthContext";
import { loginApi, logoutApi } from "../../services/apis/auth";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null); // User object

  const [loading, setLoading] = useState(true); // Loading state

  const isAuthenticated = !!user;

  // Login function
  const login = async (email, password) => {
    console.log("Login called");

    setLoading(true);
    try {
      const { userData } = await loginApi(email, password); // Direct API call

      setUser(userData);
    } catch (error) {
      console.error("Login failed:", error);
    } finally {
      setLoading(false);
    }
  };

  // Logout function
  const logout = async () => {
    await logoutApi(); // Call logout API
    setUser(null);
  };

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      user,
      loading,
      isAuthenticated,
      login,
      logout,
    }),
    [user, loading, isAuthenticated]
  );

  AuthProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <AuthContext.Provider value={contextValue}>{children}</AuthContext.Provider>
  );
};
