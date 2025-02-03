import { api } from "../api"; // Importing Axios instance

export const getEvents = async () => {
  try {
    const response = await api.get("/events");

    console.log({ response });

    return response?.data || [];
  } catch (error) {
    throw new Error("Error while Calling events API");
  }
};

// Get Event Detail API Call
export const getEventDetail = async (eventId) => {
  try {
    if (!eventId) throw new Error("Event ID is required");

    const response = await api.get(`/events/${eventId}`);

    console.log({ response });

    return response?.data || {};
  } catch (error) {
    console.error("Error while calling events API:", error);
    throw new Error("Error while calling events API");
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
    start_date: eventData.dateTime,
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
