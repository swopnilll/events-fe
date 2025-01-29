import React, { useState } from "react";
import DatePicker from "react-datepicker";

import { format } from "date-fns";

import "react-datepicker/dist/react-datepicker.css"; // import the styles

const DateTimePicker = ({
  label,
  name,
  value,
  onChange,
  error,
  placeholder,
}) => {
  const handleDateChange = (date) => {
    onChange({ target: { name, value: format(date, "yyyy-MM-dd HH:mm:ss") } });
  };

  return (
    <div className="w-full mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <DatePicker
        selected={value}
        onChange={handleDateChange}
        placeholderText={placeholder}
        dateFormat="yyyy-MM-dd HH:mm:ss"
        className={`w-full px-4 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-500" : "focus:ring-blue-500"
        } ${
          error ? "focus:border-red-500" : "focus:border-blue-500"
        } text-gray-700`}
      />
      {error && <p className="mt-1 text-sm text-red-500">{error}</p>}
    </div>
  );
};

export default DateTimePicker;
