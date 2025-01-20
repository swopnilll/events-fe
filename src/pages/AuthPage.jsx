import PropTypes from "prop-types";

const AuthPage = ({ action }) => {
  return (
    <>
      <h1>Auth Page</h1>
      <h2>{action}</h2>
    </>
  );
};

AuthPage.propTypes = {
  action: PropTypes.string.isRequired, // Specify the expected type for 'action'
};

export default AuthPage;
