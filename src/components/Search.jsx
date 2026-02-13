import axios from "axios";
import { useEffect, useState } from "react";

const apiURL = "https://ih-beers-api2.herokuapp.com/beers/search?q=";

function Search({ beers, setBeers }) {
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    if (searchTerm) {
      axios
        .get(`${apiURL}${searchTerm}`)
        .then((response) => {
          setBeers(response.data);
        })
        .catch((error) => {
          console.log(error);
        });
    }
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input type="text" className="form-control search-bar" value={searchTerm} onChange={handleSearch} />
      </div>
    </div>
  );
}

export default Search;
