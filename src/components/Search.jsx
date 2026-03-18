import axios from "axios";
import { useEffect, useState } from "react";

function Search(props) {
  const [search, setSearch] = useState("");
  const handleSearch = (e) => setSearch(e.target.value);

  const baseURL = 'https://beers-api.edu.ironhack.com/beers'

  useEffect(() => {
    getSearch()
  }, [search])

  const getSearch = () => {
    axios
      .get(baseURL + `/search?q=${search}`)
      .then((beer) => {
        props.onSet(beer.data)
      })
      .catch((error) => {
        console.log(error)
      })
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
          value={search}
          onChange={handleSearch}
        />
      </div>
    </div>
  );
}

export default Search;
