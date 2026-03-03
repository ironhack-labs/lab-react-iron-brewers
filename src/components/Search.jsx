import React, { useState, useEffect } from 'react';
import { useSearchParams } from "react-router-dom";

function Search({ setSearchParams, searchParams, filterBeersOnChange }) {
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
          onChange={(e) => { filterBeersOnChange; }}
        />
      </div>
    </div>
  );
};

export default Search;
