import React from "react";

const Filter = ({ filterBy, options, type = "checkbox" }) => {
  return (
    <div className="space-y-4">
      {/* Conditional rendering for checkbox or tag buttons */}
      {type === "checkbox" ? (
        <span>
          {/* Filter Category */}
          <div className="font-semibold text-gray-700">{filterBy}</div>
          {options.map((option, index) => (
            <div key={index} className="flex items-center gap-x-3 space-y-2">
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
        </span>
      ) : (
        <div className="flex flex-wrap gap-x-4 gap-y-2">
          {options.map((option, index) => (
            <button
              key={index}
              className="border border-gray-400 text-gray-600 px-4 py-2 rounded-full hover:bg-gray-200 focus:bg-gray-300 transition-all"
              onClick={(e) => option.handler(e, filterBy, option.name)}
            >
              {option.name}
            </button>
          ))}
        </div>
      )}
    </div>
  );
};

export default Filter;
