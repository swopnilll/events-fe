import React from "react";

import PropTypes from "prop-types";

import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext/useAuth";

const ProtectedRoute = ({ children = null }) => {
  const { isAuthenticated } = useAuth();

  if (!isAuthenticated) {
    // show toast error only registered user can create events
    // Show toast error
    console.log("You are not logged in . Please login to continue", "error");

    // Redirect to login page
    return <Navigate to="/auth/login" />;
  }

  return children;
};

ProtectedRoute.propTypes = {
  children: PropTypes.node,
};

export default ProtectedRoute;
