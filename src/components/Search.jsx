import axios from "axios";
import { useState, useEffect } from "react";

const API_BASE_URL = 'https://ih-beers-api2.herokuapp.com/beers'


const Search = () => {

  const [searchResults, setSearchResults] = useState([])
  const [query, setQuery] = useState('')

  useEffect(() => {
    if (query.trim() !== '') {
      getSearchData();
    } else {
      setSearchResults([]);
    }
  }, [query]);

  const getSearchData = () => {

    axios
      .get(`${API_BASE_URL}/search?q=${query}`)
      .then(({ data }) => setSearchResults(data))
      .catch(err => console.log(err))
  }

  const handleInputChange = e => {
    const { value } = e.target
    setQuery(value)
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
          value={query}
          onChange={handleInputChange}
        />
      </div>
      <ul>
        {searchResults.map((beer) => (
          <li key={beer.id}>{beer.name}</li>
        ))}
      </ul>
    </div>
  );
}

export default Search;
