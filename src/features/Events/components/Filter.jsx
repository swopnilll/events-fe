import React from "react";

const Filter = ({ filterBy, options }) => {
  return (
    <div className="space-y-2">
      {/* Filter Category */}
      <div className="font-semibold text-gray-700">{filterBy}</div>

      {/* Filter Options */}
      {options.map((option, index) => (
        <div key={index} className="flex items-center space-x-2">
          <input
            type="checkbox"
            id={`filter-${filterBy}-${index}`}
            className="w-5 h-5 text-gray-500 cursor-pointer"
            onChange={(e) => option.handler(e, filterBy, option.name)}
          />
          <label
            htmlFor={`filter-${filterBy}-${index}`}
            className="text-gray-600 cursor-pointer"
          >
            {option.name}
          </label>
        </div>
      ))}
    </div>
  );
};

export default Filter;
