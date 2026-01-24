import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

function Search() {
  const [currentSearchInput, setCurrentSearchInput] = useState("");
  const [finalSearchTerm, setFinalSearchTerm] = useState(currentSearchInput);
  const [searchResults, setSearchResults] = useState([]); // State to hold the search results
  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  // Debounce the search term to avoid making too many API requests
  useEffect(() => {
    const debounceTimer = setTimeout(() => {
      setFinalSearchTerm(currentSearchInput);
    }, 500); // 500ms delay before updating the final search term

    // Cleanup the timer when the component re-renders or unmounts
    return () => {
      clearTimeout(debounceTimer);
    };
  }, [currentSearchInput]);

  // This effect will run when the debounced search term (finalSearchTerm) changes, triggering the API request
  useEffect(() => {
    if (finalSearchTerm) {
      // Make the API request to search for beers based on the search term
      setLoading(true);
      axios
        .get(
          `https://ih-beers-api2.herokuapp.com/beers/search?q=${finalSearchTerm}`
        )
        .then((response) => {
          console.log("Search results:", response.data);
          // Handle the response data (e.g., update a state to display beers)
          setSearchResults(response.data);
          setLoading(false);
        })
        .catch((error) => {
          console.error("Error fetching search results:", error);
          setError("Failed to fetch search results. Please try again later.");
          setLoading(false);
        });
    }
  }, [finalSearchTerm]);

  if (error) return <p>{error}</p>;

  // Event handler for updating the current search input as the user types
  const handleSearchInputChange = (event) => {
    setCurrentSearchInput(event.target.value);
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
          onChange={handleSearchInputChange}
          placeholder="Looking for a beer.."
          value={currentSearchInput || ""}
          type="text"
          className="form-control search-bar"
        />
      </div>
      <div className="search-results mt-4">
        {searchResults.length > 0
          ? searchResults.map((beer) => (
              <Link to={"/beers/" + beer._id} key={beer._id}>
                <div
                  className="card m-2 p-2 text-center"
                  style={{ width: "24rem", height: "18rem" }}
                >
                  <div className="card-body">
                    <img
                      src={beer.image_url}
                      style={{ height: "6rem" }}
                      alt={"image of" + beer.name}
                    />
                    <h5 className="card-title text-truncate mt-2">
                      {beer.name}
                    </h5>
                    <h6 className="card-subtitle mb-3 text-muted">
                      <em>{beer.tagline}</em>
                    </h6>
                    <p className="card-text">
                      Created by: {beer.contributed_by}
                    </p>
                  </div>
                </div>
              </Link>
            ))
          : !isLoading && <p>No results found.</p>}
      </div>
    </div>
  );
}

export default Search;
