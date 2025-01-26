import { useState, useMemo } from "react";
import PropTypes from "prop-types";

import { LoaderContext } from "./LoaderContex";

export const LoaderProvider = ({ children }) => {
  const [isLoading, setIsLoading] = useState(false);

  const showLoader = () => setIsLoading(true);
  const hideLoader = () => setIsLoading(false);

  // Memoize context value to prevent unnecessary re-renders
  const contextValue = useMemo(
    () => ({
      isLoading,
      showLoader,
      hideLoader,
    }),
    [isLoading, showLoader, hideLoader]
  );

  LoaderProvider.propTypes = {
    children: PropTypes.node.isRequired,
  };

  return (
    <LoaderContext.Provider value={contextValue}>
      {children}
    </LoaderContext.Provider>
  );
};
