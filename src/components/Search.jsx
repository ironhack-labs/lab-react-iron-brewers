import { useState, useEffect } from "react";
import axios from "axios";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  useEffect(() => {
    const fetchBeers = async () => {
      if (query) {
        try {
          const response = await axios.get(
            `https://ih-beers-api2.herokuapp.com/beers/search?q=${query}`
          );
          onSearch(response.data);
        } catch (error) {
          console.error("Failed to fetch beers:", error);
        }
      } else {
        try {
          const response = await axios.get(
            `https://ih-beers-api2.herokuapp.com/beers`
          );
          onSearch(response.data);
        } catch (error) {
          console.error("Failed to fetch beers:", error);
        }
      }
    };

    const timerId = setTimeout(() => fetchBeers(), 100); // Debounce delay
    return () => clearTimeout(timerId); // Cleanup on unmount or query change
  }, [query, onSearch]);

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text">Search</span>
        </div>
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search for beer..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default Search;
