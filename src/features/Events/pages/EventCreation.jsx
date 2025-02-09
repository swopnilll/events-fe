import React, { useState } from "react";

import { useNavigate } from "react-router-dom";

import DropZone from "../../../components/DropZone";
import TextBox from "../../../components/TextArea/TextBox";
import InputField from "../../../components/InputField/InputField";
import DateTimePicker from "../../../components/DatePicker/DateTimePicker";

import { createEventApi } from "../../../services/apis/events";

const EventCreation = () => {
  const [formData, setFormData] = useState({
    title: "",
    category: "1",
    dateTime: "",
    location: "",
    description: "",
    file: "",
    isFreeEvent: true,
    price: "",
  });

  const [errors, setErrors] = useState({});

  const navigate = useNavigate();

  const handleDrop = (acceptedFiles) => {
    if (acceptedFiles.length > 0) {
      console.log(acceptedFiles[0]);

      setFormData({ ...formData, file: acceptedFiles[0] });

      setErrors((prevErrors) => ({
        ...prevErrors,
        file: "",
      }));
    } else {
      console.log("Invalid file type or no file selected!");
    }
  };

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });

    // Clear error for the field being modified
    setErrors((prevErrors) => ({
      ...prevErrors,
      [name]: "",
    }));
  };

  // Validate inputs
  const validate = () => {
    const newErrors = {};

    if (!formData.title) {
      newErrors.title = "Title is required.";
    }

    if (!formData.category) {
      newErrors.category = "Category is required.";
    }

    if (!formData.dateTime) {
      newErrors.dateTime = "Date Time required.";
    }

    if (!formData.location) {
      newErrors.location = "Location is required.";
    }

    if (!formData.description) {
      newErrors.description = "Description is required.";
    }

    if (!formData.file) {
      newErrors.file = "Feature Image is required.";
    }

    // Validation for isFreeEvent
    if (typeof formData.isFreeEvent !== "boolean") {
      newErrors.isFreeEvent = "Event status (free or paid) must be selected.";
    }

    if (!formData.title) {
      newErrors.price = "Price is required.";
    }

    return newErrors;
  };

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    const validationErrors = validate();

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    // API call or further processing logic for event submission
    try {
      const response = await createEventApi(formData);

      if (response?.sucess) {
        console.log("Event Created Success");
      }
      navigate("/events"); // Redirect to events page
    } catch (error) {
      console.log(error.message, "error");
    }
  };

  return (
    <div className="pb-12">
      {/* <ArrowLeft className="hidden md:block w-8 h-8 text-black cursor-pointer left-0 top-8" /> */}
      <div className="p-4 w-full pt-10 md:max-w-[1920px] md:w-[90%] md:mx-auto relative">
        <p className="text-3xl font-bold mb-8 text-center">Create New Event</p>

        <form className="h-3/4 w-2/4 flex flex-col gap-8 mx-auto">
          <div className="flex flex-col gap-4">
            <p className="text-xl">Event Details</p>
            <InputField
              label="Event Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              placeholder="Enter your Event Title"
              error={errors.title}
            />

            {/* <InputField
							label="Event Category"
							name="category"
							value={formData.category}
							onChange={handleChange}
							placeholder="Enter your Event Category"
							error={errors.category}
						/> */}
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl">Date & Time</p>
            <DateTimePicker
              label="Pick a Date and Time"
              name="dateTime"
              value={formData.dateTime}
              onChange={handleChange}
              error={errors.dateTime}
              placeholder="Select a date and time"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl">Location</p>
            <InputField
              label="Where will your event take place ?"
              name="location"
              value={formData.location}
              onChange={handleChange}
              error={errors.location}
              placeholder="Please enter a location"
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl">Additional Information</p>
            <TextBox
              label="Event Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
              error={errors.description}
              placeholder="Type your message here..."
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl">Upload Image</p>
            <DropZone
              label="Add image for the event"
              onDrop={handleDrop}
              error={errors.file}
            />
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl">What type of event are you running?</p>

            <div className="flex flex-col md:flex-row gap-8">
              {/* Ticketed Event */}
              <div
                className={`w-full flex flex-col items-center gap-3 border-2 rounded-lg p-4 cursor-pointer ${
                  formData.isFreeEvent ? "border-gray-300" : "border-black"
                }`}
                onClick={() => setFormData({ ...formData, isFreeEvent: false })}
              >
                <img
                  src="/images/ticket.svg"
                  alt="Ticketed Event"
                  className="w-20 h-20"
                />
                <p className="text-md text-black">Ticketed Event</p>
                <p className="text-sm text-gray-500">
                  My event requires tickets for entry
                </p>
              </div>

              {/* Free Event */}
              <div
                className={`w-full flex flex-col items-center gap-3 border-2 rounded-lg p-4 cursor-pointer ${
                  formData.isFreeEvent ? "border-black" : "border-gray-300"
                }`}
                onClick={() => setFormData({ ...formData, isFreeEvent: true })}
              >
                <img
                  src="images/free-event-image.svg"
                  alt="Free Event"
                  className="w-20 h-20"
                />
                <p className="text-md text-black">Free Event</p>
                <p className="text-sm text-gray-500">
                  I am running a free event
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-col gap-4">
            <p className="text-xl">What tickets are you selling?</p>
            <InputField
              label="Ticket Price"
              name="price"
              value={formData.price}
              onChange={handleChange}
              placeholder="Enter your Event Ticket Price"
              error={errors.price}
            />
          </div>

          <button
            className="mt-4 w-full px-4 py-2 bg-[#2b293dd3] text-white font-semibold rounded-lg shadow hover:bg-[#2b293d] transition duration-300"
            onClick={handleSubmit}
          >
            Create Event
          </button>
        </form>
      </div>
    </div>
  );
};

export default EventCreation;
