import axios from "axios";
import { useEffect, useState } from "react";

function Search() {
  const { query, setQuery } = useState();
  useEffect(() => {
    axios
      .get(`https://ih-beers-api2.herokuapp.com/beers/search?${query}={query}`)
      .then((respone) => console.log(respone))
      .catch((e) => {
        console.log("Error searching", e);
      });
  }, [query]);
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
          value={query}
          onChange={(e) => {
            setQuery(e.target.value);
          }}
        />
      </div>
    </div>
  );
}

export default Search;
