import React, { useState } from "react";
import { Search, X } from "lucide-react";

const SearchInput = ({
  value = "",
  setValue = () => {},
  clearValue = () => {},
}) => {
  return (
    <div className="flex items-center border rounded-md shadow-sm bg-white">
      <div className="p-2">
        <Search className="w-5 h-5 text-gray-500" />
      </div>
      <input
        type="text"
        placeholder="Search..."
        className="flex-grow p-2 text-gray-700 outline-none"
        value={value}
        onChange={setValue}
      />
      {
        <button className="p-2">
          <X onClick={clearValue} className="w-5 h-5 text-gray-500" />
        </button>
      }
    </div>
  );
};

export default SearchInput;
