import { api } from "../api"; // Importing Axios instance

// Login API Call
export const getEvents = async () => {
  try {
    const response = await api.get("/events");

    return response?.data || [];
  } catch (error) {
    throw new Error("Error while Calling events API");
  }
};

/**
 * Create an event by sending the form data to the server.
 * @param {Object} eventData - The form data for the event creation.
 * @returns {Object} - The server's response.
 */
export const createEventApi = async (eventData) => {
  const payload = {
    title: eventData?.title,
    description: eventData?.description,
    start_date: "2025-05-10",
    category_id: "1",
    language: "English",
    event_type: "online",
    location: eventData?.location,
    online_link: "https://meet.google.com/tdm-svra-rhm",
    is_paid: eventData?.isFreeEvent ? "0" : "1",
    max_capacity: 50,
    current_capacity: 0,
    image: eventData?.file,
  };
  try {
    const formData = new FormData();

    // Append form fields
    Object.keys(payload).forEach((key) => {
      formData.append(key, payload[key]);
    });

    // API call to create an event
    const response = await api.post("/events", formData, {
      headers: {
        "Content-Type": "multipart/form-data", // Required for file uploads
      },
    });

    return response.data; // Return the API response
  } catch (error) {
    throw new Error(
      error.response?.data?.message || "Failed to create the event"
    );
  }
};
