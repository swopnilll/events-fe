import { useState, useMemo } from "react";
import PropTypes from "prop-types";

import { ToasterContext } from "./ToasterContext";

export const ToasterProvider = ({ children }) => {
  const [toast, setToast] = useState({ message: "", type: "", visible: false });

  const showToast = (message, type = "info") => {
    setToast({ message, type, visible: true });
    // Automatically hide the toast after 3 seconds
    setTimeout(() => {
      setToast((prevToast) => ({ ...prevToast, visible: false }));
    }, 3000);
  };

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      toast,
      showToast,
    }),
    [toast, showToast]
  );

  ToasterProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <ToasterContext.Provider value={contextValue}>
      {children}
    </ToasterContext.Provider>
  );
};
