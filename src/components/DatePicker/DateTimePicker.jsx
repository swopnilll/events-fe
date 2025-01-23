import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
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
    onChange({ target: { name, value: date } });
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
        showTimeSelect
        dateFormat="Pp"
        timeIntervals={15}
        timeCaption="Time"
        placeholderText={placeholder}
        className={`w-full px-4 py-2 border ${
          error ? "border-red-500" : "border-gray-300"
        } rounded-lg shadow-sm focus:outline-none focus:ring-2 ${
          error ? "focus:ring-red-500" : "focus:ring-blue-500"
        } ${error ? "focus:border-red-500" : "focus:border-blue-500"} text-gray-700`}
      />
      {error && (
        <p className="mt-1 text-sm text-red-500">{error}</p>
      )}
    </div>
  );
};

export default DateTimePicker;
