import { useEffect, useState } from "react";

function Search({ handleSearchBeer, searchState, setSearchState }) {

  // wrap on a form tag because then when one press enter, it also submittes the search

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1" onClick={handleSearchBeer}> 
            Search
          </span>
        </div>
        <input
          className="form-control search-bar"
          value={searchState}
          type="text"
          onChange={(event) => {setSearchState(event.target.value)}}
        />
      </div>
    </div>
  );
}

export default Search;
