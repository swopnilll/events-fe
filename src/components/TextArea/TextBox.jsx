import React from "react";

const TextBox = ({
  label,
  placeholder,
  name,
  value,
  onChange,
  error,
}) => {
  return (
    <div className="w-full mb-4">
      <label
        htmlFor={name}
        className="block text-sm font-medium text-gray-700 mb-1"
      >
        {label}
      </label>
      <textarea
        id={name}
        name={name}
        value={value}
        onChange={onChange}
        placeholder={placeholder}
        rows="4" // You can adjust the number of rows or make it dynamic
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

export default TextBox;
