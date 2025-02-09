import React from "react";
import PropTypes from "prop-types";

import { AuthProvider } from "./AuthContext/AuthProvider";

const GlobalProvider = ({ children }) => {
  return (
    <AuthProvider>
      {/* Add other providers here */}
      {children}
    </AuthProvider>
  );
};

GlobalProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
export default GlobalProvider;
