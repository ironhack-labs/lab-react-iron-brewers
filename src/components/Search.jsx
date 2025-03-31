import axios from "axios";
import { useEffect, useState } from "react";



function Search({ setBeers, backup }) {
  const [search, setSearch] = useState("");


  const handleSearch = (e) => {
    setBeers(
      e.target.value
        ? backup.filter((beer) =>
            beer.name.toLowerCase().includes(e.target.value.toLowerCase())
          )
        : backup
    );
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
         onChange={handleSearch}
          type="text"
          className="form-control search-bar"
        />
      </div>
    </div>
  );
}

export default Search;
