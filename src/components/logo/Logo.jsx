import React from "react";
import PropTypes from "prop-types";

const Logo = ({ className }) => {
  return (
    <img
      src="/images/Logo2.svg"
      alt="Elegant Event Logo"
      className={`max-h-full w-auto ${className}`}
    />
  );
};

Logo.propTypes = {
  className: PropTypes.string,
};

Logo.defaultProps = {
  className: "",
};

export default Logo;
