import { useState } from "react";
import axios from "axios";

function Search({ onSearch }) {
  const [query, setQuery] = useState("");

  const handleSearch = (e) => {
    const searchTerm = e.target.value;
    setQuery(searchTerm);

    // Trigger the onSearch function passed from the parent
    if (searchTerm) {
      axios
        .get(`https://ih-beers-api2.herokuapp.com/beers/search?q=${searchTerm}`)
        .then((response) => {
          onSearch(response.data); // Pass the filtered beers to the parent
        })
        .catch((error) =>
          console.error("Error fetching search results:", error)
        );
    } else {
      onSearch([]); // If the search term is empty, return no results
    }
  };

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input
          type="text"
          className="form-control search-bar"
          placeholder="Search by name..."
          value={query}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
