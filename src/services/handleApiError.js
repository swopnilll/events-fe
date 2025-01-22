const handleApiError = (error) => {
  // Default message
  let message = "An unexpected error occurred. Please try again.";

  if (error.response) {
    // Server responded with a status code outside the 2xx range
    const { status, data } = error.response;

    // Customize error messages based on status codes
    switch (status) {
      case 400:
        message = data.message || "Bad Request. Please check your input.";
        break;
      case 401:
        message = data.message || "Unauthorized. Please login again.";
        break;
      case 403:
        message = data.message || "Forbidden. You do not have permission.";
        break;
      case 404:
        message = data.message || "Not Found. The resource could not be found.";
        break;
      case 500:
        message =
          data.message || "Internal Server Error. Please try again later.";
        break;
      default:
        message = data.message || "Something went wrong on the server.";
        break;
    }

    console.error(`API Error ${status}:`, message);
  } else if (error.request) {
    // No response received from the server
    console.error("No response from server:", error.request);
    message = "Unable to connect to the server. Please try again later.";
  } else {
    // Error occurred while setting up the request
    console.error("Request setup error:", error.message);
    message = "An unexpected error occurred. Please try again.";
  }

  // You can replace this with a toast component later
  console.log("Error Message: ", message);

  // For now, using alert for user feedback. To Replace with toast)
  alert(message);
};

export default handleApiError;
