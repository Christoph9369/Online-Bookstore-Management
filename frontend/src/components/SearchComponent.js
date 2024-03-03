import React, { useState } from "react";

const SearchComponent = () => {
  const [search, setSearch] = useState(" ");
  console.log(search);

  return (
    <div className="flex items-center">
      <div className="flex border border-purple-200 rounded">
        <input
          type="text"
          className="block w-full px-4 py-2 text-blue-700 bg-white border rounded-md focus:border-blue-400 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40"
          placeholder="Search..."
          onChange={(e) => setSearch(e.target.value)}
        />
        <button className="px-4 text-white bg-blue-600 border-l rounded ">
          Search
        </button>
      </div>
    </div>
  );
};

export default SearchComponent;
