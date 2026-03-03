import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSearch } from "./taskSlice";

export const SearchBar = () => {
  const dispatch = useDispatch();
  const [value, setValue] = useState("");

  useEffect(() => {
    const timeout = setTimeout(() => {
      dispatch(setSearch(value));
    }, 300);

    return () => clearTimeout(timeout);
  }, [value, dispatch]);

  return (
    <div className="search-container">
      <input
        type="text"
        aria-label="Search tasks"
        placeholder="Search tasks..."
        value={value}
        onChange={(e) => setValue(e.target.value)}
        className="search-input"
      />
      {value && (
        <button 
          onClick={() => setValue("")} 
          style={{ cursor: 'pointer' }}
          title="Clear search"
        >
          X
        </button>
      )}
    </div>
  );
};