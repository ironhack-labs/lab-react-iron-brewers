// import axios from "axios";
import { useState } from "react";

// const API_URL = 'https://ih-beers-api2.herokuapp.com/'

function Search({ fetchBeerSearch }) {

  const [search, setSearch] = useState("")
  // const [searchList, setSearchList] = useState([])

  const handleSearchChange = e => {
    const { value } = e.target
    setSearch(value)
    fetchBeerSearch(value)

    // axios
    //   .get(`${API_URL}beers/search?q=${search}`)
    //   .then(response =>
    //     setSearchList(response.data),
        
    //   )


  }


  return (
    <div className="d-inline-flex justify-content-center align-items-center w-100 p-4">
      <div className="input-group mb-2 w-50">
        <div className="input-group-prepend">
          <span className="input-group-text" id="basic-addon1">
            Search
          </span>
        </div>
        <input value={search} onChange={handleSearchChange} type="text" className="form-control search-bar"
        />
      </div>
    </div>
  );
}

export default Search;
