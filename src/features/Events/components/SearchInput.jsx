import React, { useState } from "react";
import { Search, X } from "lucide-react";

const SearchInput = () => {
  const [query, setQuery] = useState("");

  const handleClear = () => {
    setQuery("");
  };

  return (
    <div className="flex items-center border rounded-md shadow-sm bg-white">
      <div className="p-2">
        <Search className="w-5 h-5 text-gray-500" />
      </div>
      <input
        type="text"
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        placeholder="Search..."
        className="flex-grow p-2 text-gray-700 outline-none"
      />
      {query && (
        <button onClick={handleClear} className="p-2">
          <X className="w-5 h-5 text-gray-500" />
        </button>
      )}
    </div>
  );
};

export default SearchInput;
