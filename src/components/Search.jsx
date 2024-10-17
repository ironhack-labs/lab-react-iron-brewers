import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react";

function Search({ handleSearch }) {

  const transmitSearchToParent = (event) => {
    handleSearch(event);
  }

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
          onChange={transmitSearchToParent}
        />
      </div>
    </div>
  );
}

export default Search;
