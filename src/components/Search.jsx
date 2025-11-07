import axios from "axios";
import { useEffect, useState } from "react";

function Search({ beers, setBeers }) {
  const [searchQuery, setSearchQuery] = useState("");
  console.log(searchQuery);

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
          value={searchQuery}
          onChange={(e) => {
            const query = e.target.value;
            setSearchQuery(query);
            axios
              .get(
                `https://beers-api.edu.ironhack.com/beers/search?q=${query}`
              )
              .then((response) => {
                console.log(response)
                setBeers(response.data);
              })
              .catch((error) => {
                console.log(error);
              });
          }}
        />
      </div>
    </div>
  );
}

export default Search;
